import React from "react";

function Logo(props) {
  return (
    <div className='logo-container'>
      <img src={require(`../images/${props.image}`)} alt={props.alt} className='logo' />
      {props.content}
    </div>
  );
}

export default Logo;