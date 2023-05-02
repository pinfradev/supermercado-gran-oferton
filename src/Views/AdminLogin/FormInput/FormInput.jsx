import { Row, Col, Image } from "react-bootstrap"
import React from "react"
import './form-input.css'
function FormInput({
    title,
    iconUrl,
    isPassword,
    value,
    setValue
}) {
    

    const onChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="form-input">
            <div className="form-input_left">
                <div >
                    <p>{title}</p>  
                </div>
                <input
                type={isPassword ? 'password' : 'text'}
                    className={
                        `form-input_input`}
                    value={value}
                    onChange={onChange}
                />
            </div>
                <img src={iconUrl} className="form-input_icon"/>
        </div>
    )
}

export {FormInput}