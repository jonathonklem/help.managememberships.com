---
sidebar_position: 2
---

# Classes

The **Classes** section allows you to define and manage the types of classes or private sessions your organization offers. This includes standing weekly classes, appointment-based sessions, and any other structured offerings.

---

## 📊 Overview Table

The class table shows all classes currently available under your subdomain.

| Column         | Description |
|----------------|-------------|
| **Name**       | The name of the class or session. |
| **Price**      | Cost of a single registration. |
| **Days**       | Days of the week this class is offered. |
| **Active**     | Indicates whether this class is visible and open for registration. |

---

## ➕ Creating a New Class

Click the **"Create"** button to open the class editor. This will open a side panel with configuration fields.

### 📅 Required Fields

#### **Name**
- A label or title for the class.

#### **Image**
- Upload a class image. Required. Images are stored by subdomain.

#### **Description**
- Rich text description shown on the registration form.

#### **Price**
- Cost per registration. Can be discounted based on membership level.

#### **Start & End Date**
- Controls the window of availability. Leave **end date** blank if the class is ongoing.
- If you only want the class to show up on specific days (e.g., a summer seminar on 07/04, 07/11, and 07/18), use the **Additional Class Dates** field (see below).
- **Important:** 
  If this class is only intended to appear once, it is recommended to set the **end date to the day after**, and use **Days** to limit which single day within that range is used.

#### **Start & End Time**
- Set the time of day the class occurs or is bookable.

#### **Max Participants**
- For fixed-time classes, this limits how many can attend. For appointments, it limits per session.

#### **Is Active**
- Toggle whether this class is currently available.

---

## ⚖️ Fixed vs Flexible Scheduling

#### **Is Fixed Time**
- Toggle that determines whether this is a scheduled class (like Monday 6PM Jiu Jitsu) or a flexible time block (like a personal training session).

If unchecked:
- **Duration Minutes** becomes visible
- **Trainers** selection becomes required

---

## 💼 Trainer and Scheduling Settings

#### **Trainers**
- For non-fixed classes, select one or more trainers required to be available to book the class.
- Leave blank for group classes or drop-in events.

#### **Days**
- Select the days of the week this class can occur. Multiple days supported.
- This field is used to repeat classes on a weekly schedule (e.g., every Monday and Thursday).

#### **Additional Class Dates**
- Use this to schedule specific class dates that don’t follow a weekly pattern.
- Perfect for short-term workshops or series (e.g., a 4-class course running every Wednesday in July).
- These dates are treated as valid class days even if they aren’t included in the **Days** field.
- Helpful for structuring special offerings, holiday sessions, or limited-run programs.


#### **Agreements**
- Select which waivers (if any) must be signed to register for this class.

#### **Questions**
- Add registration-time questions. You can mark them as required (e.g., "Do you have any injuries?").

---

## 💸 Membership Pricing Options

#### **Membership Levels**
- Select which membership levels can register. Leaving this blank means **no one can register**.

#### **Membership Discounts**
- Offer percentage-based discounts to specific membership levels.

---

## 📆 Calendar Visibility

#### **Hide from Calendar**
- Toggle this to remove the class from public schedules, but still allow manual or link-based registration.

---

## 📝 Editing a Class

Click the **edit icon** to update any part of the class. Changes will reflect immediately for new registrations. Existing bookings are unaffected unless specifically changed elsewhere.

---

## 📋 Duplicating a Class

Click the **"Duplicate"** action from the class table to quickly create a copy of an existing class. The duplicated version:
- Copies all fields including name, schedule, trainers, and membership settings
- Appends **"(copy)"** to the class name
- Is set to **inactive** by default so you can safely make adjustments before making it live

Use this feature to easily reuse common formats or seasonal class templates without starting from scratch.

---

## ✅ Best Practices

- For regular group classes, keep **fixed time** enabled.
- For flexible appointments, define trainers and duration.
- Always check which membership levels are eligible.
- Hide inactive or seasonal classes using the **Active** toggle or **Hide from Calendar** option.
- Use **Additional Class Dates** for irregular events like seminars or workshops.
- Avoid setting the **same start and end date** unless you're also selecting a day in **Days** — this can prevent the class from showing on the calendar.
