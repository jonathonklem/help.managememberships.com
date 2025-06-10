---
sidebar_position: 2
---

# Membership Levels

The **Membership Levels** section allows you to define the different types of subscriptions or plans available to members in your organization. Each level controls pricing, billing interval, and visibility within the member portal.

---

## 📊 Overview Table

The table shows all membership levels for your subdomain. Columns include:

| Column            | Description |
|-------------------|-------------|
| **Name**          | The name of the membership level (e.g., "Monthly", "Family Pass"). |
| **Price**         | The cost of the membership, formatted as a dollar amount (e.g., `$29.99`). |
| **Billing Interval** | How often the membership renews (e.g., `monthly`, `yearly`). |
| **Active**        | A boolean toggle indicating whether the membership is currently active or hidden from public view. |

---

## 🔍 Filtering Memberships

Use the **Active** filter at the top of the table to narrow results:
- **Active** – Show only active plans
- **Inactive** – Show only disabled plans
- **All** – Show all membership levels

---

## ✏️ Editing a Membership Level

Click the **edit icon** on any row to open a slide-over form where you can update:
- Name
- Price
- Billing interval
- Other fields defined in the `MembershipForm::schema()`

---

## 🗑️ Deleting a Membership Level

You can delete a membership level only if **no users are currently assigned to it**.

If the level is in use:
- A warning notification appears:  
  > "Can not delete memberships associated with a member"

---

## ➕ Creating a Membership Level

Membership levels define the structure of your offerings, including pricing, billing frequency, trial logic, and bundling options. These configurations determine how members are billed and what options are available to them during sign-up or renewal.

---

### 🧾 Required Fields

#### **Name**
- A unique name for this membership (e.g., `Monthly Adult`, `Quarterly Family`).

---

#### **Free Membership**
- Indicates this level is free.
- When enabled:
  - Billing options are hidden.
  - Price is automatically set to `$0`.
  - Billing interval defaults to monthly.
- Free users (on the Free SaaS plan) are **required** to mark memberships as free.

---

#### **Trial Membership**
- Enables a trial period where the member is not billed immediately.
- If checked, the following field appears:
  - **Number of periods for free** – The number of days/weeks/months the member can use the membership for free before billing begins.

---

#### **Price**
- Numeric field that sets the base price of the membership.
- Must be `$0` or `$1+`.
- ❗ Once created, the price is **read-only** and cannot be changed.

---

#### **Signup Fee**
- One-time fee charged in addition to the base price during initial signup.

---

#### **Associated Agreements**
- Specify which agreements must be signed for this membership level.  You will see a warning if there are no agreements.

---

#### **Min/Max Age**
- Optional fields to restrict who can purchase this membership.
- Must have birthday collection enabled in portal settings to work.

---

#### **Billing Interval**
- How often this membership bills:
  - `Day`, `Week`, `Month`, `Quarter`, `Semi-Annual`, or `Yearly`
- ❗ Once created, this cannot be changed.
- Only shown if the membership is not marked as free.

---

### 💲 Additional Pricing Options

#### **Additional Price Options**
- Use this section to offer **alternate billing intervals** with their own pricing (e.g., quarterly or yearly discounts).
- Each option includes:
  - Billing interval (e.g., yearly)
  - Price in USD
  - Promotional text (optional, e.g. : 1 month free)
- Great for encouraging **longer commitments with discounts**.

---

### 🔁 Renewal & Expiration Options

#### **Annual Renewal**
- If enabled, members must **re-sign waivers or agreements each year**.
- This is useful for legal compliance in environments like gyms or schools.
- When checked, an optional field appears:
  - **Months Penalty** – Number of months to penalize if a user cancels early.

#### **Is Recurring**
- Indicates whether this membership auto-renews (i.e., subscription).
- If disabled, you can set:
  - **Expiration Days** – How long the membership lasts before expiring.

---

### 👀 Visibility Options

#### **Publicly Visible**
- Controls whether this membership level appears on the public registration page.

#### **Public Link**
- If editing an existing membership, this will show the **registration link** users can use to sign up for it.

---

### 👨‍👩‍👧 Multi-Member & Bundling Options

> 🔐 These are only available to paid SaaS accounts.

#### **Multi-Member**
- Enables charging for **multiple people under one plan** (e.g., family plan).
- They will be billed for the monthly amount * the number of members.  e.g. 3x$30/mo would be $90/mo
- Adds these fields:
  - **Minimum Additional Members** – Minimum number of extra members.
  - **Maximum Additional Members** – Cap on how many can be added.

#### **Allow Bundles**
- Enables bundling this membership with other levels.
- Useful when members want to purchase **add-ons** (e.g., `Monthly Membership + Coaching`).
- If enabled:
  - A multi-select appears to choose which other memberships can be bundled.

---

### 🧾 Custom Fields

#### **Custom Fields**
- Use this section to collect extra information at signup.
- Key-value input allows fields like:
  - `emergency_contact` → "Emergency Contact Name"
  - `allergies` → "Known Allergies"

These fields will show up on the member form and can be referenced in exports or internal views.

---

### ✅ Best Practices

- Always provide at least one **billing interval** and price (or mark it as free).
- Use **Additional Price Options** to encourage long-term signups with savings.
- If legally required, enable **Annual Renewal** to keep signed agreements up to date.
- Consider **bundling** only where it simplifies the purchasing experience for your members.


---

## 🔀 Reordering Membership Levels

To reorder how resources appear (e.g., in dropdowns or booking interfaces), click the **up/down arrow icon** in the top-left corner of the table, then **drag and drop** the rows into your preferred sequence. When done, **click the checkbox** to save the new order.

---

## ✅ Best Practices

- Keep membership names clear and recognizable (e.g., "Adult Monthly", "Family Annual").
- Use the **active toggle** to hide legacy plans without deleting them.
- Always associate an agreement template with each membership (see [Agreement Templates](./agreements)).

