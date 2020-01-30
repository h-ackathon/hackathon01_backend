import React from 'react';
import {} from '../../actions';
import { connect } from 'react-redux';

class SelectBox extends React.Component{
  render(){
    return(
      <h1>Select Box</h1>
    );
  }
}

const mapStateToProps = state => {
  return {
  };
}

export default connect(null, {})(SelectBox);