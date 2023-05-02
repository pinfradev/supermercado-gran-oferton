import './FieldWithArrow.css'
import React from 'react'
import downArrow from '../../../assets/down-arrow.png' 
function FieldWithArrow({title, onChange, options, value}) {
    const [showOptions, setShowOptions] = React.useState(false)
    return (
        <>
        <div className='selector-field' onClick={() => setShowOptions(true)}>
            <p>{title}</p>
            <div className='selector-field_chooser'>
                <p>{value} <img className='down-arrow' src={downArrow}/></p>
            </div>
        </div>
        {showOptions && <ul className='selector-field_options'>
                {options.map(option => (
                            <li 
                                key={option} onClick={() => {
                                    console.log('clicked')
                                    setShowOptions(false)
                                    onChange(option)
                                }}
                            >
                                {option}
                            </li>
                            ))
                        }
                </ul>}
        </>
    )
}

export {FieldWithArrow}