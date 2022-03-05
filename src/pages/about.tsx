import { GetStaticPropsContext } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import Seo from '@/components/Seo';
interface AboutPageProps {
  about: {
    attributes: {
      title: string;
      content: string;
      locale: string;
    };
  };
}
export default function AboutPage({ about }: AboutPageProps) {
  const router = useRouter();
  return (
    <>
      <Seo
        templateTitle='About'
        description={about.attributes.content.substring(0, 200) + '...'}
      />
      <main dir={about.attributes.locale === 'ar' ? 'rtl' : 'ltr'}>
        <section className=''>
          <div className='layout min-h-screen py-6'>
            <Link href='/about' locale='ar'>
              <a className='mb-2 block w-28 border-2 text-center ltr:text-red-500'>
                To /ar/about With Link
              </a>
            </Link>
            <div
              className='w-28 cursor-pointer border-2 text-center'
              onClick={() => {
                router.push('/about', '/about', { locale: 'en' });
              }}
            >
              to /en/about With Div
            </div>
            <h1 className='mb-3 text-lg font-bold'>{about.attributes.title}</h1>
            <p>{about.attributes.content}</p>
          </div>
        </section>
      </main>
    </>
  );
}

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let trans: any = undefined || {};
  const locale = context.locale;

  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/about-page`);
  const data = await res.json();
  if (locale === 'ar') {
    const transres = await fetch(
      `${NEXT_PUBLIC_API_URL}/api/about-page?locale=ar`
    );
    trans = await transres.json();
  }
  return {
    props: {
      about: trans.data ? trans.data : data.data,
    },
    revalidate: 1,
  };
};
