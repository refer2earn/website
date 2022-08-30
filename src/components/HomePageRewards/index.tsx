import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type Item = {
    heading: string;
    comingSoon: boolean;
    description: string;
    linkText: string;
    linkUrl: string
};

const items: Item[] = [
    {
        heading: "Refer To Earn",
        comingSoon: false,
        description: "Share your referral link and earn rewards for every token bought through your link.",
        linkText: "Learn more",
        linkUrl: "/docs/guides/promote"
    },
    {
        heading: "Buy To Earn",
        comingSoon: false,
        description: "Buy tokens through referral links and earn rewards for participating in the ecosystem.",
        linkText: "Learn more",
        linkUrl: "/docs/guides/buy"
    },
    {
        heading: "Stake To Earn",
        comingSoon: false,
        description: "Earn rewards for securing the oracle network through our pre-oracle staking pool.",
        linkText: "Learn more",
        linkUrl: "/docs/advanced/staking"
    },
    {
        heading: "Provide Liquidity",
        comingSoon: true,
        description: "Earn rewards by providing BNB/R2E liquidity on pancakeswap.",
        linkText: "Learn more",
        linkUrl: "/docs/advanced/liquidity"
    },
]

type ItemViewProps = {
    item: Item
}

function ItemView(props: ItemViewProps) {

    const item = props.item

    return (
        <div className="bg-gradient-to-r from-amber-100/5 to-amber-100/10 p-8 rounded-xl border border-slate-50/50">
            <div className="flex flex-col gap-6 text-xl font-light text-slate-400">
                {/* { item.comingSoon ? <div className="p-2 w-fit text-xs border border-amber-400 rounded-md text-amber-400">Coming soon</div> : <></> } */}
                <h4 className="text-3xl font-semibold text-white">{item.heading}</h4>
                <p>{item.description}</p>
                <Link
                    className="text-base text-amber-400 hover:text-amber-600 font-semibold w-fit"
                    to={item.linkUrl}
                >{item.linkText}</Link>
            </div>
        </div>
    )
}

export default function HomepageRewards(): JSX.Element {
    return (
        <section className="bg-slate-900">
            <div className="container mx-auto py-32 px-48">
                <h3 className="text-4xl text-center font-semibold text-white pb-16">
                    How To <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600">Earn Rewards</span></h3>
                <div className="grid grid-cols-2 gap-16">
                    {items.map((item, key) => <ItemView item={item} key={key} />)}
                </div>
            </div>
        </section>
    );
}

// text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-600