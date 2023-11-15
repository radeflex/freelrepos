import { Card, Button, Placeholder, Overlay } from "react-bootstrap";
import "./Order.css";
import noPhoto from "../../media/img/no-photo.png";
import { useEffect, useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchWorks, fetchWorksDelete } from "../../redux/slices/worksSlice";
import { useNavigate, Link } from "react-router-dom";
import { logged } from "../../redux/slices/authSlice";

const Orders = () => {
  function ButtInfo({ contlink }) {
    const [show, setShow] = useState(false);
    const target = useRef(null);

    return (
      <>
        <Button
          variant="outline-primary"
          ref={target}
          onClick={() => setShow(!show)}
        >
          Посмотреть контакты
        </Button>
        <Overlay
          target={target.current}
          show={show}
          placement={window.innerWidth <= "500" ? "bottom" : "right"}
        >
          {({
            placement: _placement,
            arrowProps: _arrowProps,
            show: _show,
            popper: _popper,
            hasDoneInitialMeasure: _hasDoneInitialMeasure,
            ...props
          }) => (
            <div
              {...props}
              style={{
                position: "absolute",
                backgroundColor: "rgba(100, 100, 100, 0.85)",
                padding: "2px 10px",
                color: "white",
                borderRadius: 3,
                ...props.style,
              }}
            >
              {contlink}
            </div>
          )}
        </Overlay>
      </>
    );
  }
  const dispatch = useDispatch();
  const [data, setData] = useState([]);
  const isLogged = useSelector(logged);
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchWorks()).then((res) => setData(res.payload));
  }, []);
  const successDel = useSelector((state) => state.works.dstatus === "loaded");
  const isDeletable = useSelector((state) => state.auth.data);
  const isLoading = useSelector((state) => state.works.status);
  const realDate = (date) => {
    const months = {
      1: "января",
      2: "февраля",
      3: "марта",
      4: "апреля",
      5: "мая",
      6: "июня",
      7: "июля",
      8: "августа",
      9: "сентября",
      10: "октября",
      11: "ноября",
      12: "декабря",
    };
    const data =
      date.slice(8, 10) +
      " " +
      months[date.slice(5, 7)] +
      " " +
      date.slice(0, 4) +
      " в " +
      `${+date.slice(11, 13) + 3}` +
      date.slice(13, 16);
    return data;
  };
  const deleteWork = (id) => {
    if (window.confirm("Вы действительно хотите удалить запись?")) {
      dispatch(fetchWorksDelete(id));
    }
  };

  if (successDel) {
    window.location.reload();
  }

  const CardSkeleton = () => {
    return (
      <Card
        style={
          window.innerWidth <= 500
            ? {
                width: "70rem",
                height: "13rem",
                margin: "15px",
              }
            : {
                width: "70rem",
                height: "13rem",
                margin: "15px",
              }
        }
      >
        <Card.Body>
          <Placeholder
            as={Card.Title}
            style={
              window.innerWidth <= 500 ? { width: "220px" } : { width: "800px" }
            }
            animation="glow"
          >
            <Placeholder xs={10} />
          </Placeholder>
          <Placeholder
            style={
              window.innerWidth <= 500 ? { width: "220px" } : { width: "800px" }
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
                  ? { width: "100px", height: "45px" }
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
    title,
    text,
    img,
    price,
    isdeletable,
    postid,
    date,
    contlink,
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
                width: "95%",
                maxHeight: "600px",
                minHeight: "100px",
                margin: "15px",
              }
            : {
                display: "flex",
                justifyContent: "space-around",
                alignItems: "flex-start",
                flexWrap: "wrap-reverse",
                width: "90%",
                maxHeight: "550px",
                minHeight: "200px",
                margin: "15px",
                padding: "20px"
              }
        }
      >
        <div
          style={window.innerWidth <= 500
            ?{ display: "flex", alignItems: "flex-start" } : { display: "flex", alignItems: "flex-start", height: "400px" }}
        >
          <img
            src={img}
            height={140}
            width={140}
            alt="cardImg"
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
              ? { width: "80%", display: "flex", flexDirection: "column", justifyContent: "center" }
              : {
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  width: "70%",
                }
          }
        >
          <Card.Title style={
                window.innerWidth <= 500
                  ? { fontSize: "15px", width: "100%", textAlign: "start" }
                  : {
                      fontSize: "25px",
                      fontWeight: "600",
                      width: "90%",
                      textAlign: "start",
                      height: "100%"
                    }}>
              {title}
          </Card.Title>
          <Card.Subtitle
            style={
              window.innerWidth <= 500
                ? {
                    width: "100%",
                    fontWeight: "600",
                    fontSize: "18px",
                    color: "green",
                    textAlign: "start"
                  }
                : { fontWeight: "700", fontSize: "22px", color: "green" }
            }
            className="mb-2"
          >
            {price}
            {" ₽"}
          </Card.Subtitle>
          <Card.Text style={
                window.innerWidth <= 500
                  ? { fontSize: "10px", width: "100%", textAlign: "start" }
                  : {
                      width: "90%",
                      fontSize: "14px",
                      color: "rgb(70, 70, 70)",
                      textAlign: "start",
                    }
              }>
              {text}
          </Card.Text>
          {!isdeletable ? (
            <ButtInfo contlink={contlink} />
          ) : (
            <Button
              type="submit"
              onClick={() => deleteWork(postid)}
              variant="outline-danger"
            >
              Удалить
            </Button>
          )}
          <Card.Text>
            <p
              style={{
                width: "700px",
                fontSize: "14px",
                color: "rgb(110, 110, 110)",
                textAlign: "start",
                marginTop: "40px",
              }}
            >
              {realDate(date)}
            </p>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  };
  return (
    <div class="cards-list">
      {isLogged ? (
        <Button onClick={() => navigate("/new-work")} variant="success">
          Разместить заказ
        </Button>
      ) : (
        <Link to="/login" style={{ color: "blue" }}>
          Авторизуйтесь, чтобы добавлять записи..
        </Link>
      )}
      {isLoading !== "loaded"
        ? [Array(5)].map(() => {
            return <CardSkeleton />;
          })
        : data.map((items) => {
            return (
              <CardComp
                postid={items._id}
                title={items.title}
                text={items.text}
                img={
                  items.picture && items.picture.includes("http")
                    ? items.picture
                    : noPhoto
                }
                price={items.price}
                isdeletable={isDeletable?._id === items.userId}
                date={items.createdAt}
                contlink={items.contlink}
              />
            );
          })}
          {isLoading === "loaded" && data.length === 0 && <div style={{width: "100%", margin: "30px", textAlign: "start"}}><h6>Здесь пока нет заказов.</h6></div>}
    </div>
  );
};

export default Orders;
