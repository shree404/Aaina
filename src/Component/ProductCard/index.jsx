import React from 'react'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function ProductCard({product,md,lg}) {
  return (
    <Col  md={md} lg={lg}>  
    <div
     
      className="product-details-container-single-product"
    >
      <article>
        <Link
          to="/product-lehenga"
          className="product-details-container-single-product"
        >
          <img
            src={product.Img}
            alt="Image of Maroon Lehenga"
          />
          <p className="product-details-container-single-product__name">
            {product.Name}{" "}
          </p>
          <p className="product-details-container-single-product__price">
            {" "}
            {product.Price}{" "}
          </p>
        </Link>
      </article>  
    </div>
  </Col>
  )
}

export default ProductCard