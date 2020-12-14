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
        <input
          type='text'
          name='parkType'
          placeholder='Park Type' />
        <input
          type='text'
          name='city'
          placeholder='City' />
        <input
          type='text'
          name='state'
          placeholder='State' />
        <input
          type='text'
          name='parkType'
          placeholder='Park Type' />
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