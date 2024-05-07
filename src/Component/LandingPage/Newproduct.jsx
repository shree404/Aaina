import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import product1 from '../../Assets/LandingPage/newproduct1.png';
import product2 from '../../Assets/LandingPage/newproduct2.png';
import product3 from '../../Assets/LandingPage/newproduct3.png';
import product4 from '../../Assets/LandingPage/newproduct4.png';

function NewProduct(){
    let newproductarray = [
        {
            productimgae:product1,
            productName:"Lehenga Blouse Set ",
            productPrice:"Rs.6000"
        },
        {
            productimgae:product2,
            productName:"Lehenga Blouse Set ",
            productPrice:"Rs.6000"
        },
        {
            productimgae:product3,
            productName:"Kurtha ",
            productPrice:"Rs.6000"
        },
        {
            productimgae:product4,
            productName:"Lehenga Blouse Set ",
            productPrice:"Rs.6000"
        }
    ]
    return(
        <>
        <div className='NewProduct'>
            <Container>
                <div>
                    <Row className='justify-content-md-sm-xs-center'>
                        <Col md={12} sm={12} xs={12}>
                        <h1>New Products</h1>
                        </Col>
                    </Row>
                </div>
                <div className='NewProduct-md'>
                    <Row className='justify-content-md-sm-xs-center'>
                    {newproductarray.map((product,index) => (
                        <Col md={3} sm={6} xs={12}>
                       <div key={index} className="product-details-container-single-product">
                       <article>
                       <img src={product.productimgae} alt="Image of Maroon Lehenga" />
                       <p className="product-details-container-single-product__name">{product.productName} </p>
                       <p className="product-details-container-single-product__price"> {product.productPrice} </p>
                   </article>
                       </div>  
                       </Col>
                    ))}
                    </Row>
                    </div>
                    <div className='NewProduct-S-md'>
                        <Row>
                        {newproductarray.map((product,index) => (
                        <Col >
                       <div key={index} className="product-details-container-single-product">
                       <article>
                       <img src={product.productimgae} alt="Image of Maroon Lehenga" />
                       <p className="product-details-container-single-product__name">{product.productName} </p>
                       <p className="product-details-container-single-product__price"> {product.productPrice} </p>
                   </article>
                       </div>  
                       </Col>
                    ))}
                        </Row>
                    </div>
            </Container>
        </div>
        </>
    )
}

export default NewProduct;