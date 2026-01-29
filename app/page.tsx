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
        <div className="flex flex-col lg:flex-row justify-between w-full mx-auto gap-4 lg:gap-8">
            <Sidebar days={challengeDays} />
            <div className="flex flex-col w-full min-w-0 h-[calc(100dvh-100px)] overflow-y-auto">
                
                <Feed posts={feedData} />
            </div>
        </div>
    </PageWrapper>
  );
}
