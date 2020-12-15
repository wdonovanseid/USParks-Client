import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function EditParkForm(props) {

  function handleEditParkFormSubmission(event){
    event.preventDefault();
    props.onEditPark({
      name: event.target.name.value,
      parkType: event.target.parkType.value,
      city: event.target.city.value,
      state: event.target.state.value,
      description: event.target.description.value
    });
  }
  return (
    <React.Fragment>
      <h1>Edit Park</h1>
      <ReusableForm
      formSubmissionHandler={handleEditParkFormSubmission}
      buttonText="Edit Park!"
      />
    </React.Fragment>
  );
}

EditParkForm.propTypes = {
  park: PropTypes.object,
  onEditPark: PropTypes.func
};

export default EditParkForm;