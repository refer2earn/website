import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

export default function HomepagePromote(): JSX.Element {
    return (
        <section className="bg-slate-900">
            <div className="container mx-auto py-32 px-48">
                <div className="bg-amber-400 bg-opacity-5 border border-amber-900/50 p-16 rounded-lg text-center">
                    <h3 className="text-4xl font-semibold text-white">
                        Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">promote your token</span> on Refer2Earn?</h3>
                    <p className="text-white text-opacity-50 text-2xl my-12">Rewards your promoters based on on-chain value.</p>
                    <div>
                        <Link
                            className="bg-gradient-to-r text-lg from-amber-400 to-amber-600 hover:to-amber-400 rounded-md text-slate-900 hover:text-slate-900 hover:no-underline font-semibold px-4 py-2"
                            to="/docs/intro"
                        >
                            Documentation
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}