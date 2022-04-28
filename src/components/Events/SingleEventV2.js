import { useDispatch } from "react-redux";
import { changeBuildings } from "../../features/buildingsSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Events/SingleEvent.css";
import "../../css/Events/SingleEvent2.scss";

function SingleEventV2(props) {
  var randomColor = require("randomcolor");
  var color = randomColor();
  var event = props.event;
  const dispatch = useDispatch();
  var buildings = [
    "olin rice",
    "humanity",
    "janet wallace fine art center",
    "leonard center",
    "old main",
    "carnegie",
    "library",
    "campus center",
    "weyerhauser hall",
    "mac stadium",
    "weyerhauser chapel",
    "kagin",
  ];
  const findIndex = () => {
    var location = event.location.toLowerCase();
    var index = undefined;
    for (let i = 0; i < buildings.length; i++) {
      if (location.includes("kagin commons".toLowerCase())) {
        if (location.includes("ballroom")) {
          index = 8;
          return index;
        } else {
          index = 11;
          return index;
        }
      }
      if (buildings[i].length > location.length) {
        if (buildings[i].includes(location.toLowerCase())) {
          index = i;
        } else {
          continue;
        }
      } else if (location.includes(buildings[i])) {
        index = i;
      }
    }
    if (location.includes("weyerhaeuser")) {
      if (location.includes("hall")) {
        index = 8;
      }
      if (location.includes("chapel")) {
        index = 10;
      }
    }
    if (
      location.includes("music") ||
      location.includes("art") ||
      location.includes("theater")
    ) {
      index = 2;
    }
    if (location.includes("macalester") && location.includes("complex")) {
      index = 3;
    }
    if (location.includes("John B. Davis".toLowerCase())) {
      index = 7;
    }
    if (location.includes("olin-rice")) {
      index = 0;
    }
    if (location.includes("humanities")) {
      index = 1;
    }
    if (location.includes("macalester stadium")) {
      index = 9;
    }
    return index;
  };
  const index = findIndex();

  const handleOnClick = () => {
    dispatch(changeBuildings(index));
  };

  const handleExplore = () => {
    window.open(event.url);
  };

  return (
    <div className="eventItem" onClick={handleOnClick}>
      <div className="eventCard">
        <div
          className="eventCard__top"
          style={ {backgroundColor: color} }
          // src="https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2250&amp;q=80"
          // alt="Snowy Mountains"
        />
        <div className="eventCard__content">
          <h1 className="eventCard__header">{event.summary}</h1>
          <p className="eventCard__text">{event.date}</p>
          <p className="eventCard__text">{event.location}</p>
          <button className="eventCard__btn" onClick={handleExplore}>
            Explore <span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleEventV2;
