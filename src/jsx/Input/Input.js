import React from 'react';
import Form from 'react-bootstrap/Form'
/**
 * Name: Input
 * Desc: Render Input
 * @param {string} className
 * @param {string} type
 * @param {string} label
 * @param {string} placeholder
 * @param {string} iconSrc
 * @param {object} style
 */
const Input = (props) => {
    return (
        <div className="inputFeild">
            <Form.Group>
                <Form.Label>{props.label}</Form.Label>
                <Form.Control
                    type={props.type}
                    placeholder={props.placeholder}
                    className={props.className}
                    onChange={props.handleOnChange}
                    onBlur={props.handleOnBlur}
                />
                {props.iconSrc ? <img src={props.iconSrc} className={props.className} alt="img" /> : ''}
            </Form.Group>
        </div>
    )
}
export default Input

