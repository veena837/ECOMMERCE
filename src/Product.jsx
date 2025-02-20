import React, { useeffect,useState } from "react"

const Products = () => {
    const [products,setProducts] = useState([]);

    useEffect(()=> {
        const fetchData = async () => {
            const response = await fetch("https://fakestoreapi.com/products")
        const data = await response.json();
        setProducts([...data]);
    };
    fetchdata();
},[]);
return (
    <div>
        <h1>Products Page</h1>
        {product.map((product) => (
        <p key={product.id}>{product.tittle}</p>
        ))}
</div>
);
};



