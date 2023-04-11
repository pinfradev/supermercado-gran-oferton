import './supermarketTitle.css'
function SupermarketTitle({titleComponent1, titleComponent2}) {
    return (
        <div className="supermarket-title">
            <p className="title-component-1">{titleComponent1}</p>
            <p className="title-component-2">{titleComponent2}</p>
        </div>
    )
}

export {SupermarketTitle}