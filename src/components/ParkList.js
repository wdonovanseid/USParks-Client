import React from 'react';
import PropTypes from 'prop-types';

function ParkList(props){
  const { parkList, onParkSelection } = props;
  console.log("parklist" , parkList);
  return (
    <React.Fragment>
      <h1>Parks</h1>
      <ul>
        {parkList.parkList.map((park, index) =>
          <li key={index}>
            <div className="selector" onClick={() => onParkSelection(park.parkId)}>
              <h3>{park.name}</h3>
            </div>
          </li>
        )}
      </ul>
    </React.Fragment>
  )
}

ParkList.propTypes = {
  parkList: PropTypes.array,
  onParkSelection: PropTypes.func
};

export default ParkList;