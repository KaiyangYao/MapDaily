import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/Restaurants/Restaurant.scss";

function SingleRestaurant(props) {
  var rest = props.rest;

  const handleOnClick = () => {
    window.open(rest.website);
  };

  return (
    <div className="rest_card">
      <div className="rest_content">
        <h2 className="rest_title">{rest.name}</h2>
        <p className="rest_info">{rest.info}</p>
        <div className="rest_btn_group">
          <button onClick={handleOnClick} className="rest_btn">
            Show On Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleRestaurant;
