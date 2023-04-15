import filter from '../../../../../assets/filter.png'
import './sidebarHeader.css'
function SidebarHeader() {
    return (
        <header className="sidebar-header">
            <img src={filter} className='sidebar-header_icon'/>
            <p className='sidebar-header_title'>Filtros</p>
        </header>
    )
}

export {SidebarHeader}