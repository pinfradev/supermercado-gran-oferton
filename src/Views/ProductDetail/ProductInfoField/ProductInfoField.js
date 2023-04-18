import './product-info-field.css'
function ProductInfoField({title, value}) {
    return (
        <div className="product-info">
            <p className="product-info_title">{title}</p>
            <p className={`product-info-common_value ${title.includes('Id') ? 'product-info_value' : ''}`}>{value}</p>
        </div>
    )
}

export {ProductInfoField}