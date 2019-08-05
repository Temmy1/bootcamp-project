import React from 'react';
import { connect } from 'react-redux';
import { userName } from '../actions/userName'


const UserName = ({ userName }) => {
  return (
    <div>
      <h3>User name</h3>
      <input type='text' onChange={userName} />
    </div>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    userName: event => dispatch(userName(event.target.value))
  }
}

export default connect(null, mapDispatchToProps)(UserName);