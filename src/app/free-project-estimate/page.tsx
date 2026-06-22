import type { Metadata } from 'next';
import ProjectEstimateCalculator from '@/components/pages/free-project-estimate/ProjectEstimateCalculator';

export const metadata: Metadata = {
  title: 'Free Project Estimate | AITC',
  description:
    'Get an instant, high-level estimate for your custom software project. Answer 3 quick questions about your technical requirements and complexity.',
};

const Page = () => {
  return (
    <main>
      <ProjectEstimateCalculator />
    </main>
  );
};

export default Page;
