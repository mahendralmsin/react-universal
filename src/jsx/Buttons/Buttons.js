import React from 'react';
// import './Buttons.scss'; 
/**
 *Name: Buttons
 *Desc: Render button
 * @param {*} text
 * @param {*} icon
 * @param {*} onClick
 * @param {*} primary
 * @param {*} secondary
 * @param {*} tertiary  
 * @param {*} buttonIcon
 * @param {*} buttonGray
 */
const Buttons = (props) => {
    const { size, variant, color, className, text } = props
    const name = ' btn ' + size + ' ' + variant   + ' ' + color + ' ' + className
    return (
      <>
        <button
          className={name}
          type={props.type}
          disabled={props.disabled}
          onClick={props.onClick}
        >
          {props.iconSrc ? <img src={props.iconSrc} alt="img" /> : ""}
          {text}
          {props.iconSrc ? <img src={props.iconSrc} alt="img" /> : ""}
        </button>
      </>
    );
}

export default Buttons;