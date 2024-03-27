import React from 'react';
/**
 * Name: Text
 * Desc: Render Text
 * @param {string} text 
 * @param {string} className
 * @param {string} color
 * @param {string} fontWeight
 * @param {string} fontSize
 * @param {object} style
 */
const Text = (props) => {
    const { size, color, fontWeight, className,  ...rest } = props
    const name = `${size||''} ${color||''} ${fontWeight||''} ${className||''} ${'text'} `;
    return (
        <>
            <span className={name}  {...rest} >
                {props.text}
            </span>
        </>  
    )
}
export default Text;

