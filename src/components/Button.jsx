import React from 'react';
import '../styles/Button.css'

function Button(props) {

  const isOperation = (value) => {
    return isNaN(value) && (value != '.') && (value != '=')
  }

  return (
    <div className={ `button-container ${isOperation(props.children) ? 'operation' : '' }`.trimEnd() }>
      { props.children }
    </div>
  );
}

export default Button;