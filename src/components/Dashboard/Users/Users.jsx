/* eslint-disable no-unused-vars */
import axios from "axios";
import { Box, Button, useTheme, IconButton } from "@mui/material";
import { tokens } from "../../../theme/theme";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Header } from "../Header";
import { ContainerLoader } from "../../Animations";
import { DataGrid } from "@mui/x-data-grid";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";

const columns = [
  { field: "id", headerName: "ID", width: 400 },
  { field: "name", headerName: "User", width: 400 },
  { field: "bannedDate", headerName: "Fecha de baneo", width: 400 },
  {
    field: "action",
    headerName: "Acciones",
    width: 400,
    sortable: false,
    renderCell: (params) => {
      const unbanUser = async (_id) => {
        await axios
          .post("https://api-starwraith-85233a238ae2.herokuapp.com/api/users/unban-user", {
            _id,
          })
          .then((resp) => {
            toast.success(resp.data.msg);
          })
          .catch((err) => toast.error(err.response.data.msg));
      };
      return (
        <IconButton
          color="success"
          size="large"
          onClick={() => unbanUser(params.row.id)}
        >
          <BlockOutlinedIcon />
        </IconButton>
      );
    },
  },
];

export function Users() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(false);
  const [bannedList, setBannedList] = useState([]);

  useEffect(() => {
    const getClips = async () => {
      setLoading(true);
      await axios
        .get("https://api-starwraith-85233a238ae2.herokuapp.com/api/users/banned-users")
        .then((resp) => {
          const { data } = resp;
          const mapRes = data.map((item) => {
            return {
              name: item.name,
              bannedDate: item.bannedDate,
              id: item._id,
            };
          });
          setBannedList(mapRes);
          setLoading(false);
        })
        .catch((err) => toast.error(err.msg));
    };

    getClips();
  }, []);

  return (
    <Box m="20px">
      <Header
        title="Usuarios Baneados"
        subtitle="Página de usuarios baneados"
      />
      <Box
        backgroundColor={colors.primary[400]}
        borderRadius="4px"
        height="75vh"
      >
        {loading ? (
          <ContainerLoader />
        ) : (
          <DataGrid
            rows={bannedList}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[10, 15]}
          />
        )}
      </Box>
    </Box>
  );
}
