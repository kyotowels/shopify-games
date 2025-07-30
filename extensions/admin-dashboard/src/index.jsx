import React, { useState, useEffect } from 'react';
import {
  Page,
  Layout,
  Card,
  Button,
  Text,
  TextField,
  Select,
  Stack,
  Badge,
  DataTable,
  Modal,
  FormLayout,
  Banner,
  useApi,
  useSessionToken,
  useShop,
  useCustomer,
  useOrder,
  useProduct,
  useVariant,
  useCart,
  useShippingAddress,
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
} from '@shopify/admin-ui-extensions-react';

// Main Admin Dashboard Component
function AdminDashboard() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [gameSettings, setGameSettings] = useState({
    enabled: true,
    gameTitle: 'Spin to Win!',
    prizeDescription: 'Get a discount on your order!',
    wheelColors: ['#FF6B6B', '#4ECDC4'],
    prizes: [
      { name: '10% OFF', weight: 3, discount: 10, type: 'percentage' },
      { name: '5% OFF', weight: 5, discount: 5, type: 'percentage' },
      { name: 'Free Shipping', weight: 2, discount: 0, type: 'freeshipping' }
    ]
  });

  const [analytics] = useState({
    totalGames: 1247,
    totalWins: 892,
    conversionRate: 71.5,
    revenueIncrease: 23.4,
    emailsCollected: 1156,
    salesFromCoupons: 234
  });

  const tabs = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'settings', label: 'Game Settings' },
    { id: 'analytics', label: 'Analytics' },
    { id: 'customers', label: 'Customers' }
  ];

  const renderDashboard = () => (
    <Layout>
      <Layout.Section>
        <Card title="Game Overview">
          <Stack>
            <Banner title="Game Status" status="success">
              Your spin wheel game is active and running on checkout pages.
            </Banner>
            
            <Stack distribution="fillEvenly">
              <Card sectioned>
                <Stack alignment="center">
                  <Text variant="headingLg" as="h2">{analytics.totalGames}</Text>
                  <Text variant="bodyMd" as="p">Total Games Played</Text>
                </Stack>
              </Card>
              
              <Card sectioned>
                <Stack alignment="center">
                  <Text variant="headingLg" as="h2">{analytics.conversionRate}%</Text>
                  <Text variant="bodyMd" as="p">Conversion Rate</Text>
                </Stack>
              </Card>
              
              <Card sectioned>
                <Stack alignment="center">
                  <Text variant="headingLg" as="h2">{analytics.emailsCollected}</Text>
                  <Text variant="bodyMd" as="p">Emails Collected</Text>
                </Stack>
              </Card>
            </Stack>
          </Stack>
        </Card>
      </Layout.Section>
    </Layout>
  );

  const renderSettings = () => (
    <Layout>
      <Layout.Section>
        <Card title="Game Configuration">
          <FormLayout>
            <TextField
              label="Game Title"
              value={gameSettings.gameTitle}
              onChange={(value) => setGameSettings({...gameSettings, gameTitle: value})}
            />
            
            <TextField
              label="Prize Description"
              value={gameSettings.prizeDescription}
              onChange={(value) => setGameSettings({...gameSettings, prizeDescription: value})}
            />
            
            <Select
              label="Game Status"
              options={[
                {label: 'Enabled', value: 'enabled'},
                {label: 'Disabled', value: 'disabled'}
              ]}
              value={gameSettings.enabled ? 'enabled' : 'disabled'}
              onChange={(value) => setGameSettings({...gameSettings, enabled: value === 'enabled'})}
            />
            
            <Button primary>Save Settings</Button>
          </FormLayout>
        </Card>
      </Layout.Section>
    </Layout>
  );

  const renderAnalytics = () => (
    <Layout>
      <Layout.Section>
        <Card title="Performance Analytics">
          <Stack>
            <DataTable
              columnContentTypes={['text', 'numeric', 'numeric', 'numeric']}
              headings={['Metric', 'Value', 'Change', 'Status']}
              rows={[
                ['Total Games', analytics.totalGames.toString(), '+12%', 'positive'],
                ['Conversion Rate', `${analytics.conversionRate}%`, '+5%', 'positive'],
                ['Emails Collected', analytics.emailsCollected.toString(), '+8%', 'positive'],
                ['Revenue Increase', `${analytics.revenueIncrease}%`, '+15%', 'positive']
              ]}
            />
          </Stack>
        </Card>
      </Layout.Section>
    </Layout>
  );

  const renderCustomers = () => (
    <Layout>
      <Layout.Section>
        <Card title="Customer Data">
          <Stack>
            <Banner title="Data Privacy" status="info">
              Customer email addresses are collected securely and used only for sending discount codes.
            </Banner>
            
            <Text variant="bodyMd" as="p">
              Total customers who played: {analytics.totalWins}
            </Text>
            
            <Text variant="bodyMd" as="p">
              Sales generated from coupons: {analytics.salesFromCoupons}
            </Text>
          </Stack>
        </Card>
      </Layout.Section>
    </Layout>
  );

  return (
    <Page title="Checkout Games">
      <Layout>
        <Layout.Section>
          <Card>
            <Stack>
              {tabs.map((tab) => (
                <Button
                  key={tab.id}
                  pressed={activeTab === tab.id}
                  onPress={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </Button>
              ))}
            </Stack>
          </Card>
        </Layout.Section>
        
        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'settings' && renderSettings()}
        {activeTab === 'analytics' && renderAnalytics()}
        {activeTab === 'customers' && renderCustomers()}
      </Layout>
    </Page>
  );
}

// Main extension component
export default function AdminDashboardExtension({ target, settings }) {
  return <AdminDashboard />;
} 