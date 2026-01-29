import { ConfettiBurst } from "../confetti/ConfettiBurst";
import { FeedPostData } from "@/data/feed";
import FeedPost from "./FeedPost";

export default function YourSubmissionPost({post}: {post:FeedPostData}) {
  return (
    <div className="rounded-2xl overflow-hidden">
    <div
      className="
        relative
        w-full
        py-4
        flex
        items-center
        justify-center
        rounded-t-2xl
        overflow-hidden
        bg-[#E9F7EE]
        top-3
        text-sm
        font-semibold
      "
    >
      <ConfettiBurst />

      <span className="relative z-10 text-[#1E7F4F]">Your Submission</span>
      </div>
      <FeedPost post={post} />
      </div>
  );
}
