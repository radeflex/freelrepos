import "./Main.css"
import {Button} from "react-bootstrap"
import {useNavigate} from "react-router-dom"
import folder from "../../media/img/folder.webp"

const Main = () => {
  const navigate = useNavigate();
  return <div className="mainPage">
    <div className="main-banner">
      <div class="b-content"> 
        <h2 class="m-slog">Занимайтесь тем, чем нравится.</h2>
        <h5 class="m-text">Начните свой путь фрилансера с опытными преподавателями прямо сейчас!</h5>
        <Button variant="outline-primary" onClick={() => navigate("/courses")} style={{height: "15%", borderRadius: "50px", fontSize: "25px", fontWeight: 600, color: "white"}}>Перейти к курсам</Button>
      </div>
      <img className="m-folder" src={folder} alt="folder" />
    </div>
  </div>
}

export default Main;