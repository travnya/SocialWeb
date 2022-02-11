import { MenuButton, NavLink, NavMenu, SidebarWrapper } from "./Sidebar.styles"
import Link from "next/link"
import navigation from "../../navigation"

const Sidebar = ():JSX.Element => {
    return (
        <SidebarWrapper>
            <NavMenu>
                {navigation.map(({ id, title, path}) => (
                    <Link key={id} href={path}><NavLink ><MenuButton className='btn btn-outline-light btn-1'>{title}</MenuButton></NavLink></Link>
                ))}
            </NavMenu>
        </SidebarWrapper>
    )
}

export default Sidebar