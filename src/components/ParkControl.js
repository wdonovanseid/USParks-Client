import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ParkDetail from './ParkDetail';
import ParkList from './ParkList';
import * as a from './../actions/index';

class ParkControl extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     selectedPark: null,
  //     editing: false
  //   };
  // }

  handleClick= () => {
    const { dispatch } = this.props
    if (this.props.selectedPark != null) {
      const action = a.unselectPark
      const action2 = a.hideEditForm
      dispatch(action);
      dispatch(action2);
    } else {
      const action = a.toggleForm
      dispatch(action);      
    }
  }
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(makeApiCall());
  }

  handleEditClick = () => {
  }

  handleDeleteParkClick = (id) => {
  }

  handleChangingSelectedPark = (id) => {
    const { dispatch } = this.props;
    const park = this.props.parkList.find(x => x.parkId === id);
    console.log("park", park);
    const action = a.selectedPark(park);
    dispatch(action);
  }

  render() {
    const { error, isLoading } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      let currentlyVisibleState = null;
      // let buttonText = null;
      if (this.props.selectedPark != null) {
        currentlyVisibleState = 
        <ParkDetail 
          park = {this.props.selectedPark}
          onClickingEdit = {this.handleEditClick}
          onClickingDelete = {this.handleDeleteParkClick}
          // buttonText= "Return to Park List"
        />
      } else {
        currentlyVisibleState =
        <ParkList
          parkList = {this.props.parkList}
          onParkSelection = {this.handleChangingSelectedPark}
        />
      }
      return (
        <React.Fragment>
          {currentlyVisibleState}
        </React.Fragment>
      );
    }
  }
}

ParkControl.propTypes = {
  parkList: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  formVisibleOnPage: PropTypes.bool,
  selectedPark: PropTypes.object,
  editFormVisible: PropTypes.bool,
  // masterParkList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    parkList: state.parkList,
    isLoading: state.isLoading,
    error: state.error,
    formVisibleOnPage: state.formVisibleOnPage,
    selectedPark: state.selectedPark,
    editFormVisible: state.editFormVisible,
    // masterParkList: state.masterParkList
  }
}

ParkControl = connect(mapStateToProps)(ParkControl);
export default ParkControl;