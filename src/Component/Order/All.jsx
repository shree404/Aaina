import OrderDropDown from "./Dropdowm";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import img from '../../Assets/OrderSummary/img1.png'


function AllOrder(){
    const Myorder = [
        {
            orderID: "98a345",
            orderimg:img,
            ordername:"Lehenga",
            orderquantity:"2",
            orderstatus:"delivered",
            OrderDeliveredDate:"24 April 2024",
            orderPlaceddate:"15 April 2024",
            orderprice:"1000",
        },
        {
            orderID: "98a345",
            orderimg:img,
            ordername:"kurta",
            orderquantity:"1",
            orderstatus:"cancelled",
            OrderDeliveredDate:"24 April 2024",
            orderPlaceddate:"15 April 2024",
            orderprice:"2000",
        },
        {
            orderID: "98a345",
            orderimg:img,
            ordername:"kurta",
            orderquantity:"2",
            orderstatus:"delivered",
            OrderDeliveredDate:"24 April 2024",
            orderPlaceddate:"15 April 2024",
            orderprice:"2500",
        }
    ]
    return(
        <div className="OrderList">
        <Container >
            <Row>
                <Col md={4}>
                <OrderDropDown/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {Myorder.map((order,index) => (
                    <Col md={12} xs={12} sm={12}>
                        <div className="IndividualOrder"> <br />
                            <div className="IndividualOrder-head">
                            <p className="IndividualOrder-order"> Order : <span className="IndividualOrder-order__id">{order.orderID}  </span> </p>
                            <p >  Price : <span className="IndividualOrder-order__price">{order.orderprice} </span></p>
                            </div>
                            <p className="IndividualOrder-order__placedate">Placed on : {order.orderPlaceddate}</p>
                            <hr />
                            <div className="IndividualOrder-footer">
                                <div>
                                    <img src={order.orderimg} alt="Image of Ordered Product" />
                                </div>
                                <div>
                                    <p className="IndividualOrder-footer__ordername">{order.ordername}</p>
                                </div>
                                <div>
                                    <p ><span className="IndividualOrder-footer__quantity"> QTY: </span> {order.orderquantity}</p>
                                </div>
                                <div className="IndividualOrder-footer__status">{order.orderstatus}</div>
                                <div>Delivered on {order.OrderDeliveredDate}</div>
                            </div>
                        </div>
                    </Col>
                ))}
            </Row>
        </Container>
        </div>
    )
}

export default AllOrder;