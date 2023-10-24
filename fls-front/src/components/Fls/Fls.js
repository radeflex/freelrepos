import "./Fls.css";
import { Button, Card, Placeholder } from "react-bootstrap";
import { useEffect, useState } from "react";
import githubIcon from "./../../media/img/githubIcon.png";
import vkIcon from "./../../media/img/vkIcon.png";
import emailIcon from "./../../media/img/emailIcon.png";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsersData } from "../../redux/slices/flsSlice";
import noAva from "../../media/img/no-ava.png";
import { useNavigate } from "react-router-dom";

const Fls = () => {
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  const userid = useSelector((state) => state.auth.data);
  const isLoading = useSelector((state) => state.fls.status);
  useEffect(() => {
    dispatch(fetchUsersData()).then((res) => setData(res.payload));
  }, []);
  const CardSkeleton = () => {
    return (
      <Card
        style={{
          width: "70rem",
          height: "13rem",
          margin: "15px",
        }}
      >
        <Card.Body>
          <Placeholder
            as={Card.Title}
            style={
              window.innerWidth <= 500 ? { width: "140px" } : { width: "800px" }
            }
            animation="glow"
          >
            <Placeholder xs={10} />
          </Placeholder>
          <Placeholder
            style={
              window.innerWidth <= 500 ? { width: "250px" } : { width: "800px" }
            }
            as={Card.Text}
            animation="glow"
          >
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={5} />
          </Placeholder>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-end",
              padding: "10px",
              width: "30%",
              height: "40%",
            }}
          >
            <Placeholder.Button
              style={
                window.innerWidth <= 500
                  ? { width: "140px" }
                  : { width: "150px", height: "45px" }
              }
              variant="outline-primary"
              xs={6}
            />
          </div>
        </Card.Body>
      </Card>
    );
  };
  const CardComp = ({
    name,
    skills,
    rating,
    avatar,
    text,
    github,
    email,
    vk,
    loggedId,
    userId,
  }) => {
    return (
      <Card
        style={
          window.innerWidth <= 500
            ? {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                minHeight: "500px",
                margin: "10px",
                fontSize: "13px",
                padding: "20px",
                maxHeight: "800px",
              }
            : {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-end",
                flexWrap: "wrap",
                width: "90%",
                height: "300px",
                margin: "15px",
              }
        }
      >
        <div
          style={{ display: "flex", alignItems: "flex-start", height: "100%" }}
        >
          <img
            src={avatar.includes("http") ? avatar : noAva}
            height={window.innerWidth <= 500 ? 100 : 125}
            width={window.innerWidth <= 500 ? 100 : 125}
            alt="cardAvatar"
            style={{
              margin: "20px",
              border: "1px solid lightgray",
              borderRadius: "10px",
            }}
          />
        </div>

        <Card.Body
          style={
            window.innerWidth <= 500
              ? {
                  fontSize: "13px",
                  width: "90%",
                  padding: "20px",
                  maxHeight: "700px",
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "70%",
                }
          }
        >
          <Card.Title>
            <p
              style={{
                fontSize: "25px",
                fontWeight: "600",
                width: "700px",
                textAlign: "start",
              }}
            >
              {loggedId === userId ? name + " (это вы) " : name}
            </p>
          </Card.Title>
          <Card.Subtitle
            style={{ fontSize: "15px", color: "blue", textAlign: "start" }}
            className="mb-2"
          >
            {skills}
          </Card.Subtitle>
          <Card.Text>
            <p
              style={
                window.innerWidth <= 500
                  ? { fontSize: "13px", width: "100%", textAlign: "start" }
                  : {
                      width: "700px",
                      fontSize: "15px",
                      textAlign: "start",
                      color: "rgb(70,70,70)",
                    }
              }
            >
              {text}
            </p>
          </Card.Text>

          <Card.Text>
            <div
              style={
                window.innerWidth <= 500
                  ? {
                      width: "100%",
                      display: "flex",
                      maxHeight: "100px",
                      justifyContent: "space-between",
                      minHeight: "70px",
                    }
                  : {
                      display: "flex",
                      maxWidth: "50%",
                      width: "12%",
                      justifyContent: "space-between",
                    }
              }
              className="imgs"
            >
              {github !== "" && (
                <p
                  style={{
                    width: "700px",
                    fontSize: "15px",
                    textAlign: "start",
                    color: "rgb(70,70,70)",
                  }}
                >
                  <a href={github}>
                    <img
                      height={50}
                      width={50}
                      style={{ borderRadius: "5px", cursor: "pointer" }}
                      src={githubIcon}
                      alt="github"
                    />
                  </a>
                </p>
              )}
              {vk !== "" && (
                <p
                  style={{
                    width: "700px",
                    fontSize: "15px",
                    textAlign: "start",
                    color: "rgb(70,70,70)",
                  }}
                >
                  <a href={vk}>
                    <img
                      height={50}
                      width={50}
                      style={{ borderRadius: "5px", cursor: "pointer" }}
                      src={vkIcon}
                      alt="vk"
                    />
                  </a>
                </p>
              )}
              {email !== "" && (
                <p
                  style={{
                    width: "700px",
                    fontSize: "15px",
                    textAlign: "start",
                    color: "rgb(70,70,70)",
                  }}
                >
                  <a href={"mailto:" + email}>
                    <img
                      height={50}
                      width={50}
                      style={{ borderRadius: "5px", cursor: "pointer" }}
                      src={emailIcon}
                      alt="email"
                    />
                  </a>
                </p>
              )}
            </div>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div class="cards-list">
      {isLoading === "loading" || !data
        ? [Array(5)].map(() => {
            return <CardSkeleton />;
          })
        : data.map((items) => {
            return (
              <CardComp
                userId={items._id}
                loggedId={userid !== null && userid._id}
                name={items.name}
                skills={items.skills}
                avatar={items.avatar ? items.avatar : noAva}
                text={items.biography}
                github={
                  items.github.includes("https://github.com")
                    ? items.github
                    : ""
                }
                vk={items.vk.includes("https://vk.com") ? items.vk : ""}
                email={items.email.includes("@") ? items.userEmail : ""}
              />
            );
          })}
      {isLoading === "loaded" && data.length === 0 && (
        <div style={{ width: "100%", margin: "30px", textAlign: "start" }}>
          <h6>Здесь пока нет исполнителей.</h6>
        </div>
      )}
    </div>
  );
};

export default Fls;
