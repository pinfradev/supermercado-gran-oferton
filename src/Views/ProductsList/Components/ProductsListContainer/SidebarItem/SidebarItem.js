import downArrow from '../../../../../assets/down-arrow.png'
import React from 'react'
import './sidebar-item.css'
function SidebarItem({itemName, renderSubMenu}) {
    const [isItemVisible, setIsItemVisible] = React.useState(false)
    return (
    <>
        <button className='dropdown-button' onClick={() => setIsItemVisible(!isItemVisible)}>
            <p className='dropdown-button_name'>{itemName}</p>
            <img className='dropdown-button_icon' src={downArrow}/>
        </button>
        {isItemVisible && renderSubMenu()}
    </>
    )
}

export {SidebarItem}