import Head from 'next/head';

const Home: React.FC = () => {
  return (
    <div className='min-h-screen py-0 px-2 flex flex-col justify-center items-center'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <h1>Hello Next.js</h1>

      {/* <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
