import 'bootstrap/dist/css/bootstrap.min.css'

function Button(props) {
    return(
    <button className="btn" >
        <span className="badge badge-dark">{props.name}</span>
    </button>
    )
}

export default Button