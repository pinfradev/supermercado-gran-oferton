import './text-area-info.css'

function TextAreaInfo({
    title,
    text,
    changeText
}) {
    return (
        <div className="text-area-component">
            <p>
                {title}
            </p>
            <textarea value={text} onChange={(event => changeText(event.target.value))} />
        </div>
    )
}

export {TextAreaInfo}