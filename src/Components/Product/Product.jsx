import {useState} from 'react'

function Product() {
    const [newProduct, setNewProduct] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [products, setProducts] = useState([]);

    const handleAdd = ()=>{
        if(newProduct.trim() && newPrice.trim() && newDescription.trim()){
            setProducts([...products,{product:newProduct,price:newPrice,description:newDescription}]);
            setNewProduct('');
            setNewPrice('');
            setNewDescription('');
        }
    }

   const totalPrice = products.reduce((acc,cur)=>acc+parseInt(cur.price),0);
    
  return (
    <div>
        Product: <input type="text" value={newProduct} onChange={(e)=>setNewProduct(e.target.value)}/> <br/><br/>
        Price: <input type="text" value={newPrice} onChange={(e)=>setNewPrice(e.target.value)}/> <br/><br/>
        Description: <input type="text" value={newDescription} onChange={(e)=>setNewDescription(e.target.value)}/> <br/><br/>
        <button onClick={handleAdd}>Add</button>

        <ul>
            {products.map((product,index)=>(
                <li key={index}>
                    {product.product} - {product.price} - {product.description}
                </li>
            ))}
        </ul>
        total price: {totalPrice}
    </div>
  )
}

export default Product