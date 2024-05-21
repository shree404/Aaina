import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function ReturnPolicy() {
  return (
    <div className="ReturnPolicy">
      <Container>
        <h2 className="ReturnPolicy__head">RETURN POLICY</h2>
        <p className="ReturnPolicy__paragraph">
          Thank you for shopping with us at Aina - your premier destination for
          exquisite lehengas, sarees, kurtis, bridal and groom attire, and
          authentic Nepali dresses. We are dedicated to delivering top-quality
          products and exceptional customer service. However, if you are not
          completely satisfied with your purchase, we offer a comprehensive
          return policy to ensure your peace of mind. <br /> <br /> 14-Day
          Return Policy: You may return any purchased product within 14 days of
          delivery or pick-up, as per Norwegian law. Please note that after 14
          days, we are unable to offer refunds or exchanges.
          <br /> <br /> Conditions for Returns: To be eligible for a return, the
          product must be unused and in its original condition and packaging.
          Additionally, a receipt or proof of purchase is required.
          <br /> <br />
          Exclusions: Certain products are excluded from our return policy,
          including customized or made-to-order items, perishable goods, and
          intimate or sanitary products. <br /> <br /> Refunds: Upon receiving
          and verifying that your returned product meets our return policy
          conditions, we will issue a refund within 7-10 working days. The
          refund will be processed to the original payment method used for the
          purchase, and shipping costs are non-refundable. <br /> <br />{" "}
          Exchanges: If you wish to exchange a product for a different size or
          color, please contact us to confirm availability. Shipping costs for
          exchanges will be covered by the customer.
          <br /> <br /> Shipping: The customer is responsible for shipping the
          product back to us for returns or exchanges. We recommend using a
          trackable shipping service and purchasing shipping insurance, as we
          cannot guarantee receipt of your returned product. <br /> <br />
          Damaged or Defective Items: In the event that you receive a damaged or
          defective product, please contact us immediately. We will guide you
          through the process of returning the item and receiving a refund or
          exchange. Please note that we reserve the right to refuse returns that
          do not meet our policy conditions. <br /> <br /> Thank you for
          choosing Aina for your shopping needs. Should you have any questions
          or concerns about our return policy, please don't hesitate to contact
          us. We are here to assist you every step of the way.
        </p>
      </Container>
    </div>
  );
}

export default ReturnPolicy;
