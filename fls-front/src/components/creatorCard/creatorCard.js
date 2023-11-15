import "./creatorCard.css";

const Creator = ({photo, name, age, bio, rank}) => {
  return <div className="creator-card">
    <img className="c-img" src={photo} alt="creator"/>
  <div className="creator-block">
    <h5 className="c-rank">{rank}</h5>
    <h3 className="c-header">{name}</h3>
    <h5 className="c-header" id="year">{age ? age + " лет" : ""} </h5>
    <p className="c-text">{bio}</p>
  </div>
</div>
};

export default Creator;
