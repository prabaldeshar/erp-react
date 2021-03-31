import NavBarListItem from './NavBarListItem'
import { useState } from 'react'

function NavBarLists(){
    const [active, setActive] = useState("home")

    return(  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        
        <NavBarListItem name="Home" onChange= {(name) => setActive(name)} activeState={ active === "home" ? true : false}/>
        <NavBarListItem name="Works" onChange = {(name) => setActive(name)} activeState={active === "works" ? true : false}/>
        <NavBarListItem name="About" onChange= {(name) => setActive(name)} activeState={active === "about" ? true : false }/>
    </ul>
    </div>
    )
}

export default NavBarLists