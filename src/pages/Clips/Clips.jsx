/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { ButtonGlitch, Checkbox, Footer, TopBar } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import { generateID } from "../../utils/functions";
import { TextGlitchRandomized } from "../../components/Animations";
import { InputText } from "../../components/InputText";
import "./Clips.scss";

export function Clips() {
  const redirect = "https://starwraith.netlify.app/clips";
  const id = generateID();
  const { search, error_description } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [clipId, setClipId] = useState(null);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [title, setTitle] = useState("");
  const [url, setUrl] = useState("");
  const [urlType, setUrlType] = useState("");
  const [checkedYoutube, setCheckedYoutube] = useState(false);
  const [checkedMedaltv, setCheckedMedaltv] = useState(false);
  const [checkedTwitch, setCheckedTwitch] = useState(false);
  const code = new URLSearchParams(search).get("code");

  const navigate = useNavigate();

  useEffect(() => {
    const getUserInfo = async () => {
      const config = {
        headers: {
          "Client-Id": "yefcdrm50w8r7hdfcq4fpphkpdqqph",
          Authorization: `Bearer ${token}`,
        },
      };
      await axios
        .get("https://api.twitch.tv/helix/users", config)
        .then((resp) => {
          const { login } = resp.data.data[0];
          setUserName(login);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    const retrieveAccessToken = async () => {
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      };
      const params = {
        client_id: "yefcdrm50w8r7hdfcq4fpphkpdqqph",
        client_secret: "lrdfwhnetno40mivgbsz1ynoredqt4",
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect,
      };

      await axios
        .post("https://id.twitch.tv/oauth2/token", params, config)
        .then((data) => {
          const { access_token, refresh_token } = data.data;
          setToken(access_token);
          localStorage.setItem("twitch-token", access_token);
          localStorage.setItem("twitch-token-refresh", refresh_token);
          setClipId(id);
          navigate(`upload-clip/${id}`);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    if (code !== null) {
      retrieveAccessToken();
    }
    if (token !== "") {
      getUserInfo();
    }
  }, [token]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if ([urlType, url, userName, title].includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }

    const data = {
      author: userName,
      title: title,
      urlClip: url,
      visualized: false,
      uploadDate: new Date().toLocaleDateString("en"),
      urlType: urlType,
      rank: "iron",
    };
    console.log(data);
    await axios
      .post(
        "https://api-starwraithgg.herokuapp.com/api/clips/upload-clip",
        data
      )
      .then((resp) => {
        console.log(resp);
        toast.success(resp.data.msg)
        navigate("/");
      })
      .catch((err) => {
        toast.error(err.response.data.msg);
      });
  };

  return (
    <div className="container">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="main-content">
        <div style={{ padding: "50px" }} className="center-center">
          {clipId ? (
            <>
              <div className="upload-clip">
                <div className="are-upload-clip">
                  <div className="box-upload">
                    <div className="box-upload__title">
                      <TextGlitchRandomized text="Subir clip" />
                    </div>
                    <div className="box-upload__content">
                      <div className="box-upload__content__left">
                        <div className="form-group">
                          <InputText
                            type="text"
                            name="title"
                            placeholder="Título"
                            value={title}
                            changeValue={setTitle}
                          />
                        </div>
                        <div className="form-group">
                          <InputText
                            type="text"
                            name="url"
                            placeholder="Url"
                            value={url}
                            changeValue={setUrl}
                          />
                        </div>
                      </div>
                      <div className="box-upload__content__right">
                        <h1>Tipo de clip</h1>
                        <div className="checboxs-clips">
                          <Checkbox
                            text="Youtube"
                            checked={checkedYoutube}
                            changeValue={() => {
                              setCheckedYoutube(!checkedYoutube);
                              setCheckedMedaltv(false);
                              setCheckedTwitch(false);
                              setUrlType("youtube");
                            }}
                          />
                          <Checkbox
                            text="Medal.tv"
                            checked={checkedMedaltv}
                            changeValue={() => {
                              setCheckedMedaltv(!checkedMedaltv);
                              setCheckedTwitch(false);
                              setCheckedYoutube(false);
                              setUrlType("medaltv");
                            }}
                          />
                          <Checkbox
                            text="Twitch"
                            checked={checkedTwitch}
                            changeValue={() => {
                              setCheckedTwitch(!checkedTwitch);
                              setCheckedYoutube(false);
                              setCheckedMedaltv(false);
                              setUrlType("twitch");
                            }}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="box-upload__buttons">
                      <ButtonGlitch
                        text="Subir mi clip"
                        type="button"
                        method={handleSubmit}
                      />
                    </div>
                  </div>
                </div>
                <div className="area-help">
                  <div className="area-help__title">
                    <TextGlitchRandomized text="¿Tienes problemas al subir tu clip?" />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="container-uploadclip">
              <div className="upload-clip-area">
                <div className="container-box-clip">
                  <div className="container-box-clip__title">
                    <TextGlitchRandomized text="Subir mi clip" />
                  </div>
                  <div className="container-box-clip__content">
                    <p>
                      ¿Eres sub? ¡Comparte tu clip y podré reaccionar a él en mi
                      canal de twitch!
                    </p>
                  </div>
                  <div className="container-box-clip__button">
                    <a
                      href={`https://id.twitch.tv/oauth2/authorize?response_type=code&client_id=yefcdrm50w8r7hdfcq4fpphkpdqqph&redirect_uri=${encodeURIComponent(
                        redirect
                      )}&scope=user%3Aread%3Asubscriptions`}
                    >
                      <ButtonGlitch text="Subir mi clip" type="button" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="upload-clip-content-area">
                <div className="upload-clip-content-area__title">
                  <TextGlitchRandomized text="¿Eres sub? Comparte tu clip" />
                </div>
                <div className="upload-clip-content-area__content">
                  <p>
                    ¿Te has marcado la jugada de tu vida y quieres compartirlo
                    con nosotros, o tal vez te has marcado la vomitada de tu
                    vida y quieres que los demás la veamos?. Sea cual sea el
                    caso, no lo dudes y <b>sube tu clip</b> para que lo veamos
                    en directo los <b>domingos por la tarde</b>.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="bottom-section">
        <div className="footer-section">
          <Footer />
        </div>
      </div>
    </div>
  );
}
