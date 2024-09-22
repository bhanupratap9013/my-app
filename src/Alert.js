import React from 'react';

export default function Alert(props) {
  return (
    props.alert && (
      <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{props.alert.message}</strong>
        {/* Call a custom function to reset the alert state on close */}
        <button type="button" className="close" onClick={props.dismissAlert} aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
    )
  );
}
