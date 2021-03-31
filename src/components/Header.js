import Button from './Button'
import NavBarLists from './NavBarLists'

function Header(props){
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">

        <Button name="ERP System"/>

        <NavBarLists />
  
</nav>
    )
}

export default Header;