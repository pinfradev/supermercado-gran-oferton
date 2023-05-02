import './no-arrow-field.css'

function NoArrowField({
    title,
    value,
    onChange,
    readOnly = true
}) {
    return (
        <div className="product-info-editable">
            <p className="product-info-editable_title">{title}</p>
            <input readOnly={readOnly} value={value} onChange={(event) => onChange(event)} className={`product-info-editable_value`}/>
        </div>
    )
}

export {NoArrowField}