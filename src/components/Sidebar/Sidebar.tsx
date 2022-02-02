import { MenuButton, NavLink, NavMenu, SidebarWrapper } from "./Sidebar.styles"

const Sidebar = ():JSX.Element => {
    return (
        <SidebarWrapper>
            <NavMenu>
                <NavLink href='/feed'><MenuButton className='btn btn-outline-light btn-1'>Новости</MenuButton></NavLink>
                <NavLink href='/profile'><MenuButton className='btn btn-outline-light btn-1'>Профиль</MenuButton></NavLink>
                <NavLink href='/friends'><MenuButton className='btn btn-outline-light btn-1'>Друзья</MenuButton></NavLink>
                <NavLink href='/messages'><MenuButton className='btn btn-outline-light btn-1'>Сообщения</MenuButton></NavLink>
                <NavLink href='/music'><MenuButton className='btn btn-outline-light btn-1'>Музыка</MenuButton></NavLink>
                <NavLink href='/videos'><MenuButton className='btn btn-outline-light btn-1'>Видеозаписи</MenuButton></NavLink>
                <NavLink href='/setting'><MenuButton className='btn btn-outline-light btn-1'>Настройки</MenuButton></NavLink>
            </NavMenu>
        </SidebarWrapper>
    )
}

export default Sidebar