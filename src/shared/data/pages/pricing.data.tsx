import { ComparisonProps, FAQsProps, PricingProps } from '~/shared/types';
import { HeroProps } from '~/shared/types';

// Hero data on Pricing page *******************
export const heroPricing: HeroProps = {
  title: 'Pricing that scales with you.',
  subtitle: (
    <>
      <span className="hidden md:inline">
        {`Here, you'll find a clear breakdown of our service plans and their respective features. Whether you're a small
        business or a large enterprise, we have options tailored to your needs.`}
      </span>{' '}
      You can choose the plan that best suits your goals!
    </>
  ),
  tagline: 'For small teams',
};

// Pricing data on Pricing page *******************
export const pricingPricing: PricingProps = {
  id: 'pricing-on-pricing',
  hasBackground: true,
  header: {
    title: 'Go Viral with Street Interviews. ',
    subtitle: (
      <>
        Cancel anytime and pricing which scales with you.{' '}
      </>
    ),
  },
  prices: [
    {
      title: 'Start',
      subtitle: 'For small teams',
      price: '5k',
      period: 'per month',
      items: [
        {
          description: '20 Video Interviews (30-60 seconds)',
        },
        {
          description: 'Properly Edited',
        },
        {
          description: 'Select your own Questions',
        },
        {
          description: 'Select your own Target Audience',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Contact us',
        href: '/contact',
      },
      hasRibbon: false,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Medium',
      subtitle: 'Everything in Free, plus...',
      price: '10k',
      period: 'per month',
      items: [
        {
          description: '40 Video Interviews (30-60 seconds)',
        },
        {
          description: 'Edited for you',
        },
        {
          description: 'Select your own Questions',
        },
        {
          description: 'Select your own Target Audience',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Contact us',
        href: '/contact',
      },
      hasRibbon: true,
      ribbonTitle: 'Popular',
    },
    {
      title: 'Standard',
      subtitle: 'Everything in Hobby, plus...',
      price: '20k',
      period: 'per month',
      items: [
        {
          description: '100 Videos per month',
        },
        {
          description: 'Edited for you',
        },
        {
          description: 'Select your own Questions',
        },
        {
          description: 'Select your target Audience',
        },
      ],
      callToAction: {
        targetBlank: true,
        text: 'Contact us',
        href: '/contact',
      },
      hasRibbon: false,
      ribbonTitle: 'Popular',
    },
  ],
};

// Comparison pricing data on Pricing page *******************
export const comparisonPricing: ComparisonProps = {
  id: 'comparison-on-pricing',
  hasBackground: false,
  header: {
    title: "What's available for each plan?",
    subtitle:
      'Morbi ut imperdiet ex. Nullam sed tincidunt purus. Donec finibus dui at odio dictum facilisis. Maecenas ut orci quis nisi congue maximus. Sed quis augue sapien.',
    // tagline: 'Comparison',
  },
  columns: [
    {
      title: 'compare plans',
      items: [
        {
          title: 'In vitae finibus',
        },
        {
          title: 'Cras sollicitudin',
        },
        {
          title: 'Suspendisse',
        },
        {
          title: 'Vestibulum ornare',
        },
        {
          title: 'In hendrerit',
        },
        {
          title: 'Ut pharetra',
        },
      ],
    },
    {
      title: 'basic',
      items: [
        {
          title: 'Free 7-day trial',
        },
        {
          title: 'Limited',
        },
        {
          title: '$29',
        },
        {
          title: false,
        },
        {
          title: false,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'standard',
      items: [
        {
          title: 'Free 15-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$69',
        },
        {
          title: false,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
    {
      title: 'premium',
      items: [
        {
          title: 'Free 30-day trial',
        },
        {
          title: 'Unlimited',
        },
        {
          title: '$199',
        },
        {
          title: true,
        },
        {
          title: true,
        },
        {
          title: true,
        },
      ],
      callToAction: {
        text: 'Get started',
        href: '/',
      },
    },
  ],
};

// FAQS3 data on Pricing page *******************
export const faqs3Pricing: FAQsProps = {
  id: 'faqsThree-on-pricing',
  hasBackground: true,
  header: {
    title: 'Pricing FAQs',
    subtitle: 'Do you have other questions?',
    // tagline: 'FAQS',
    position: 'left',
  },
  items: [
    {
      title: 'Which plan is best for me?',
      description: `Nunc mollis tempor quam, non fringilla elit sagittis in. Nullam vitae consectetur mi, a elementum arcu. Sed laoreet, ipsum et vehicula dignissim, leo orci pretium sem, ac condimentum tellus est quis ligula.`,
    },
    {
      title: 'What are my payment options?',
      description: `Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer eleifend vestibulum nisl in iaculis. Mauris dictum ac purus vestibulum auctor. Praesent imperdiet lectus et massa faucibus, quis viverra massa rhoncus.`,
    },
    {
      title: 'How do I change my plan to a different one?',
      description: `Mauris vitae eros a dui varius luctus. Suspendisse rutrum, sapien nec blandit bibendum, justo sapien sollicitudin erat, id aliquam sapien purus quis leo. Aliquam vulputate vestibulum consectetur.`,
    },
    {
      title: 'What happen at the end of my free trial?',
      description: `Nunc dapibus lacinia ipsum ut elementum. Integer in pretium sapien. Ut pretium nisl mauris, ut rutrum justo condimentum id. Etiam aliquet, arcu at iaculis laoreet, est arcu egestas sapien, eget sollicitudin odio orci et nunc.`,
    },
    {
      title: 'Can I import data from other tools?',
      description: `Duis in maximus mauris, id eleifend mauris. Nam a fringilla arcu. Curabitur convallis, tellus non aliquet rhoncus, lacus massa auctor eros, in interdum lectus augue sed augue. Fusce tempor ex id faucibus efficitur.`,
    },
    {
      title: 'Can I cancel my plan at any time?',
      description: `Nullam imperdiet sapien tincidunt erat dapibus faucibus. Vestibulum a sem nec lorem imperdiet scelerisque non sed lacus. Ut pulvinar id diam vitae auctor. Nam tempus, neque et elementum consectetur, ex ipsum pulvinar risus, vel sodales ligula tortor eu eros.`,
    },
  ],
  callToAction: {
    text: 'Contact us',
    href: '/contact',
  },
};
