import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';
import HomepageRewards from '../components/HomePageRewards';
import HomepagePromote from '../components/HomePagePromote';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className="bg-slate-900">
      <div className="container mx-auto py-48">

        <div className="grid grid-cols-2 gap-8">
          <div>
            <h2 className="text-5xl font-bold text-white"><span className="underline">Web3</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Referral Protocol</span></h2>
            <div className="my-8 flex flex-col gap-2 text-xl font-light text-slate-400">
              <p>Earn rewards for referring crypto projects.</p>
              <p>Powered by on-chain events.</p>
            </div>

            <div className="flex gap-2">
              <Link
                className="bg-gradient-to-r from-amber-400 to-amber-600 hover:to-amber-400 rounded-md text-slate-900 hover:text-slate-900 hover:no-underline font-semibold px-4 py-2"
                to="/docs"
              >
                Documentation
              </Link>
              <Link
                className="border border-amber-400 font-semibold text-white hover:text-white hover:no-underline hover:bg-white hover:bg-opacity-10 rounded-md px-4 py-2"
                to="/docs/roadmap"
              >
                Roadmap
              </Link>
            </div>
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Earn rewards through a Web3 Referral Protocol by recommending crypto projects to your friends and community.">
      <HomepageHeader />
      <main>
        <HomepageRewards />
        <HomepagePromote />
      </main>
    </Layout>
  );
}
