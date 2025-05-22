import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import FaqItem from '@site/src/components/FaqItem';
import Layout from '@theme/Layout';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function FAQHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBannerSecondary)}>
      <div className="container">
        <Heading as="h1">
          FAQ
        </Heading>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} : FAQ`}
      description="ManageMemberships Knowledge Base">
      <FAQHeader />
      <div className={clsx(styles.innerContainer)}>
        <p>Frequently asked questions about the platform.  You can add to this list by <a href="mailto:jon@managememberships.com">Emailing a Question</a></p>
        <h2>Billing</h2>
        <FaqItem question="When are my members charged?">
          Members are charged immediately upon signup (if they choose a paid membership) and then on the same day each month thereafter. For example, if a member signs up on the 15th of the month, they will be charged on the 15th of each subsequent month.
        </FaqItem>
        <FaqItem question="How are failed payments handled?">
          The system checks the grace period that you set in your portal settings.  If the number of failed payments exceeds the grace period, the member will be automatically be set to inactive.  Even if they are set to inactive, the system will try to rebill the up to 8 times in a 30 day period.  If they do make a successful payment, their billing cycle remains the same.  
        </FaqItem>
      </div>
    </Layout>
  );
}