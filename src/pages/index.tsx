import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <p>Earn rewards for referring crypto project</p>
        <p>Powered by on-chain events</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="https://app.refer2earn.com/pools">
            Start Referring
          </Link>
          <Link
            className="button button--secondary button--lg"
            to="https://app.refer2earn.com/pools/create">
            Create A Pool
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Earn rewards through a Web3 Referral Protocol by recommending crypto projects to your friends and community.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
