import { FastFundraiser } from '../../FastFundraiser/FastFundraiser';
import { ProgressBar } from '../../ProgressBar.jsx/ProgressBar';
import { AboutBrigade } from '../../AboutBrigade/AboutBrigade';
import { WhyItMatters } from '../../WhyItMatters/WhyItMatters';
import { HowItWorks } from '../../HowItWorks/HowItWorks';
import { SupportShare } from '../../SupportShare/SupportShare';
// import ThankYouModal from '../../ThankYouModal/ThankYouModal';

export const Content = () => {
  return (
    <main>
      <FastFundraiser />
      <ProgressBar />
      <AboutBrigade />
      <WhyItMatters />
      <HowItWorks />
      <SupportShare />
      {/* <ThankYouModal /> */}
    </main>
  );
};
