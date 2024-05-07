import bs1 from '../../Assets/LandingPage/best-product2.png';
import bs2 from '../../Assets/LandingPage/best-product1.png';
import bs3 from '../../Assets/LandingPage/best-seller2.png';
import bs4 from '../../Assets/LandingPage/best-seller3.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BestSeller(){
    let bestSellerArray = [
        {
            bestsellerImage: bs1,
            bestsellerName:"Lehenga Blouse Set",
            bestsellerPrice:"Rs.6000"
        },
        {
            bestsellerImage: bs2,
            bestsellerName:"Lehenga Blouse Set",
            bestsellerPrice:"Rs.6000"
        },
        {
            bestsellerImage: bs4,
            bestsellerName:"Lehenga Blouse Set",
            bestsellerPrice:"Rs.6000"
        },
        {
            bestsellerImage: bs3,
            bestsellerName:"Lehenga Blouse Set",
            bestsellerPrice:"Rs.6000"
        }
    ]
    return(
        <>
        <div className='NewProduct'>
            <Container>
                <div>
                    <Row className='justify-content-md-sm-xs-center'>
                        <Col md={12} sm={12} xs={12}>
                        <h1>Best Seller</h1>
                        </Col>
                    </Row>
                </div>
                <div className='NewProduct-md'>
                    <Row className='justify-content-md-sm-xs-center'>
                    {bestSellerArray.map((product,index) => (
                        <Col md={3} sm={6} xs={12}>
                       <div key={index} className="product-details-container-single-product">
                       <article>
                       <img src={product.bestsellerImage} alt="Image of Maroon Lehenga" />
                       <p id="product-details-container-single-product__name">{product.bestsellerName} </p>
                       <p id="product-details-container-single-product__price"> {product.bestsellerPrice} </p>
                   </article>
                       </div>  
                       </Col>
                    ))}
                    </Row>
                    </div>
                    <div className='NewProduct-S-md'>
                        <Row>
                        {bestSellerArray.map((product,index) => (
                        <Col >
                       <div key={index} className="product-details-container-single-product">
                       <article>
                       <img src={product.bestsellerImage} alt="Image of Maroon Lehenga" />
                       <p id="product-details-container-single-product__name">{product.bestsellerName} </p>
                       <p id="product-details-container-single-product__price"> {product.bestsellerPrice} </p>
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

export default BestSeller;