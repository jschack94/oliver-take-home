import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { axios } from '../../utils/axios';
import './Products.scss';

function Products() {
  const [products, setProducts] = useState([])
  const history = useHistory();

  const findAllProducts = async () => {
    const response = await axios.get({ url: '/products' })
    const products = response?.data || []
    console.log({ products });
    setProducts(products)
  }

  useEffect(() => {
    findAllProducts();

    return () => {
    };
  }, []);

  return (
    <div className="product_section">
      <h1 className='heading'>Products</h1>
      <div className='products'>
        {products.map(product => (
          <div className="product">
            <h2 className="name">{product.name}</h2>
            <button className="all_reviews" onClick={() => history.push(`/reviews`)} >View Reviews</button>
            <button className="new_review" onClick={() => history.push(`/product-review/${product.id}`)} >Leave a Review</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products