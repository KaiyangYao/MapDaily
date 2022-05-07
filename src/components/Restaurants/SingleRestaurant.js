import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Restaurants/Restaurant.scss";
import { useDispatch } from "react-redux";
import { changeHilightOnMap } from "../../utils/restaurantSlice";

function SingleRestaurant(props) {
  const dispatch = useDispatch();

  var rest = props.rest;

  const handleOnClick = () => {
    window.open(rest.website);
  };

  const handleCardOnClick = () => {
    dispatch(changeHilightOnMap(props.rest.id - 1));
  };

  return (
    <div className="rest_card" onClick={handleCardOnClick}>
      <div className="rest_content">
        <h2 className="rest_title">{rest.name}</h2>
        <p className="rest_info">{rest.info} </p>
        <div className="rest_btn_group">
          <button onClick={handleOnClick} className="rest_btn">
            GO TO WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleRestaurant;
