function NavBarListItem({name, onChange, activeState}){
    return(
      
        <li className={"nav-item" + (activeState ? " active" : "")}>
        <a className="nav-link" href="#" onClick={ () => onChange(name) }>
          {name} 
          <span className="sr-only">(current)</span>
          </a>
      </li>
    )
}

export default NavBarListItem