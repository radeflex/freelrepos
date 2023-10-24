import "./Profile.css";
import githubIcon from "../../media/img/githubIcon.png";
import vkIcon from "../../media/img/vkIcon.png";
import emailIcon from "../../media/img/emailIcon.png";
import noavatar from "../../media/img/no-ava.png";
import { Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { editStatus } from "../../redux/slices/profileSlice";
import { Children } from "react";

const Profile = () => {
  const userData = useSelector((state) => state.auth.data);
  const success = useSelector(editStatus);
  const Head = ({ text }) => {
    return <span style={{ opacity: 0.5 }}>{text}</span>;
  };
  const SocLink = ({ img, link }) => {
    return (
      <a href={link}>
        <img
          alt="icon"
          src={img}
          height={50}
          style={{ borderRadius: "10px" }}
          width={50}
        />
      </a>
    );
  };
  if (!userData) {
    return <Navigate to="/" />;
  }
  if (success) {
    window.location.reload();
  }
  return (
    <div className="profilePage">
      <h1>Мой профиль</h1>
      <div className="profile-block">
        <div className="pb-data">
          <div
            class="pd-img"
            style={
              window.innerWidth <= 500
                ? {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                  }
                : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    flexDirection: "column",
                    height: "250px",
                  }
            }
          >
            <img
              src={userData.avatar && userData.avatar.includes("http") ? userData.avatar : noavatar}
              style={{
                border: "1px solid rgb(89, 92, 238)",
                borderRadius: "10px",
              }}
              height={window.innerWidth <= 500 ? 75 : 175}
              width={window.innerWidth <= 500 ? 75 : 175}
              alt="avatarPic"
            />
            <Link to={"/edit/" + userData._id}>
              <Button
                onClick={() => {
                  console.log(userData);
                }}
                variant="success"
                type="submit"
                style={window.innerWidth <= 500 ? { fontSize: "10px" } : {}}
              >
                Редактировать профиль
              </Button>
            </Link>
          </div>

          <div className="pd-info">
            <Head text="Имя" /> <h4 className="user-name">{userData.name}</h4>
            <Head text="Описание" />
            <div
              className="user-bio"
            >
                {userData.biography}
            </div>
            <Head text="Навыки" />{" "}
            <p className="user-skills" style={{textAlign: "start", color: "blue"}}>{userData.skills}</p>
            <Head text="Контакты" />{" "}
            <div class="cont-images"
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                height: "60px",
                width: "300px"
              }}
            >
              {userData.github.includes("https://github.com/") ? (
                <SocLink link={userData.github} img={githubIcon} />
              ) : (
                ""
              )}
              {userData.vk.includes("https://vk.com/") ? (
                <SocLink link={userData.vk} img={vkIcon} />
              ) : (
                ""
              )}
              {userData.userEmail.includes("@") ? (
                <SocLink
                  link={"mailto:" + userData.userEmail}
                  img={emailIcon}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
