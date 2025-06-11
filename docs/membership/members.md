---
sidebar_position: 1
---

# Members

This component allows owners to manage all active and inactive members, including filtering by subscription status, agreement completion, and membership level. Admins can perform check-ins, edit member data, and track notes and audit logs.

---

## 📋 Table Columns

| Column                | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Profile Pic**       | Shows the member's profile photo. Hidden by default to save space.         |
| **Name**              | Full name of the member. Searchable and sortable.                          |
| **Cash Member**       | Shows "Yes" if the member is manually managed (not subscribed online).     |
| **Email**             | Member's email address. Hidden by default.                                 |
| **Membership**        | Displays the membership level's name.                                      |
| **Subscription Status** | Interprets current status from the subscription record: Active, Expired, Cash, etc. |
| **Account Active**    | A toggle indicating if the account is active or suspended.                 |
| **Signed All**        | A boolean column showing whether all required agreements are signed.       |
| **Renewal Date**      | Shows when the subscription is due to renew, using a friendly label.       |
| **Joined**            | Shows how long ago the member joined, with tooltip for the exact date.     |

---

## 🔍 Filters

Includes toggleable and custom filters:

- **Payment Failed** – Finds users whose renewal string mentions failed payment.
- **Paused Subscriptions** – Filters users with paused subscriptions.
- **Cash User** – Shows only manually managed members.
- **Inactive** – Users whose account is deactivated.
- **Signed All** – Only members who have signed all required agreements.
- **Missing Agreements** – Members missing one or more agreement signatures.
- **Team Athlete** – Filters team-based users.
- **Membership Level** – Select dropdown to show only users in specific memberships.
- **Renewal Date Range** – Filter members by upcoming or past renewal dates.

---

## 🧰 Bulk Actions

Admins can apply changes to multiple selected members at once using the bulk actions menu.  Bulk actions only show up after clicking a checkbox to the left of the member or in the top left to select all.

![Checkboxes](/img/bulk2.png)
![Bulk action buttons](/img/bulk1.png)



### 🏷 Mark as Athlete
Sets the `is_athlete` flag to `true` for all selected members. Useful for tagging team-based or competition-ready members in bulk.

- **Location**: Bulk actions dropdown above the table.
- **Effect**: Updates selected members in-place.
- **Notification**: A success toast confirms how many members were updated.

### ❌ Unmark as Athlete
Clears the `is_athlete` flag for selected members.

- Same flow as above.
- Helps reverse bulk tagging operations.

---

## ✅ Table Actions

### 🟩 Check In
Allows the admin to manually check in a member to a class.

- **Checkin Name**: Select from main member or any bundle sub-members.
- **Select Class**: Class dropdown filtered by current date and portal timezone.
- Triggers a success notification after check-in.

### 🛠 Manage (Edit)
Slide-over form to update core user data:

- Name, Email, Profile Picture
- Membership Level
- Active status toggle
- Team Athlete toggle
- Embedded components<br/><sub>*some are only visible if 1 or more exist, i.e. if the user has no Agreements there will not be an Agreements dropdown*</sub>:
  - **Member Notes** 
    Allows you to record and view private notes about the member
  - **Audit Log** 
    Shows a record of changes made to the member
  - **Manage Subscriptions**
    Allows you to add, end, and pause active subscriptions on the member's account. You can also add recurring add-ons like locker rentals and charge prorated amounts immediately.

      #### 📦 Current Subscriptions

      Each subscription entry shows:

      - **Membership**: The base plan name
      - **Start/End Dates**: When the subscription began and ends
      - **Status**: Stripe billing status (active, incomplete, etc.)
      - **Cancel**: Allows you to end the main subscription

      Beneath each subscription, you’ll see a breakdown of attached items. This can include:

      - Membership-level plans
      - Add-ons like locker rentals, towel service, or coaching fees
      - The quantity for each item (e.g. 2x coaching blocks)<br/><br/>
      #### ➕ Add Recurring Items

      Admins can attach new recurring items (Stripe prices) to an existing subscription using the **“Add Item to Subscription”** form under each plan.

      - Select from available membership-level products
      - Set the quantity (usually `1`)
      - Click “Add” to attach it to the subscription<br/><br/>

      #### ⚡ Prorated Charges

      When you add a new item, the system will:

      1. Update the existing subscription
      2. Trigger a **prorated invoice** based on the time left in the current billing cycle
      3. **Immediately finalize and charge the invoice**<br/><br/>

      > If a $5/mo locker rental is added halfway through the month, the system will charge $2.50 immediately, and the full $5 will be added to the next monthly bill.

      This ensures members pay for what they use **now**, without waiting for the next renewal.

      #### 🧹 Removing Subscription Items

      You can remove individual add-ons (like locker rentals) from the subscription. When removed, the member is no longer billed for that item starting immediately, and any applicable **refunds or credits** will be handled via Stripe's proration logic.

      > 💡 Removing the **main subscription item** is not allowed via this menu. Use the “End” button in the main subscription row instead.

  - **Manage Accounts**  
  Manage additional members linked to this primary account. There are two types:

      #### 👤 Sub-Accounts (With Login Access)
      - Treated as full members.
      - Get their **own login**, profile, and access to the member portal.
      - Can register for classes **independently**.
      - Payment is handled by the **primary account holder**.
      - Best for adult dependents, spouses, or teens with their own device.<br/><br/>

      #### 👶 Bundle Accounts (Without Login)
      - **No login or separate portal access**.
      - Designed for minors or family members using a shared email.
      - Can be checked in via the kiosk **under the main account’s name**.
      - Best for young children or households managing multiple people under one email.<br/><br/>

      > Sub-accounts appear in filters and reports like standard members.  
      > Bundle accounts remain grouped under the main profile but are tracked individually for attendance and notes.<br/>
      > **You will still need to add separate subscriptions for the bundled and sub accounts to actually start billing**

  - **Agreements**
    View and allow the member to sign if they haven't agreements
  - **Texts** 
    Shows text messages sent to the member
  - **Emails**
    Displays emails that you have sent to the member, you can also send emails directly to individual members from here.  Clicking a subject will reveal the full sent message.
  - **Invoices**
    Lists recent invoices for the member’s connected account. Each entry shows:
      - **Date** the invoice was created
      - **Status** (paid, open, uncollectible, etc.)
      - **Amount Paid** or amount due
      - **PDF** link to the original invoice
      - If the invoice is **open** or **unpaid**, admins can click a **“Pay Now”** button to charge the member using their default payment method.  Admins can also **"Mark Paid"** which will mark the invoice as paid out of band, set the customer to active if they were inactive and move the next payment to the next period.
  - **Payment Methods**
    Lists payment methods.  You can also add a new payment method and change the default payment method from here.
  - **Contact Information**
    Displays phone and address
  - **Check Ins**
    Displays a record of dates that the user has checked in 
  - **Transactions**
    Displays financial transactions and allows you to refund them

---

### ➕ Header Actions

Visible only to paid accounts (not "Free"):

- **Register Cash Member**: Opens custom cash registration route.
- **Collect Cash**: Opens manual cash transaction entry screen.