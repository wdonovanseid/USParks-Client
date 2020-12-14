import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { makeApiCall } from './../actions';

class Parks extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   error: null,
    //   isLoaded: false,
    //   parks: []
    // };
  }
  
  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(makeApiCall());
  }

  render() {
    const { error, isLoading, parks } = this.props;
    if (error) {
      return <React.Fragment>Error: {error.message}</React.Fragment>;
    } else if (isLoading) {
      return <React.Fragment>Loading...</React.Fragment>;
    } else {
      return (
        <React.Fragment>
          <h1>Parks</h1>
          <ul>
            {console.log(parks)}
            {parks.map((park, index) =>
              <li key={index}>
                <h3>{park.name}</h3>
              </li>
            )}
          </ul>
        </React.Fragment>
      );
    }
  }
}

Parks.propTypes = {
  parks: PropTypes.array,
  isLoading: PropTypes.bool,
  error: PropTypes.string
};

const mapStateToProps = state => {
  return {
    parks: state.parks,
    isLoading: state.isLoading,
    error: state.error
  }
}

export default connect(mapStateToProps)(Parks);