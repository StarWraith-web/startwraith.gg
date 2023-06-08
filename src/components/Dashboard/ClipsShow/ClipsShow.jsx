/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import { Box, useTheme } from "@mui/material";
import axios from "axios";
import { Header } from "../Header";
import { tokens } from "../../../theme/theme";
import { useEffect, useState } from "react";
import { ContainerLoader } from "../../Animations";
import { ButtonNext, ButtonPrev } from "../../Buttons";

import "./ClipsShow.scss";

export function ClipsShow() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [loading, setLoading] = useState(true);
  const [clips, setClips] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [clipsPerPage, setClipsPerPage] = useState(1);

  const pageNumbers = clips.length
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
          console.log("DATA: ", data);
          setClips(data);
          /* setItems(data.splice(0, ITEMS_PER_PAGE)); */
          setLoading(false);
        })
        .catch((err) => console.log(err));
    };

    getClips();
  }, []);

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
          flex="1 1 20%"
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Excepturi voluptate illum magni exercitationem nam illo
                voluptatem tempore iure sequi ducimus eius quo eaque, dolorem
                iste, dolor ipsum vitae. Esse, dignissimos?
              </p>
            </div>
            <div className="bottom-section-clips">
              <ButtonPrev prevHandler={prevHandler} currentPage={currentPage} />
              <ButtonNext nextHandler={nextHandler} currentPage={currentPage} pageNumbers={pageNumbers}/>
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
      if (item.urlType === "youtube") {
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

  return items;
};
