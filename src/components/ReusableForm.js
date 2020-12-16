import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          defaultValue={props.park ? props.park.name : ""}
          placeholder='Park Name'
          required />
        <br />
        <input
          type='text'
          name='parkType'
          defaultValue={props.park ? props.park.parkType : ""}
          placeholder='Park Type' />
        <br />
        <input
          type='text'
          name='city'
          defaultValue={props.park ? props.park.city : ""}
          placeholder='City' />
        <br />
        <input
          type='text'
          name='state'
          defaultValue={props.park ? props.park.state : ""}
          placeholder='State' />
        <br />
        <textarea
          type='text'
          name='description'
          defaultValue={props.park ? props.park.description : ""}
          placeholder='Enter Description' />
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
  park: PropTypes.object
};

export default ReusableForm;