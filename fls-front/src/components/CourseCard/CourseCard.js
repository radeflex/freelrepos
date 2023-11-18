import { useState } from "react";
import "./CourseCard.css";
import { Button, Accordion, Card, useAccordionButton } from "react-bootstrap";

const CourseCard = ({ head, header, text, dur, img, type }) => {
  function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionButton(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <span
        style={{ color: "#e8e6e6", cursor: "pointer" }}
        onClick={decoratedOnClick}
      >
        {children}
      </span>
    );
  }
  return (
    <div className="courseCard" style={type === "primary" ? { backgroundColor: "#88b9db"} : type === "main" ? {backgroundColor: "#d45055"} : {}}>
      <div class="c-body">
        <span class="head" style={type === "primary" ? { backgroundColor: "#88b9db", color: "#515659"} : type === "main" ? {color: "#cfcfcf"} : {}}>{head}</span>
        <h3 class="cc-header" style={type === "primary" ? {color: "#313436"} : type === "main" ? {color: "#cfcfcf"} : {}}>{header}</h3>
        <Accordion defaultActiveKey="0">
      <Card style={{border: 0}}>
        <Card.Header style={type === "primary" ? {padding: 0, border: 0, backgroundColor: "#88b9db"} : type === "main" ? {padding: 0, border: 0, backgroundColor: "#d45055"} : {padding: 0, border: 0, backgroundColor: "rgb(74, 43, 26)" }}>
          <CustomToggle eventKey="0">{"Подробнее >>"}</CustomToggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body style={type === "primary" ? {padding: 0, border: 0, backgroundColor: "#88b9db"} : type === "main" ? {padding: 0, border: 0, backgroundColor: "#d45055"} : {padding: 0, border: 0, backgroundColor: "rgb(74, 43, 26)", color: "#cfcfcf"}}>{text}</Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
        <span className="c-dur" style={type === "primary" ? { color: "#515659"} : type === "main" ? { color: "#cfcfcf"} : {}}>{dur}</span>
        <br />
        <Button className="c-btn">Контакты</Button>
      </div>
      <img className="cc-img" src={img} alt="course-pic"></img>
    </div>
  );
};

export default CourseCard;
