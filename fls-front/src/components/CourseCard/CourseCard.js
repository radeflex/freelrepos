import { useState } from "react";
import "./CourseCard.css";
import { Button } from "react-bootstrap";

const CourseCard = ({ head, header, text, dur, img, type }) => {
  const [value, setValue] = useState(false);
  return (
    <div className="courseCard" style={type === "primary" ? { backgroundColor: "#88b9db"} : type === "main" ? {backgroundColor: "#d45055"} : {}}>
      <div class="c-body">
        <span class="head" style={type === "primary" ? { backgroundColor: "#88b9db", color: "#515659"} : type === "main" ? {color: "#cfcfcf"} : {}}>{head}</span>
        <h3 class="cc-header" style={type === "primary" ? {color: "#313436"} : type === "main" ? {color: "#cfcfcf"} : {}}>{header}</h3>
        <button
          className="cc-btn"
          style={type === "primary" ? { backgroundColor: "#88b9db", color: "#313436"} : type === "main" ? { backgroundColor: "#d45055", color: "#cfcfcf"} : {}}
          value="false"
          onClick={(e) => {
            setValue(!value)
            console.log(value);
          }}
        >
          Подробнее {">>"}
        </button>
        {<p className="c-text" style={type === "primary" ? { color: "#515659"}: type === "main" ? { color: "#515659"}: {}}>{text}</p> && value}
        <span className="c-dur" style={type === "primary" ? { color: "#515659"} : type === "main" ?{ color: "#cfcfcf"} : {}}>{dur}</span>
        <br />
        <Button className="c-btn">Контакты</Button>
      </div>
      <img className="cc-img" src={img} alt="course-pic"></img>
    </div>
  );
};

export default CourseCard;
