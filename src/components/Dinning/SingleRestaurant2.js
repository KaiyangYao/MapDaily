import "bootstrap/dist/css/bootstrap.min.css";
import "../../css/SingleRestaurant.scss";

function SingleRestaurant2(props) {
  var rest = props.rest;

  const handleClick = () => {
    window.open(rest.website);
  };

  return (
    <div class="rest_card">
      <div class="rest_content">
        <h2 class="rest_title">{rest.name}</h2>
        <p class="rest_info">{rest.info}</p>
        <div className="rest_btn_group">
          <button onClick={handleClick} class="rest_btn">
            Show On Map
          </button>
        </div>
      </div>
    </div>
  );
}

export default SingleRestaurant2;
