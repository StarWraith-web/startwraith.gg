/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import "./Clips.scss";
import { useEffect, useState } from "react";
import { ButtonGlitch, Footer, TopBar } from "../../components";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { generateID } from "../../utils/functions";
import {
  TextGlitchRandomized,
  TextGlitchUnderlined,
} from "../../components/Animations";
import { InputText } from "../../components/InputText";

export function Clips() {
  const redirect = "https://starwraith.netlify.app/clips";
  const id = generateID();
  const { search, error_description } = useLocation();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [clipId, setClipId] = useState(null);
  const code = new URLSearchParams(search).get("code");

  const navigate = useNavigate();

  useEffect(() => {
    const retrieveAccessToken = async () => {
      const headers = {
        "Content-Type": "application/x-www-form-urlencoded",
      };
      const params = {
        client_id: "yefcdrm50w8r7hdfcq4fpphkpdqqph",
        client_secret: "lrdfwhnetno40mivgbsz1ynoredqt4",
        grant_type: "authorization_code",
        code: code,
        redirect_uri: redirect,
      };

      await axios
        .post("https://id.twitch.tv/oauth2/token", params, headers)
        .then((data) => {
          const { access_token, refresh_token } = data.data;
          console.log(data);
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
  }, []);
  console.log(localStorage.getItem("twitch-token"));

  return (
    <div className="container">
      <div className="top-bar-container">
        <TopBar />
      </div>
      <div className="main-content">
        <div style={{ padding: "50px" }} className="center-center">
          {clipId ? (
            <>
              <div class="upload-clip">
                <div class="are-upload-clip">
                  <div className="box-upload">
                    <div className="box-upload__title">
                      <TextGlitchRandomized text="Subir clip" />
                    </div>
                    <div className="box-upload__content">
                      <form>
                        <div className="form-group">
                          <InputText
                            type="text"
                            name="title"
                            placeholder="Título"
                          />
                        </div>
                        <div className="form-group">
                          <InputText type="text" name="url" placeholder="Url" />
                        </div>
                      </form>
                    </div>
                    <div className="box-upload__buttons">
                      <ButtonGlitch text="Subir mi clip" />
                    </div>
                  </div>
                </div>
                <div class="area-help">
                  <div class="area-help__title">
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
                      <ButtonGlitch text="Subir mi clip" />
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
