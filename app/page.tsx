import PageWrapper from '@/components/layout/PageWrapper';
import GlobalHeader from '@/components/layout/GlobalHeader';
import PageHeader from '@/components/layout/PageHeader';
import Sidebar from '@/components/sidebar/Sidebar';
import Feed from '@/components/feed/Feed';

import { challengeDays } from '@/data/challenge';
import { feedData } from '@/data/feed';

export default function Home() {
  return (
    <PageWrapper>
      <GlobalHeader />
      <PageHeader />
        <div className="flex flex-row justify-between">
            <Sidebar days={challengeDays} />
            <Feed posts={feedData} />
        </div>
    </PageWrapper>
  );
}
