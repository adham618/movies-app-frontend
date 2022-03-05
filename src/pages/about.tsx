import { GetStaticProps } from 'next';
import * as React from 'react';

import Seo from '@/components/Seo';
interface AboutPageProps {
  about: {
    attributes: {
      title: string;
      content: string;
    };
  };
}
export default function AboutPage({ about }: AboutPageProps) {
  return (
    <>
      <Seo
        templateTitle='About'
        description={about.attributes.content.substring(0, 200) + '...'}
      />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-6'>
            <h1 className='mb-3 text-lg font-bold'>{about.attributes.title}</h1>
            <p>{about.attributes.content}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/pages/1`);
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { about: data.data },
  };
};
