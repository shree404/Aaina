import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function InformationLehenga(){
    return(
        <>
        <div className='LehengaInformation'>
        <Container>
      <Row>
        <Col>
        <dl><dt className='LehengaInformation__h1'>Lehenga Details</dt>
            <dt><span className='LehengaInformation__name1'>Fabric  </span> <span className='LehengaInformation__data1'>  Butterfly Mono Net</span></dt>
            <dt><span className='LehengaInformation__name'>Color  </span> <span className='LehengaInformation__data'>  Purple</span></dt>
            <dt><span className='LehengaInformation__name'>Work   </span> <span className='LehengaInformation__data'>  Thread Work, Sequence Work</span></dt>
            <dt><span className='LehengaInformation__name'>Inner  </span> <span className='LehengaInformation__data'>  Satin Silk</span></dt>
            <dt><span className='LehengaInformation__name'>Type  </span> <span className='LehengaInformation__data'>  Semi Stitched</span></dt>
            <dt><span className='LehengaInformation__name2'>Length   </span> <span className='LehengaInformation__data'>  Up to 44 Inch</span></dt>
            <dt><span className='LehengaInformation__name3'>Size   </span><span className='LehengaInformation__data'>  Up to 44 Inch</span></dt>
            <dt><span className='LehengaInformation__name4'>Flairs  </span> <span className='LehengaInformation__data'>  Up to 3 meters</span></dt>
            </dl>
            <dl>
        <dt className='LehengaInformation__h2'>Blouse Details</dt>
        <dt><span className='LehengaInformation__name'>Fabric  </span> <span className='LehengaInformation__data'> Butterfly Mono Net, Satin Silk</span></dt>
        <dt><span className='LehengaInformation__name'>Color  </span> <span className='LehengaInformation__data'>  Purple</span></dt>
        </dl>
        <dl>
        <dt className='LehengaInformation__h2'>Dupatta Details</dt>
        <dt><span className='LehengaInformation__name4'>Dupatta  </span> <span className='LehengaInformation__data'> Nylon Mono Net</span></dt>
        <dt><span className='LehengaInformation__name'>Color  </span> <span className='LehengaInformation__data'>  PurpleLengthUp to 2.25 meters</span></dt>
        </dl>
        <dl>
            <dt className='LehengaInformation__h3'>Set Contains</dt>
            <dt><span className='LehengaInformation__name'>Lehenga With Blouse Piece in the Box   </span> <span className='LehengaInformation__data'>  Lehenga Up to 44“, Blouse Piece: 0.80 Meter, Dupatta: 2.25 Meter</span></dt>
        </dl>
        </Col>
      </Row>
    </Container>
    </div>
        </>
    )
}

export default InformationLehenga;