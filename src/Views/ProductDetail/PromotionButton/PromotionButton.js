import './promotion-button.css'

function PromotionButton({title, clickMethod}) {
    return (
        <button type="button" className="promotion-button" onClick={() => clickMethod ? clickMethod() : console.log("click not defined")}>
            {title ? title : 'Promoción'}
        </button>
    )
}

export {PromotionButton}