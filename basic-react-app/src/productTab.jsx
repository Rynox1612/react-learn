import Product from "./product";

function ProductTab(){
    let features=[<li>16GB RAM</li>,<li>128GB Storage</li>,<li>12MP Camera</li>,<li>hi-tech</li>];
    let features2=[<li>16GB RAM</li>,<li>128GB Storage</li>,<li>12MP Camera</li>,<li>hi-tech</li>];
    let features3=[<li>4 RAM</li>,<li>128GB Storage</li>,<li>12MP Camera</li>,<li>hi-tech</li>];
    return(
    <>
    {/* Numbers are passed like this */}
    <Product title="Phone" price={30000} features={features}/>
    <Product title="laptop" price={50000} features={features2}/>
    <Product title="watch" price={10000} features={features3}/>
    </>
    );
}

export default ProductTab;