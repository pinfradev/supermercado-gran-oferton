import './no-arrow-field.css'

function NoArrowField({
    title,
    value,
    onChange
}) {
    return (
        <div className="product-info-editable">
            <p className="product-info-editable_title">{title}</p>
            <input value={value} onChange={(event) => onChange(event)} className={`product-info-editable_value`}/>
        </div>
    )
}

export {NoArrowField}