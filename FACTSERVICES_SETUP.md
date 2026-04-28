# Setting Up factservices.com to Receive Trading Results

## Step 1: Database Setup (in cPanel)

1. Go to **MySQL Databases** in cPanel
2. Create new database: `factserv_trading`
3. Create new user: `factserv_trader`
4. Set a strong password (update in PHP files)
5. Add user to database with ALL PRIVILEGES

## Step 2: Create Database Tables

1. Go to **phpMyAdmin** in cPanel
2. Select `factserv_trading` database
3. Click SQL tab
4. Copy and paste contents of `setup_trading_database.sql`
5. Click "Go" to create tables

## Step 3: Upload PHP Files

1. In **File Manager**, navigate to `public_html`
2. Upload these files:
   - `factservices_webhook.php` → rename to `trading-webhook.php`
   - `trading_dashboard.php` → keep as is

3. **IMPORTANT**: Edit both files to update:
   - Database password
   - Secret key (must match Railway)

## Step 4: Set File Permissions

1. Right-click `trading-webhook.php`
2. Set permissions to 644
3. Same for `trading_dashboard.php`

## Step 5: Update Railway Code

Add to your Railway trading scripts:

```python
from webhook_sender import WebhookSender

# Initialize webhook
webhook = WebhookSender(
    webhook_url="https://www.factservices.com/trading-webhook.php",
    secret_key="your-matching-secret-key"
)

# After trading session
webhook.send_trading_results(
    session_type="10am_session",
    recommendations=recommendations_list,
    analysis=analysis_data,
    performance=performance_metrics,
    orders=executed_orders
)
```

## Step 6: Test the Setup

1. Visit: `https://www.factservices.com/trading_dashboard.php`
2. Should see empty dashboard
3. Run a test from Railway
4. Dashboard should update with results

## Step 7: Security Hardening

1. Create `.htaccess` in same directory:
```apache
<Files "trading-webhook.php">
    # Only allow POST requests
    <LimitExcept POST>
        Require all denied
    </LimitExcept>
</Files>
```

2. Consider IP whitelisting for Railway's IPs

## Step 8: Optional - WordPress Integration

To show results in WordPress:

1. Create a new page
2. Use shortcode: `[trading_results]`
3. Add to theme's functions.php:

```php
function show_trading_results() {
    ob_start();
    include(ABSPATH . 'trading_dashboard.php');
    return ob_get_clean();
}
add_shortcode('trading_results', 'show_trading_results');
```

## URLs Created

- Webhook endpoint: `https://www.factservices.com/trading-webhook.php`
- Dashboard: `https://www.factservices.com/trading_dashboard.php`

## Testing with cURL

```bash
curl -X POST https://www.factservices.com/trading-webhook.php \
  -H "Content-Type: application/json" \
  -H "X-Secret-Key: your-secret-key" \
  -d '{"session_type":"test","timestamp":"2025-01-01T10:00:00","recommendations":[]}'
```