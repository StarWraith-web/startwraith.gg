/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { Box, Button, Divider, IconButton, useTheme } from "@mui/material";
import axios from "axios";
import { Header } from "../Header";
import { tokens } from "../../../theme/theme";
import { useEffect, useState } from "react";
import { ContainerLoader } from "../../Animations";
import { ButtonNext, ButtonPrev } from "../../Buttons";
import { toast } from "react-toastify";
import BlockOutlinedIcon from "@mui/icons-material/BlockOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";

import "./ClipsShow.scss";
import { pink } from "@mui/material/colors";

const importAll = (r) => {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
};

const images = importAll(
  require.context("../../../assets/img/ranks", false, /\.(png|jpe?g|svg)$/)
);

export function ClipsShow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(true);
  const [clips, setClips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clipsPerPage, setClipsPerPage] = useState(1);

  const pageNumbers = clips.length;
  const lastIndex = currentPage * clipsPerPage;
  const firstIndex = lastIndex - clipsPerPage;

  const nextHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
    setCurrentPage(currentPage + 1);
  };

  const prevHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 600);
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    const getClips = async () => {
      setLoading(true);
      await axios
        .get("https://api-starwraithgg.herokuapp.com/api/clips/get-clips")
        .then((resp) => {
          const { data } = resp;
          setClips(data);
          setLoading(false);
        })
        .catch((err) => toast.error(err.response.data.msg));
    };

    getClips();
  }, []);

  const handleView = async (_id) => {
    await axios
      .patch("https://api-starwraithgg.herokuapp.com/api/clips/view-clip", {
        _id,
      })
      .then((resp) => {
        toast.success(resp.data.msg);
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  const handleRemoveOnClick = (itemList, item) => {
    const index = itemList.indexOf(item);
    let newItems = [...itemList];
    newItems.splice(index, 1);
    setClips(newItems);
  };

  return (
    <Box m="20px">
      <Header title="Clips" subtitle="Página de clips" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 100%"
          backgroundColor={colors.primary[400]}
          borderRadius="4px"
          height="75vh"
        >
          {loading ? (
            <div className="overlay-box">
              <ContainerLoader />
            </div>
          ) : (
            <Wrapper
              clips={clips}
              lastIndex={lastIndex}
              firstIndex={firstIndex}
            />
          )}
        </Box>
        <Box
          flex="1 1 25%"
          backgroundColor={colors.primary[400]}
          borderRadius="4px"
          height="75vh"
          ml="15px"
        >
          <div className="box-section-clips-buttons">
            <div className="top-section-clips">
              <div className="top-section-clips__title">
                <h1>Controles</h1>
              </div>
            </div>
            <div className="middle-section-clips">
              <ClipInfo
                clips={clips}
                lastIndex={lastIndex}
                firstIndex={firstIndex}
                handleRemoveOnClick={handleRemoveOnClick}
              />
            </div>
            <div className="bottom-section-clips">
              <div className="buttons-steps">
                <ButtonPrev
                  prevHandler={prevHandler}
                  currentPage={currentPage}
                />
                {clips
                  .map((item, index) => (
                    <div className="container-check-clip" key={item._id}>
                      <input
                        type="checkbox"
                        id="checkbox-clip"
                        onChange={() => {
                          handleView(item._id);
                          handleRemoveOnClick(clips, item);
                        }}
                      />
                      <label htmlFor="checkbox-clip">
                        <div id="tick_mark"></div>
                      </label>
                    </div>
                  ))
                  .slice(firstIndex, lastIndex)}
                <ButtonNext
                  nextHandler={nextHandler}
                  currentPage={currentPage}
                  pageNumbers={pageNumbers}
                />
              </div>

              <div className="button-cliplist">
                <Button variant="contained" size="large">
                  Listado de clips
                </Button>
              </div>
            </div>
          </div>
        </Box>
      </Box>
    </Box>
  );
}

const Wrapper = (props) => {
  const { clips, firstIndex, lastIndex } = props;
  const items = clips
    .map((item) => {
      if (item.urlType !== "youtube") {
        return (
          <div className="container-button-clip" key={item._id}>
            <p>
              Por motivo de cookies, los clips de <b>medaltv</b> y <b>twitch</b>{" "}
              no se renderizaran en el dashboard. Por favor{" "}
              <b>pulse el botón</b> para abrir el clip.
            </p>
            <Button
              variant="contained"
              size="large"
              onClick={() => window.open(item.urlClip, "_blank")}
            >
              Abrir Clip
            </Button>
          </div>
        );
      } else {
        return (
          <div className="video-clips" key={item._id}>
            <iframe
              className="video"
              width="100%"
              title={item.title}
              src={item.urlClip}
              data-cookieconsent="marketing"
              allowFullScreen
            ></iframe>
          </div>
        );
      }
    })
    .slice(firstIndex, lastIndex);

  return items.length === 0 ? (
    <div className="container-button-clip">
      <p>No hay mas clips para ver</p>
    </div>
  ) : (
    items
  );
};

const ClipInfo = (props) => {
  const [favorite, setFavorite] = useState(false);
  const { clips, firstIndex, lastIndex, handleRemoveOnClick } = props;

  const handleBanUser = async (name) => {
    const data = {
      name,
      bannedDate: new Date().toLocaleDateString("en"),
    };
    await axios
      .post("https://api-starwraithgg.herokuapp.com/api/users/ban-user", data)
      .then((resp) => {
        toast.success(resp.data.msg);
      })
      .catch((err) => toast.error(err.response.data.msg));
  };

  const handleFavorite = async (_id) => {
    console.log(favorite);
    console.log(_id);
    await axios
      .patch("http://localhost:8000/api/clips/add-to-favorite", {
        _id,
        favorite,
      })
      .then((resp) => {
        console.log(resp);
        toast.success(resp.data.msg);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.msg);
      });
  };

  const items = clips
    .map((item) => {
      let image = `${item.rankKey}.png`;
      return (
        <Box p="15px" key={item._id}>
          <h2 style={{ textAlign: "center" }}>{item.title}</h2>
          <Box display="inline-block">
            <Box pt="20px" pb="20px">
              <Box p="5px" display="flex" alignItems="center">
                <p className="text-bold">
                  <b>Autor:</b> {item.author}
                </p>
              </Box>
              <Box p="5px" display="flex" alignItems="center">
                <p className="text-bold">
                  <b>Rango:</b>
                </p>
                <div className="image-rank">
                  <img src={images[image]} alt={item.rank} />
                </div>
              </Box>

              <Box p="5px" display="flex" alignItems="center">
                <p className="text-bold">
                  <b>Fecha subida:</b> {item.uploadDate}
                </p>
              </Box>
              <Box p="5px" display="flex" alignItems="center">
                <p className="text-bold">
                  <b>Tipo clip:</b> {item.urlType}
                </p>
              </Box>
            </Box>
          </Box>
          <Divider variant="middle" />
          <Box display="inline-block">
            <Box pt="20px" pb="20px">
              <Box p="5px" display="flex" alignItems="center">
                <p className="text-bold">
                  <b>Banear a usuario:</b>{" "}
                  <IconButton
                    onClick={() => {
                      handleBanUser(item.author);
                      handleRemoveOnClick(clips, item);
                    }}
                  >
                    <BlockOutlinedIcon />
                  </IconButton>
                </p>
              </Box>
              <Box p="5px" display="flex" alignItems="center">
                <p className="text-bold">
                  <b>Añadir a favorito:</b>{" "}
                  <IconButton
                    onClick={() => {
                      setFavorite(prev => !prev);
                      handleFavorite(item._id)
                    }}
                  >
                    <FavoriteOutlinedIcon
                      sx={favorite || item.favorite ? { color: pink[500] } : {}}
                    />
                  </IconButton>
                </p>
              </Box>
            </Box>
          </Box>
        </Box>
      );
    })
    .slice(firstIndex, lastIndex);

  return items;
};
