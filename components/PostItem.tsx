import Link from 'next/link';
import React from 'react';

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

type Props = {
  post: Post;
};

const PostItem: React.FC<Props> = ({ post }) => {
  return (
    <div>
      <span>{post.id}</span>:
      <span className='cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200'>
        <Link href={`/posts/${post.id}`}>
          <span className='cursor-pointer text-blue-500 border-b border-blue-500 hover:bg-gray-200'>
            {post.title}
          </span>
        </Link>
      </span>
    </div>
  );
};

export default PostItem;
