import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <form onSubmit={props.formSubmissionHandler}>
        <input
          type='text'
          name='name'
          placeholder='Park Name' />
        <br />
        <input
          type='text'
          name='parkType'
          placeholder='Park Type' />
        <br />
        <input
          type='text'
          name='city'
          placeholder='City' />
        <br />
        <input
          type='text'
          name='state'
          placeholder='State' />
        <br />
        <textarea
          type='text'
          name='description'
          placeholder='Enter Description' />
        <br />
        <button type='submit'>{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default ReusableForm;