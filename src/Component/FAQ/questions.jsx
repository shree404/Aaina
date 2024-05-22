import Accordion from "react-bootstrap/Accordion";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function FAQQuestions() {
  return (
    <>
      <Container className="mb-5">
        <h2 className="FAQs__head">FAQS</h2>
        <h2 className="FAQs__subhead">Order Status & Tracking</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              How will I know if my WhatsApp order has been placed successfully?
            </Accordion.Header>
            <Accordion.Body>
              After sending the auto-generated message on Whatsapp, you will
              receive a confirmation message acknowledging your order.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              How do I check the status of my WhatsApp order?
            </Accordion.Header>
            <Accordion.Body>
              Aina Boutique will provides updates on your order status through
              Whatsapp. You can inquire about the status by messaging them.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              Can I modify the details of my WhatsApp order after sending the
              auto-generated message?
            </Accordion.Header>
            <Accordion.Body>
              Once the order is placed on Whatsapp , any modification should be
              communicated directly with Aina Boutique through the same chat
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <h2 className="FAQs__subhead">Shipping & Delivery</h2>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              What are the shipping charges for international orders on Aina
              Boutique?
            </Accordion.Header>
            <Accordion.Body>
              Shipping charges for international orders will vary based on
              factors such as location , order size and weight . Aina Boutique
              will provide details on shipping costs during the ordering
              process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              Do the shipping charges vary based on the number of items
              purchased or the order's weight for international orders?
            </Accordion.Header>
            <Accordion.Body>
              Shipping charges for international orders will vary based on
              factors such as location , order size and weight . Aina Boutique
              will provide details on shipping costs during the ordering
              process.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              How long will it take for my international order to reach me?
            </Accordion.Header>
            <Accordion.Body>
              The estimated delivery times for international orders will be
              communicated by Aina Boutique during the ordering process. Factors
              such as Custom clearance and location will impact delivery times.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              What payment options are available for international orders on
              Aina Boutique?
            </Accordion.Header>
            <Accordion.Body>
              Aina Boutique accepts various payment methods for global orders ,
              including credit/debit cards and other secure paymment options .
              Details will be provided during the checkout process.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </Container>
    </>
  );
}

export default FAQQuestions;
