import './userElements.css'
function UserElements({userName, profileImageUrl}) {
    return (
        <div className="user-elements">
            <p>{userName}</p>
            <img className="user-elements__image" src={profileImageUrl}/>
        </div>
    )
}

export {UserElements}