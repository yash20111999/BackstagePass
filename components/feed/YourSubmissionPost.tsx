import { ConfettiBurst } from "../confetti/ConfettiBurst";
import { FeedPostData } from "@/data/feed";
import FeedPost from "./FeedPost";

export default function YourSubmissionPost({ post }: { post: FeedPostData }) {
  return (
    <div className="rounded-2xl overflow-hidden mb-4 mt-3 relative">
      <div
        className="
        relative
        w-full
        py-5
        flex
        justify-center
        rounded-t-2xl
        overflow-hidden
        bg-[var(--bg-success)]
        text-sm
        font-semibold
      "
      >
        <ConfettiBurst />
        <span className="relative z-10 mb-2 text-[var(--accent-success)]">Your Submission</span>
      </div>
      <div className="-mt-3 relative z-10">
        <FeedPost post={post} />
      </div>

    </div>
  );
}
