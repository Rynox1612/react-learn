import "./product.css"
function Product({title,price,features}){
const list = features.map((feature, index) => (
  <li key={index}>{feature}</li>
));

    return(
        <div className="Product">
            <h5>
                {title}.
            </h5>
            <p>{price+0.18*price}</p>
            <ul>{list}</ul>
        </div>
    )
}

export default Product;