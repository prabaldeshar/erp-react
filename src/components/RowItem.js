import image from '/home/prabal/Documents/erp-react/erp/src/sofawhite.jpg'
const divStyle = {
    width: '18rem'
}

function RowItem(){
    return(
        <div class="col-sm">
        <div className="card m-3" style={divStyle}>
        <img className="card-img-top" src={image} alt="Card image cap"/>
        <div classNmae="card-body">
            <p className="card-text">Product name</p>
        </div>
        </div>    
        </div>        
    )
}

export default RowItem