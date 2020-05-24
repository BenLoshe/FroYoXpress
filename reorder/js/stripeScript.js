(function() {
      var stripe = Stripe('pk_test_ntg3tLI03RF2G7Glfil54RfR00HejY01PW');
      // var stripe = Stripe('pk_live_VgUmVaGkeFwTwCeYvwIcpepN00JnehrD8G');
    
      var checkoutButton = document.getElementById('checkout-button-sku_FrNlwdTLaT9l2I');
      checkoutButton.addEventListener('click', function () {
        // When the customer clicks on the button, redirect
        // them to Checkout.
        
        var itemsToPurchase = []
        
        for (var i = 1; i < rowCount; i++) {
            if ((document.getElementById("sku" + i) !== null) &&
                (document.getElementById("q" + i) !== null) &&
                (document.getElementById("sku" + i).value !== '') &&
                (document.getElementById("q" + i).value !== '')) {
                itemsToPurchase.push({sku: document.getElementById("sku" + i).value, quantity: parseInt(document.getElementById("q" + i).value)});
            }
        }
          
        stripe.redirectToCheckout({
          items: itemsToPurchase,
    
          // Do not rely on the redirect to the successUrl for fulfilling
          // purchases, customers may not always reach the success_url after
          // a successful payment.
          // Instead use one of the strategies described in
          // https://stripe.com/docs/payments/checkout/fulfillment
          successUrl: window.location.protocol + '//froyoxpress.com/?redirect=success',
          cancelUrl: window.location.protocol + '//froyoxpress.com',
        })
        .then(function (result) {
          if (result.error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer.
            var displayError = document.getElementById('error-message');
            displayError.textContent = result.error.message;
          }
        });
      });
    })();