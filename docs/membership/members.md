---
sidebar_position: 1
---

# Members

This component allows owners to manage all active and inactive members, including filtering by subscription status, agreement completion, and membership level. Admins can perform check-ins, edit member data, track notes and audit logs, and review renewal statuses for billing management.

---

## 📋 Table Columns

| Column                | Description                                                                 |
|-----------------------|-----------------------------------------------------------------------------|
| **Profile Pic**       | Shows the member's profile photo. Hidden by default to save space.         |
| **Name**              | Full name of the member. If bundle accounts exist, their names will appear below as a list. Searchable and sortable. |
| **Bundled Members**   | Hidden column used only for search. Allows admins to search by names of bundled members. |
| **Cash Member**       | Shows "Yes" if the member is manually managed (not subscribed online).     |
| **Email**             | Member's email address. Hidden by default.                                 |
| **Membership**        | Displays the membership level's name.                                      |
| **Subscription Status** | Interprets current status from the subscription record: Active, Expired, Cash, etc. |
| **Account Active**    | A toggle indicating if the account is active or suspended.                 |
| **Signed All**        | A boolean column showing whether all required agreements are signed.       |
| **Renewal Date**      | Shows the next renewal date for active members or the last billing date for failed payments, ensuring admins can track expected billing accurately. |
| **Renewal Status**    | Displays a clear status: "good", "paused", or "failed", allowing quick filtering and review of members needing billing attention. |
| **Joined**            | Shows how long ago the member joined, with tooltip for the exact date.     |

---

## 🔍 Filters

Includes toggleable and advanced filters for precise member management:

- **Payment Failed** – Finds users with failed payment attempts in their renewal records.
- **Paused Subscriptions** – Filters users with actively paused subscriptions.
- **Cash User** – Shows only manually managed members.
- **Inactive** – Users whose account is deactivated.
- **Signed All** – Only members who have signed all required agreements.
- **Missing Agreements** – Members missing one or more agreement signatures.
- **Team Athlete** – Filters team-based users.
- **Membership Level** – Select dropdown to show only users in specific memberships.
- **Renewal Date Range** – Filter members by upcoming, current, or past renewal dates for proactive billing and retention management.
- **Renewal Status** – Filter members by `failed`, `paused`, or `good` renewal status for quick attention on failed or paused accounts.

---

## 🧰 Bulk Actions

Admins can apply changes to multiple selected members at once using the bulk actions menu. Bulk actions only appear after selecting checkboxes next to member names.

![Checkboxes](/img/bulk2.png)
![Bulk action buttons](/img/bulk1.png)

### 🏷 Mark as Athlete
Sets the `is_athlete` flag to `true` for selected members for team tagging.

### ❌ Unmark as Athlete
Clears the `is_athlete` flag for selected members.

### ✅ Mark as Active
Sets the `active` flag to `true` to re-enable accounts.

### 🚫 Mark as Inactive
Sets the `active` flag to `false` to pause accounts without deleting them.

---

## ✅ Table Actions

### 🟩 Check In
Manually check in a member to a class, selecting from the member or bundled sub-members, with optional class assignment.

### 🛠 Manage (Edit)
Slide-over form for updating member data, with embedded management tools:

- **Name, Email, Profile Picture**
- **Membership Level**
- **Active / Team Athlete toggles**
- Embedded management sections:
  - **Member Notes**
  - **Audit Log**
  - **Manage Subscriptions**:
    - View, add, or end subscriptions
    - Attach recurring add-ons like lockers or towels
    - Trigger prorated charges immediately upon add-on
    - Remove recurring items when needed
  - **Manage Accounts**:
    - Sub-Accounts (with login)
    - Bundle Accounts (without login)
  - **Agreements** (view/sign)
  - **Texts** (view history)
  - **Emails** (view and send)
  - **Invoices** (pay, view, mark paid)
  - **Payment Methods** (view, add, set default)
  - **Contact Information** (phone, address)
  - **Check Ins** (history)
  - **Transactions** (view, refund)

---

## 🗓 Understanding Renewal Date and Renewal Status

- **Renewal Date**:
  - Shows the next billing date if the subscription is active.
  - If a payment has failed, shows the **last billing date that succeeded** for clarity in retention and collections workflows.
  - Helps identify upcoming renewals or overdue follow-ups.

- **Renewal Status**:
  - `good`: Member is active and current.
  - `paused`: Subscription is paused; the member is not currently billed.
  - `failed`: Payment has failed; member requires attention for billing or collection.
  - Enables clear filtering and prioritization of failed/paused members.

---

### ➕ Header Actions

Visible only to paid plans:

- **Register Cash Member**: For manual entry of non-subscription members.
- **Collect Cash**: For manual cash payments and transaction tracking.

---

This updated help ensures **staff understand and leverage your renewal tracking workflow**, reducing confusion and improving actionable follow-up with members.
