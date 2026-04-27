---
sidebar_position: 2
---

# Classes

The **Classes** section allows you to define and manage the types of classes or private sessions your organization offers. This includes standing weekly classes, appointment-based sessions, and any other structured offerings.

---

## Overview Table

The class table shows all classes currently available for your business.

| Column         | Description |
|----------------|-------------|
| **Name**       | The name of the class or session. |
| **Price**      | Cost of a single registration. |
| **Days**       | Days of the week this class is offered. |
| **Is Active**  | Indicates whether this class is visible and open for registration. |

---

## Creating a New Class

Click **"New Available Class"** to open the class editor. This will open a side panel with configuration fields organized into sections.

### Basic Information

#### **Class Name**
- A label or title for the class.

#### **Class Image**
- Upload a class image. Required.

#### **Class Description**
- Rich text description shown on the registration form.

#### **Max Participants**
- For fixed-time classes, this limits how many can attend. For appointments, it limits per session.

---

### Pricing

#### **Base Price**
- Cost per registration. Can be discounted based on membership level.

#### **One-Time Free Code**
- Optional promotional code that allows users to get their first class free.
- When set, users can enter this code during registration to waive the class fee.
- Each user can only use the code once, and it's only valid for this specific class.
- Leave blank if no promotional pricing is needed.

---

### Schedule & Timing

#### **Fixed Schedule Class**
- Toggle that determines whether this is a scheduled class (like Monday 6PM Jiu Jitsu) or a flexible time block (like a personal training session).

If toggled off:
- **Session Duration (Minutes)** becomes visible
- **Available Trainers** selection becomes required

#### **Available From / Available Until**
- Controls the window of availability. Leave **Available Until** blank if the class is ongoing.
- **Important:** If this class is only intended to appear once, it is recommended to set the end date to the day after, and use **Available Days** to limit which single day within that range is used.

#### **Start & End Time**
- Set the time of day the class occurs or is bookable.

#### **Registration Deadline**
- How many days before the class should registration close. Options range from same day (no restriction) to 2 weeks before. Leave blank for no restriction.

#### **Available Days**
- Select the days of the week this class can occur. Multiple days supported.
- This field is used to repeat classes on a weekly schedule (e.g., every Monday and Thursday).

#### **Special Class Dates**
- Use this to schedule specific class dates that don't follow a weekly pattern.
- Perfect for short-term workshops or series (e.g., a 4-class course running every Wednesday in July).
- Click **Add Special Date** to add individual dates.
- These dates are treated as valid class days even if they aren't included in the **Available Days** field.

---

### Staff & Resources

#### **Available Trainers**
- Select trainers who can lead this class. Required for flexible booking classes like private lessons.
- Leave blank for group classes or drop-in events.

---

### Registration Requirements

#### **Required Agreements**
- Select which waivers (if any) must be signed to register for this class.

#### **Registration Questions**
- Add registration-time questions. You can mark them as required (e.g., "Do you have any injuries?").

---

### Membership Eligibility & Discounts

#### **Eligible Membership Levels**
- Select which membership levels can register. Leaving this blank means **no one can register**.

#### **Membership Level Discounts**
- Offer percentage-based discounts to specific membership levels.

---

### Notifications & Advanced Settings

#### **Notification Emails**
- Comma-separated email addresses to notify when someone registers for this class.

#### **Class Active**
- Toggle whether this class is currently available for registration.

#### **Hide from Public Calendar**
- Toggle this to remove the class from public schedules, but still allow manual or link-based registration.

#### **Public View Link**
- After saving, a direct link to this class's public registration page is displayed.

#### **Reminder Settings**
- Configure email reminders to be sent to registered members before class starts. Enter hours before class (e.g., 24, 48, 168 for 7 days).

---

### ManageRegister POS

#### **Sync Completion to ManageRegister**
- If enabled, completed bookings for this class appear in ManageRegister via the register API.

---

## Editing a Class

Click the **edit icon** to update any part of the class. Changes will reflect immediately for new registrations. Existing bookings are unaffected unless specifically changed elsewhere.

---

## Duplicating a Class

Click the **"Duplicate"** action from the class table to quickly create a copy of an existing class. The duplicated version:
- Copies all fields including name, schedule, trainers, and membership settings
- Appends **"(copy)"** to the class name
- Is set to **inactive** by default so you can safely make adjustments before making it live

Use this feature to easily reuse common formats or seasonal class templates without starting from scratch.

---

## Best Practices

- For regular group classes, keep **Fixed Schedule Class** enabled.
- For flexible appointments, define trainers and duration.
- Always check which membership levels are eligible.
- Hide inactive or seasonal classes using the **Class Active** toggle or **Hide from Public Calendar** option.
- Use **Special Class Dates** for irregular events like seminars or workshops.
- Avoid setting the **same start and end date** unless you're also selecting a day in **Available Days** — this can prevent the class from showing on the calendar.
