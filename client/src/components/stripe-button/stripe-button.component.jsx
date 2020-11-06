import axios from 'axios';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51HgmdgJP5EvhAA9aaMXzUYhGuiYXwqCWRot8DxAwSbuqbd143YuWCg9qLoqvd4eKO4s0emp2m66orm8Co5QcP8Tu00DXwrBJSD';

  const onToken = (token) => {
    axios({
      url: 'payment',
      method: 'post',
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert('payment succcessful');
      })
      .catch((error) => {
        console.log('error: ', error);
        // console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided credit cart.'
        );
      });
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
