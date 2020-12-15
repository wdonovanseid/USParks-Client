import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeApiCall } from '../actions';
import ParkDetail from './ParkDetail';
import ParkList from './ParkList';
import * as a from './../actions/index';
import NewParkForm from './NewParkForm';
import EditParkForm from './EditParkForm';

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
    } else if (this.props.editFormVisible) {
      const { dispatch } = this.props
      const action = a.showEditForm
      dispatch(action);
      const action2 = a.unselectPark
      dispatch(action2);
    } else { 
      const action = a.toggleForm
      dispatch(action);      
    }
  }
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(makeApiCall("GET"));
  }

  handleEditClick = () => {
    const { dispatch } = this.props;
    const action = a.showEditForm
    dispatch(action);
  }

  handleDeleteParkClick = (id) => {
  }

  handleChangingSelectedPark = (id) => {
    const { dispatch } = this.props;
    const park = this.props.parkApiCall.parkList.find(x => x.parkId === id);
    const action = a.selectedPark(park);
    dispatch(action);
  }

  handleAddingNewPark = (newPark) => {
    const { dispatch } = this.props;
    const action = a.makeApiCall("POST", newPark);
    const action2 = a.toggleForm;
    dispatch(action);
    dispatch(action2);

  }

  render() {
    const { error, isLoading } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      let currentlyVisibleState = null;
      let buttonText = null;
      let title = null;
      if (this.props.editFormVisible) {
        currentlyVisibleState =
        <EditParkForm 
          park={this.props.selectedPark}
          onEditPark={this.handleEditingPark}
        />
        title=`Edit ${this.props.selectedPark.name}`
        buttonText = "Return to Park List"
      } else if (this.props.selectedPark != null) {
        currentlyVisibleState = 
        <ParkDetail 
          park = {this.props.selectedPark}
          onClickingEdit = {this.handleEditClick}
          onClickingDelete = {this.handleDeleteParkClick}
        />
        title=`${this.props.selectedPark.name}`
        buttonText = "Return to Park List"
      } else if (this.props.formVisibleOnPage) {
        currentlyVisibleState =
        <NewParkForm onNewParkCreation = {this.handleAddingNewPark}/>
        title="Add a new Park"
        buttonText = "Return to Park List"
      } else {
        currentlyVisibleState =
        <ParkList
          parkList = {this.props.parkApiCall.parkList}
          onParkSelection = {this.handleChangingSelectedPark}
        />
        title = "Parks"
        buttonText = "Add a Park"
      }
      return (
        <React.Fragment>
          <h1>{title}</h1>
          <div className="box">
            <div className="inner-box">
              {currentlyVisibleState}
            </div>
          </div>          
          <button className="btn-info" onClick={this.handleClick}>{buttonText}</button>
        </React.Fragment>
      );
    }
  }
}

ParkControl.propTypes = {
  parkApiCall: PropTypes.object,
  isLoading: PropTypes.bool,
  error: PropTypes.string,
  formVisibleOnPage: PropTypes.bool,
  selectedPark: PropTypes.object,
  editFormVisible: PropTypes.bool,
  // masterParkList: PropTypes.object
};

const mapStateToProps = state => {
  return {
    parkApiCall: state.parkApiCall,
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