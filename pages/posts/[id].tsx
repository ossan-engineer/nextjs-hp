import Link from 'next/link';

import Layout from 'components/Layout';
import { Post } from 'components/PostItem';
import { getAllPostIds, getPostData } from 'lib/posts';

type Props = {
  post?: Post;
};

const PostDetail: React.FC<Props> = ({ post }) => {
  return !post ? (
    <div>Loading...</div>
  ) : (
    <Layout title={post.title}>
      <p className='m-4'>ID: {post.id}</p>
      <p className='mb-8 text-xl font-bold'>{post.title}</p>
      <p className='px-10'>{post.body}</p>
      <Link href='/blog-page'>
        <div className='flex cursor-pointer mt-12'>
          <svg
            className='w-6 h-6 mr-3'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M11 19l-7-7 7-7m8 14l-7-7 7-7'
            ></path>
          </svg>
          <span>Back to blog-page</span>
        </div>
      </Link>
    </Layout>
  );
};

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }) => {
  const { post } = await getPostData(params.id);

  return {
    props: {
      post,
    },
  };
};

export default PostDetail;
