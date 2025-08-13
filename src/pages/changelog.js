import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqItem from '@site/src/components/FaqItem';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function ChangeLogHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerSecondary)}>
      <div className="container">
        <Heading as="h1">
          Change Log
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : Change Log`}
      description="ManageMemberships Knowledge Base">
      <ChangeLogHeader />
      <div className={clsx(styles.innerContainer)}>
        <p>All notable changes to the platform will be documented here.</p>
        <hr/>
        <h2>[1.8.0] - 2025-07-14</h2>

<h3>Fixed</h3>
<ul>
  <li>Resources now show all available resources for that day in the list of resources</li>
  <li>Sort order for resources is now honored on frontend as well as backend</li>
  <li>Double recording of cancellation fee is fixed</li>
  <li>Adding child accounts are now properly initialized with parent account info</li>
  <li>Timeoff requests now properly shows name in manageshifts</li>
  <li>Email campaign scheduling fixed</li>
  <li>Sunday resource availability fix</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Can now delete resources</li>
  <li>Collection and failed payment chart on dashboard</li>
  <li>Now you can link directly to specific class</li>
  <li>Now you can link directly to specific resource</li>
  <li>Unavailability now shows up in the backend calendar more obviously</li>
  <li>Bulk mark active/inactive in member dashboard now</li>
  <li>You can now add external registration links to events</li>
  <li>Owner can turn off new member registration notifications to reduce number of incoming emails</li>
  <li>Mechanism for blocking bounced email addresses from sending emails put in place</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Registration form a bit more explicit with validation requirements and strips out non-digits in mobile</li>
  <li>Signature and printed name enforced on waiver page</li>
  <li>Remove aggressive hover on event calendar for UX concerns</li>
  <li>Sorting on last checkin report is now based on date</li>
  <li>You can now filter for membership levels on last checkin report</li>
  <li>Timezone mismatch on resource reservation and mutation of end time fixed</li>
  <li>Members now show parent account if it's child</li>
  <li>Non manager can start kiosk mode in manageshifts</li>
  <li>Start and end date on financial transactions, now searches from midnight to 11:59:59 instead of midnight to midnight</li>
</ul>

<h2>[1.7.0] - 2025-06-27</h2>

<h3>Improved</h3>
<ul>
  <li>Improved the performance of several database queries</li>
  <li>'Renewal date' for day passes now displays properly</li>
  <li>Decluttered past subscription views</li>
  <li>Free class registration is more streamlined</li>
  <li>Branding settings are applied to class confirmation emails</li>
  <li>Minimum character length to avoid confusion kiosk</li>
  <li>Removed toggle button on members table to reduce risk of accidental click</li>
  <li>Require confirmation when changing member's active status in edit</li>
  <li>Membership card generation instructions are now more clear</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Error on drop-in payers fixed</li>
  <li>Paused subscriptions display properly on member detail page</li>
  <li>Dollar input on available classes bug fixed</li>
  <li>Adding CC to account that previously didn't have payment account glitch fixed</li>
  <li>Fixed calendar calculation issue on recurring dates</li>
</ul>

<h3>Added</h3>
<ul>
  <li>Confirmation box on updating subscriptions and improved explanation</li>
  <li>Quick kiosk mode added</li>
  <li>Can now duplicate events for easy creation</li>
  <li>Closed dates are now in the settings</li>
  <li>Can now duplicate classes</li>
  <li>Classes can now span non-contiguous days such as a 4 week training class every Wednesday</li>
  <li>Bundled members show in member search output</li>
  <li>Users can now manage past-due invoices and view paid invoices</li>
  <li>Last Checked In report so you can see who hasn't checked in in a while</li>
</ul>

<h2>[1.6.0] - 2025-06-11</h2>

<h3>Added</h3>
<ul>
  <li>Time clock API for ManageShifts.com</li>
  <li>Can now delete pages</li>
  <li>Staff availability API for ManageShifts.com</li>
  <li>Sane rate limiting now applied to API</li>
  <li>Resources are now sortable</li>
  <li>Resources are synced with ManageRegister.com</li>
  <li>Historic MRR data is now saved for future reference more conveniently</li>
  <li>More robust logging for API access</li>
  <li>Can now send emails directly to individual member from management panel</li>
  <li>Can now manage invoices from the member management area, including marking as paid out of band and initiating payment with default payment method</li>
  <li>Can now manage payment methods, add, delete, and mark as default from the admin panel</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Now default to descending creation date for member sort order on admin side</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Error on cash members in management section</li>
  <li>Fixed javascript errors on cash account management pages</li>
  <li>Page editing error for marketing pages</li>
  <li>Fixed issue with decimal point on alternative pricing</li>
  <li>Fixed issue with Annual RR calculations not properly reflecting in admin widget</li>
  <li>Boosted efficiency of calendar API</li>
  <li>Subscription pause error</li>
  <li>Fixed output report of app fee erroneously applied on transaction fee for failed payments</li>
  <li>Staff can now update/edit their availability and trainers can see check in reports</li>
  <li>Birthday output on membership form</li>
</ul>

<h2>[1.5.0] - 2025-06-02</h2>

<h3>Added</h3>
<ul>
  <li>Better mobile support for calendar</li>
  <li>Door-access-logs api endpoint</li>
  <li>Can now toggle whether or not to send payment failure notifications</li>
  <li>You can now update a subscription to add line items rather than create multiple subscriptions. This is handy for lower priced items such as locker rentals</li>
  <li>You can now associate agreements directly at the membership level form</li>
</ul>

<h3>Improved</h3>
<ul>
  <li>Better token handling for API endpoints</li>
  <li>Better invoice/payment history details</li>
  <li>Better output if there are issues with entering payment method</li>
  <li>Improved general layout/visual order of membership option page</li>
  <li>Better output on frontend for when there are multiple payment periods (ie annual, semiannual)</li>
  <li>Transaction log now shows reason for failure</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Inactivate cash payer logic now more reliable, avoids false positives</li>
  <li>Multimember now says "/person" to differentiate normal monthly</li>
  <li>Disabled engagement stats sorting on email campaigns which was causing error</li>
  <li>Fixed uniqueness issue with blog title/slug across domains</li>
</ul>

<h2>[1.4.0] - 2025-05-23</h2>

<h3>Added</h3>
<ul>
  <li>Compile renewal dates now syncs stripe status</li>
  <li>Bulk update to members to mark/unmark as team athletes</li>
  <li>Bundle account management</li>
  <li>Birthday reminder functionality</li>
</ul>

<h3>Changed</h3>
<ul>
  <li>Improved portal settings organization</li>
</ul>

<h3>Fixed</h3>
<ul>
  <li>Refund 500 issue on Admin dashboard</li>
  <li>Kiosk scanned qr code not populating data</li>
  <li>CompileRenewalDate function will properly clear ends_at db field</li>
</ul>

<h2>[1.3.2] – 2025-05-18</h2>
<ul>
  <li>Formal changelog process is put in place</li>
</ul>

      </div>
    </Layout>
  );
}
