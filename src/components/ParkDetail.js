import React from "react";
import PropTypes from "prop-types";

function ParkDetail(props) {
  const { park, onClickingDelete } = props;
  return (
    <React.Fragment>
      <h2>{park.name} Details</h2>
      <h3>Park Type: {park.parkType}</h3>
      <h3>State: {park.state}</h3>
      <h3>City: {park.city}</h3>
      <hr />
      <p>{park.description}</p>
      <button type="button" className="btn btn-info" onClick={props.onClickingEdit}>Update Park</button>
      <button type="button" className="btn btn-primary" onClick={() => onClickingDelete(park.ParkId)}>Delete Park</button>
    </React.Fragment>
  );
}

ParkDetail.propTypes = {
  park: PropTypes.object,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default ParkDetail;