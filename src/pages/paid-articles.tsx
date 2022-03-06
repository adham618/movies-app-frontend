/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-console */
import * as React from 'react';

import Seo from '@/components/Seo';

interface PaidArticlesPageProps {
  articles: {
    id: number;
  };
  authData: any;
}

export default function PaidArticlesPage({
  articles,
  authData,
}: PaidArticlesPageProps) {
  console.log(articles, authData);
  return (
    <>
      <Seo templateTitle='Paid-articles' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-10'>
            <h1 className='text-lg font-bold'>Paid Articles</h1>
          </div>
        </section>
      </main>
    </>
  );
}
export const getServerSideProps = async () => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  // const loginInfo = {
  //   identifier: 'test@test.com',
  //   password: 'password',
  // };
  // const login = await fetch(`${NEXT_PUBLIC_API_URL}/auth/local`, {
  //   method: 'POST',
  //   headers: {
  //     // Accept: 'Application/json',
  //     Accept: 'application/json, text/plain, */*',
  //     'User-Agent': '*',
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(loginInfo),
  // });
  // const loginRes = await login.json();
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/paid-articles`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      articles: data.data,
      //authData: loginRes
    },
  };
};
