import React from "react";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewParkForm(props) {

  function handleNewParkFormSubmission(event){
    event.preventDefault();
    props.onNewParkCreation({
      name: event.target.name.value,
      parkType: event.target.parkType.value,
      city: event.target.city.value,
      state: event.target.state.value,
      description: event.target.description.value
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
      formSubmissionHandler={handleNewParkFormSubmission}
      buttonText="Add Park!"
      />
    </React.Fragment>
  );
}

NewParkForm.propTypes = {
  onNewParkCreation: PropTypes.func
};

export default NewParkForm;