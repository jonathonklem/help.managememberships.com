---
sidebar_position: 1
---

# Portal Settings

## Getting Started

To get started, navigate to **Settings → Portal Settings** in your admin dashboard.  

> ⚠️ **Important:** Your portal will not function correctly until these settings are configured.

---

## Communication and Portal Settings

Settings related to the visual and communication aspects of your member-facing portal.

### Website Name

Displayed at the top of your portal and used for internal references.

### Hero Image

A banner image that appears at the top of your portal for guests.

### Description

This message is shown to **non-logged-in visitors** on your portal homepage.

### Welcome Message

Shown to members **after logging in**.

### Welcome Email

Sent to new members **after they complete registration**.

---

## Membership Settings

Configuration for payment processing and membership enforcement.

### Timezone

Used for scheduling classes, access control logic, and system time coordination.

### Hide Cancel

If enabled, members must **contact you** directly to cancel their subscriptions.

### Split Fees

When checked, a **small processing surcharge** is added to member payments to share Stripe fees with them.

### Stripe Tax ID

If your jurisdiction requires tax collection, enter your Stripe-provided tax ID here.

### Failed Billings Before Inactive

How many failed billing attempts will occur before a member is automatically marked **inactive**.

### Logo

The logo displayed throughout your portal (square image recommended).

---

## Member Info

Settings related to registration requirements and birthday notification automation.

### Minimum Age

Sets a minimum allowed age for registration.  
> **Note:** "Require Birthdate" must be enabled for this to apply.

### Require Birthdate

If checked, members will be required to enter their birthdate during sign-up.

### Require Picture

When enabled, members must upload a photo at registration.  
> Especially useful for security or gym environments with 24/7 access.

### Send Birthday Reminder

Sends an email to you **7 days** and **1 day** before each member's birthday.  
> The reminder includes member names, emails, and days remaining.

### Additional Birthday Email Reminder

Comma-separated list of **other emails** that should receive birthday reminders.  
> Example: `staff@example.com, manager@example.com`

---

## Email Information

Used to manage email templates and additional notification recipients.

### Additional Payment Notification Emails

A list of staff emails to alert when a member's payment fails.

### Send From Name

This name will appear in the **"From" field** of all system-generated emails.

### Send From Email

The email address used for outgoing messages.  
> Must be a valid, verified address.  
> **Cannot** be a `@managememberships.com` email.

### Email Template

Reusable content (such as headers or footers) for pre-filling email campaigns.

