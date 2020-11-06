import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgmdgJP5EvhAA9aaMXzUYhGuiYXwqCWRot8DxAwSbuqbd143YuWCg9qLoqvd4eKO4s0emp2m66orm8Co5QcP8Tu00DXwrBJSD';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Success');
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="E-Commerce Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
