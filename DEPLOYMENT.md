# 🚀 Shopify Checkout Games - Deployment Guide

## 📋 Prerequisites

### 1. Shopify Partner Account
- Go to [partners.shopify.com](https://partners.shopify.com)
- Create a free Partner account
- Verify your email address

### 2. Development Store
- In Partner Dashboard → Stores → Add store
- Choose "Development store"
- Set up your test store

### 3. Required Tools
- Node.js (v16 or higher)
- Shopify CLI (already installed)
- Git (for version control)

## 🔧 Step-by-Step Deployment

### Step 1: Register Your App

1. **Create App in Partner Dashboard:**
   - Go to Partner Dashboard → Apps → Create App
   - Choose "Custom App" (for private use) or "Public App" (for App Store)
   - Fill in app details:
     - App name: "Checkout Games"
     - App URL: Your deployment URL
     - Allowed redirection URLs: Your auth callback URLs

2. **Get App Credentials:**
   - Copy your `Client ID`
   - Copy your `Client Secret`
   - Note your `App URL`

### Step 2: Update Configuration

1. **Update `shopify.app.toml`:**
   ```toml
   client_id = "YOUR_ACTUAL_CLIENT_ID"
   application_url = "https://your-deployment-url.com"
   dev_store_url = "your-dev-store.myshopify.com"
   ```

2. **Set Environment Variables:**
   ```bash
   export SHOPIFY_CLIENT_ID="your_client_id"
   export SHOPIFY_CLIENT_SECRET="your_client_secret"
   export SHOPIFY_SCOPES="write_products,write_orders,write_customers,write_discounts,write_marketing_events,read_orders,read_customers"
   ```

### Step 3: Choose Deployment Platform

#### Option A: Heroku (Recommended for beginners)

1. **Create Heroku App:**
   ```bash
   # Install Heroku CLI
   brew install heroku/brew/heroku  # macOS
   
   # Login to Heroku
   heroku login
   
   # Create app
   heroku create your-checkout-games-app
   ```

2. **Deploy to Heroku:**
   ```bash
   # Add Heroku remote
   heroku git:remote -a your-checkout-games-app
   
   # Deploy
   git push heroku main
   ```

3. **Set Environment Variables:**
   ```bash
   heroku config:set SHOPIFY_CLIENT_ID="your_client_id"
   heroku config:set SHOPIFY_CLIENT_SECRET="your_client_secret"
   heroku config:set SHOPIFY_SCOPES="write_products,write_orders,write_customers,write_discounts,write_marketing_events,read_orders,read_customers"
   ```

#### Option B: Vercel

1. **Connect to Vercel:**
   ```bash
   # Install Vercel CLI
   npm i -g vercel
   
   # Deploy
   vercel
   ```

2. **Set Environment Variables in Vercel Dashboard**

#### Option C: Railway

1. **Connect to Railway:**
   - Go to [railway.app](https://railway.app)
   - Connect your GitHub repository
   - Set environment variables

### Step 4: Build and Deploy Extensions

1. **Install Dependencies:**
   ```bash
   npm install
   cd extensions/checkout-games-ui && npm install
   cd ../admin-dashboard && npm install
   cd ../..
   ```

2. **Build Extensions:**
   ```bash
   shopify app build
   ```

3. **Deploy Extensions:**
   ```bash
   shopify app deploy
   ```

### Step 5: Install App on Store

1. **Development Store:**
   ```bash
   shopify app dev
   ```
   - This will open your development store
   - Install the app from the app listing

2. **Production Store:**
   - Go to your store's admin
   - Apps → Manage private apps
   - Add your custom app

## 🔐 Security Considerations

### 1. Environment Variables
- Never commit secrets to Git
- Use environment variables for all sensitive data
- Rotate secrets regularly

### 2. HTTPS Required
- Shopify requires HTTPS for all app URLs
- Most deployment platforms provide this automatically

### 3. Webhook Security
- Validate webhook signatures
- Use secure endpoints for webhooks

## 📊 Database Setup

### Option 1: PostgreSQL (Recommended)
```bash
# Heroku
heroku addons:create heroku-postgresql:hobby-dev

# Railway
# Add PostgreSQL service in dashboard
```

### Option 2: MongoDB Atlas
```bash
# Free tier available
# Set MONGODB_URI environment variable
```

### Option 3: Supabase
```bash
# Free tier available
# Set SUPABASE_URL and SUPABASE_KEY environment variables
```

## 🔄 Webhook Configuration

1. **Required Webhooks:**
   - `orders/create` - Track when customers complete orders
   - `customers/create` - Track new customer signups
   - `app/uninstalled` - Clean up when app is removed

2. **Webhook Endpoints:**
   ```javascript
   // Example webhook handler
   app.post('/webhooks/orders/create', (req, res) => {
     // Validate webhook signature
     // Process order data
     // Update analytics
     res.status(200).send();
   });
   ```

## 🧪 Testing

### 1. Development Testing
```bash
# Start development server
shopify app dev

# Test on development store
# Create test orders
# Verify game functionality
```

### 2. Production Testing
- Test on a separate development store
- Verify all features work correctly
- Test with real payment methods

## 📈 Analytics Integration

### 1. Google Analytics
```javascript
// Add to your app
gtag('config', 'GA_MEASUREMENT_ID');
```

### 2. Shopify Analytics
```javascript
// Use Shopify's built-in analytics
// Track conversion rates
// Monitor app performance
```

## 🚨 Common Issues & Solutions

### Issue 1: App Not Loading
- Check environment variables
- Verify app URLs in Partner Dashboard
- Check browser console for errors

### Issue 2: Extensions Not Working
- Verify extension deployment
- Check extension logs
- Ensure proper permissions

### Issue 3: Database Connection Issues
- Check database credentials
- Verify connection strings
- Test database connectivity

## 📞 Support Resources

- [Shopify App Development Docs](https://shopify.dev/docs/apps)
- [Shopify CLI Documentation](https://shopify.dev/docs/apps/tools/cli)
- [Shopify Partners Community](https://community.shopify.com/c/shopify-partners)

## 🎯 Next Steps

1. **Complete the deployment**
2. **Test thoroughly on development store**
3. **Set up monitoring and analytics**
4. **Prepare for App Store submission** (if public app)
5. **Plan marketing and customer acquisition**

---

**Need Help?** 
- Check the [Shopify App Development documentation](https://shopify.dev/docs/apps)
- Join the [Shopify Partners Community](https://community.shopify.com/c/shopify-partners)
- Contact Shopify Partner Support 