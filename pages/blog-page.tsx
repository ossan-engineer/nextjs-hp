import Layout from '../components/Layout';
import PostItem from '../components/PostItem';
import type { Post } from '../components/PostItem';
import { getAllPostData } from '../lib/posts';

type Props = {
  posts: Post[];
};

const Blog: React.FC<Props> = ({ posts }) => {
  return (
    <Layout title='Blog'>
      <ul className='m-10'>
        {posts &&
          posts.map((post) => <PostItem key={post.id} post={post}></PostItem>)}
      </ul>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const posts = await getAllPostData();
  return {
    props: { posts },
  };
};

export default Blog;
