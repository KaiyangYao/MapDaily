import { useDispatch } from "react-redux";
import { changeBuildings } from "../../utils/buildingsSlice";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Events/SingleEvent.scss";
/**
   @todo: refactor this file!
**/
function SingleEvent(props) {
  var randomColor = require("randomcolor");
  var onCampuscolor = randomColor();
  var offCampuscolor = "#033555";
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
    "hayden courts",
    "nicholson field",
    "softball",
    "markim hall",
  ];

  // We will pull out this function and do the refactor later
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
    if (!props.isOffCampus) {
      dispatch(changeBuildings(index));
    } else return;
  };

  const handleExplore = () => {
    window.open(event.url);
  };

  return (
    <div
      className={props.isOffCampus ? "eventItem__hidden" : "eventItem__shown"}
      onClick={handleOnClick}
    >
      <div className="eventCard">
        {!props.isOffCampus && (
          <div
            className="eventCard__top"
            style={{ backgroundColor: onCampuscolor }}
          />
        )}
        {props.isOffCampus && (
          <div
            className="eventCard__top"
            style={{ backgroundColor: offCampuscolor }}
          >
            NOT ON CAMPUS
          </div>
        )}

        <div className="eventCard__content">
          <h1 className="eventCard__header">{event.summary}</h1>
          <p className="eventCard__text">{event.date}</p>
          <p className="eventCard__text">{event.location}</p>
          <button className="eventCard__btn" onClick={handleExplore}>
            More Info<span>&rarr;</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleEvent;
