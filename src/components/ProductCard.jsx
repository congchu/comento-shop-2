const ProductCard = ({name, description, thumbnail})=>{
    return (<div>
    <img>
    width ="150"
    src={thumbnail}
    alt={name}
    
    </img>
    <div>{name}</div>
    <div>
       {description}
    </div>
    </div>)
}

export default ProductCard;