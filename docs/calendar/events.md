---
sidebar_position: 1
---

# Events

The **Events** section allows you to create, manage, and track special events or one-time offerings such as seminars, workshops, or tournaments. Events can include multiple pricing options, membership restrictions, registration limits, and more.

---

## 📊 Overview Table

The event table lists all scheduled events for your subdomain.

| Column            | Description |
|------------------|-------------|
| **Name**         | The event title. |
| **Registrations**| Number of current registrations. |
| **Start Date**   | The scheduled date the event begins. |

Use the column sort or search bar to find a specific event or sort by upcoming dates.

---

## ➕ Creating a New Event

Click the **"Create"** button to open the event editor. This will slide out a panel with all configurable fields.

### 📅 Required Fields

#### **Name**
- The event name. This will automatically generate a public link slug.

#### **Picture**
- Upload a banner or image associated with the event. Required.

#### **Description**
- Full event details shown to the user during signup. Supports rich text and file attachments.

#### **Start & End Date**
- Defines the active period of the event. Must be between today and 2 years from now.

#### **Start & End Time**
- Defines the time window on each event day.

---

### 🔹 Optional Configuration

#### **Max Participants**
- Set a cap for the number of registrants. Leave blank for unlimited.

#### **Agreements**
- Choose which waivers or forms (if any) must be signed before someone can register.

#### **Custom Questions**
- Add additional questions to be asked during registration. Can be marked as required.

---

## 💸 Pricing Options

Each event can support multiple pricing options.

| Field                      | Description |
|----------------------------|-------------|
| **Name**                   | Label for the pricing tier (e.g., Early Bird, General). |
| **Price**                  | Cost of this pricing option. Minimum: $15. |
| **Eligible Membership Levels** | Only members with these levels can see or register at this price. |
| **Membership Discounts**   | Offer percentage discounts to specific membership levels. |

Use **"Add Pricing Option"** to define tiers. Each tier can also include multiple discounts.

---

## 👁️ Visibility

#### **Public Link**
- After creation, a link will be shown (e.g., `https://yoursubdomain.managememberships.com/events/sample-event`) for public sharing.

#### **Hide from Calendar**
- Toggle this to remove the event from public event calendars.

---

## 📝 Editing an Event

Click the **edit icon** to update:
- Name, image, description
- Date/time
- Pricing tiers and restrictions
- Agreements or visibility options

Changes are saved in real time and reflected in the public portal if visible.

---

## 🚫 Deleting an Event

Events can only be deleted if **no members have registered**. If registrations exist:
- A warning will appear:  
  > "Can not delete event with registrations"

To remove an active event from public view without deleting:
- Toggle **"Hide from Calendar"** or edit the start date to the past.

---

## ✅ Best Practices

- Use pricing tiers to support early bird or member-specific pricing.
- Include detailed descriptions and attachments if your event needs documentation.
- Link agreements to ensure members sign necessary waivers.
- You can hide private events so they don't show up on the calendar.