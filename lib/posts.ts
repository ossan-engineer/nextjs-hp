import fetch from 'node-fetch';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const getAllPostData = async () => {
  // const res = await fetch(new URL(API_URL));
  const res = await fetch(API_URL);
  const posts = await res.json();
  return posts;
};
