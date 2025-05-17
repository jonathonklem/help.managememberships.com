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
- Embedded components <sub>*some are only visible if 1 or more exist, i.e. if the user has no Agreements there will not be an Agreements dropdown*</sub>:
  - **Member Notes** 
    Allows you to record and view private notes about the member
  - **Audit Log** 
    Shows a record of changes made to the member
  - **Manage Subscriptions**
    Allows you to add, end, and pause active subscriptions on the member's account
  - **Manage Accounts**
    Allows you to manage sub-accounts in the instance where there are bundled members
  - **Agreements**
    View and allow the member to sign if they haven't agreements
  - **Texts** 
    Shows text messages sent to the member
  - **Emails**
    Displays emails that you have sent to the member
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