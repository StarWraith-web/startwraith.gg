/* eslint-disable no-unused-vars */
import axios from "axios";
import { Box, Button, useTheme } from "@mui/material";
import { tokens } from "../../../theme/theme";
import { Header } from "../Header";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { ContainerLoader } from "../../Animations";

const columns = [
  { field: "id", headerName: "ID", width: 200 },
  { field: "author", headerName: "Autor", width: 100 },
  { field: "title", headerName: "Título Clip", width: 400 },
  { field: "rank", headerName: "Rango", width: 100 },
  { field: "urlClip", headerName: "Url", width: 500 },
  { field: "uploadDate", headerName: "Fecha Subida", width: 150 },
  {
    field: "action",
    headerName: "Action",
    sortable: false,
    renderCell: (params) => {
      return (
        <Button variant="contained" size="large" onClick={() => window.open(params.row.urlClip, "_blank")}>
          Ver clip
        </Button>
      );
    },
  },
];

export function ClipsViews() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [loading, setLoading] = useState(false);
  const [clips, setClips] = useState([]);

  useEffect(() => {
    const getClips = async () => {
      setLoading(true);
      await axios
        .get(
          "https://api-starwraithgg.herokuapp.com/api/clips/get-clips-visualized"
        )
        .then((resp) => {
          const { data } = resp;
          const mapRes = data.map((item) => {
            return {
              author: item.author,
              favorite: item.favorite,
              rank: item.rank,
              title: item.title,
              uploadDate: item.uploadDate,
              urlClip: item.urlClip,
              urlType: item.urlType,
              visualized: item.visualized,
              id: item._id,
            };
          });
          setClips(mapRes);
          setLoading(false);
        })
        .catch((err) => toast.error(err.msg));
    };

    getClips();
  }, []);

  return (
    <Box m="20px">
      <Header title="Clips Vistos" subtitle="Página de clips vistos" />
      <Box
        backgroundColor={colors.primary[400]}
        borderRadius="4px"
        height="75vh"
      >
        {loading ? (
          <ContainerLoader />
        ) : (
          <DataGrid
            rows={clips}
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
