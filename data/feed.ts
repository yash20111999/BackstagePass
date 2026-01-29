export interface FeedPostData {
  id: string;
  author: string;
  avatarUrl: string;
  content: string;
  likes: number;
  comments: number;
  createdAt: string;
  isPinned: boolean;
  mediaUrl?: string;
  items?: Array<{ number: number; text: string }>;
}

export const feedData: FeedPostData[] = [
  {
    id: '2',
    author: 'Ashraf Idrishi',
    avatarUrl: 'https://i.pravatar.cc/40?u=ashraf',
    content: "Today's challenge workout completed—feeling stronger already",
    likes: 18,
    comments: 10,
    createdAt: '2h ago',
    isPinned: false,
    mediaUrl: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&h=600&fit=crop',
  },
  {
    id: '1',
    author: 'Russell Brunson',
    avatarUrl: 'https://i.pravatar.cc/40?u=russell',
    content: 'This 9-day fitness challenge is designed to help you build consistency, boost energy, and feel stronger—one day at a time. Each day comes with a simple, achievable fitness task that fits easily into your routine, no matter your current fitness level.',
    likes: 18,
    comments: 10,
    createdAt: '3 hrs ago',
    isPinned: true,
    items: [
      { number: 1, text: 'Minimum 20 minutes of sit-up' },
      { number: 2, text: 'Mention Intensity' },
      { number: 3, text: 'Upload Media (Optional)' },
      { number: 4, text: 'Upload Media (Optional)' },
      { number: 5, text: 'Upload Media (Optional)' },
    ],
  },
  {
    id: '3',
    author: 'Sayantan Chandra',
    avatarUrl: 'https://i.pravatar.cc/40?u=sayantan',
    content: "Completed today's challenge workout, one step closer to my goal.",
    likes: 18,
    comments: 10,
    createdAt: '1h ago',
    isPinned: false,
  },
  {
    id: '4',
    author: 'Pappu Saha',
    avatarUrl: 'https://i.pravatar.cc/40?u=pappu',
    content: "Today's challenge workout completed—feeling stronger already",
    likes: 89,
    comments: 21,
    createdAt: '2 days ago',
    isPinned: false,
  },
];
