import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img2 from '../../Assets/LandingPage/bdimg2.png';
import img3 from '../../Assets/LandingPage/bdimg3.png';
import img4 from '../../Assets/LandingPage/bdimg4.png';


function WomenFilterRed(){
    let imageArray=[
        {
        Image: img3,
        Name: 'Bride Saree',
        price: 'Rs.28000'
        },
        {
        Image: img4,
        Name: 'Groom wedding set',
        price: 'Rs.28000'
        },
        {
        Image: img2,
        Name: 'Bride Saree',
        price: 'Rs.28000'
        }
    ]
    return(
        <>
        <Container>
          <div className="WomenFilterRed">
            <Row>
                {
                    imageArray.map((product,index) => (
                        <Col md={3

                        } xs={12} sm={12}>
                            <div key={index}>
                            <article className="WomenFilterRed-container">
                      <img
                        src={product.Image}
                        alt="Image of Maroon Lehenga"
                      />
                      <p className="WomenFilterRed__name">
                        {product.Name}{" "}
                      </p>
                      <p className="WomenFilterRed__price">
                        {" "}
                        {product.price}{" "}
                      </p>
                    </article>
                            </div>
                        </Col>
                    )
                )
                }
            </Row>
          </div>
        </Container>
        </>
    )
}

export default WomenFilterRed;