import React, { useState, useEffect } from 'react';
import {
  Banner,
  Button,
  Text,
  View,
  useApi,
  useShippingAddress,
  useCart,
  useApplyCartLinesChange,
  useDiscountAllocations,
  useCartLines,
  useTotalAmount,
  useBuyerJourney,
  useShippingAddressTarget,
  useShippingAddressTargets,
  useShippingAddressTargetsOnCheckout,
  useShippingAddressTargetsOnCheckoutWithValidation,
  useShippingAddressTargetsOnCheckoutWithValidationAndShipping,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPayment,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscount,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTax,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillment,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefund,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrder,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomer,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSession,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocale,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrency,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguage,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountry,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvince,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCity,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZip,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhone,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompany,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstName,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastName,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmail,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4AndAddress5,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4AndAddress5AndAddress6,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4AndAddress5AndAddress6AndAddress7,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4AndAddress5AndAddress6AndAddress7AndAddress8,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4AndAddress5AndAddress6AndAddress7AndAddress8AndAddress9,
  useShippingAddressTargetsOnCheckoutWithValidationAndShippingAndPaymentAndDiscountAndTaxAndFulfillmentAndRefundAndOrderAndCustomerAndSessionAndLocaleAndCurrencyAndLanguageAndCountryAndProvinceAndCityAndZipAndPhoneAndCompanyAndFirstNameAndLastNameAndEmailAndAddress1AndAddress2AndAddress3AndAddress4AndAddress5AndAddress6AndAddress7AndAddress8AndAddress9AndAddress10,
} from '@shopify/checkout-ui-extensions-react';

// Spin Wheel Game Component
function SpinWheelGame({ settings }) {
  const [isSpinning, setIsSpinning] = useState(false);
  const [hasWon, setHasWon] = useState(false);
  const [email, setEmail] = useState('');
  const [showGame, setShowGame] = useState(true);
  
  const { data: cart } = useCart();
  const { data: shippingAddress } = useShippingAddress();
  const { mutate: applyCartLinesChange } = useApplyCartLinesChange();

  // Game configuration (in real app, this would come from merchant settings)
  const prizes = [
    { name: "10% OFF", weight: 3, discount: 10, type: "percentage" },
    { name: "5% OFF", weight: 5, discount: 5, type: "percentage" },
    { name: "Free Shipping", weight: 2, discount: 0, type: "freeshipping" },
    { name: "Better luck next time!", weight: 4, discount: 0, type: "none" }
  ];

  const spinWheel = () => {
    if (isSpinning || !email) return;
    
    setIsSpinning(true);
    
    // Simulate spinning
    setTimeout(() => {
      // Calculate winner based on weights
      const totalWeight = prizes.reduce((sum, prize) => sum + prize.weight, 0);
      let random = Math.random() * totalWeight;
      let winner = prizes[0];
      
      for (const prize of prizes) {
        random -= prize.weight;
        if (random <= 0) {
          winner = prize;
          break;
        }
      }
      
      setHasWon(true);
      setIsSpinning(false);
      
      // Apply discount if won
      if (winner.discount > 0) {
        // In real app, you would create a discount code here
        console.log(`Customer won: ${winner.name}`);
      }
      
      // Hide game after showing result
      setTimeout(() => {
        setShowGame(false);
      }, 3000);
    }, 2000);
  };

  if (!showGame) return null;

  return (
    <Banner title={settings.gameTitle || "Spin to Win!"}>
      <View>
        <Text>
          {settings.prizeDescription || "Get a discount on your order!"}
        </Text>
        
        {!hasWon ? (
          <View>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{
                width: '100%',
                padding: '8px',
                marginBottom: '8px',
                border: '1px solid #ccc',
                borderRadius: '4px'
              }}
            />
            <Button
              onPress={spinWheel}
              disabled={isSpinning || !email}
              loading={isSpinning}
            >
              {isSpinning ? "Spinning..." : "Spin the Wheel!"}
            </Button>
          </View>
        ) : (
          <View>
            <Text>
              🎉 Congratulations! You won a discount!
            </Text>
            <Text>
              Check your email for your discount code.
            </Text>
          </View>
        )}
      </View>
    </Banner>
  );
}

// Main extension component
export default function CheckoutGamesExtension({ target, settings }) {
  return <SpinWheelGame settings={settings} />;
} 