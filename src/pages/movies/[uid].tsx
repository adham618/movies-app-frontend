import { GetServerSidePropsContext } from 'next';
import * as React from 'react';
import ReactMarkdown from 'react-markdown';

import Seo from '@/components/Seo';

interface MoviePageProps {
  movie: {
    attributes: {
      title: string;
      description: string;
      uid: string;
    };
  };
}

export default function MoviePage({ movie }: MoviePageProps) {
  return (
    <>
      <Seo
        templateTitle={movie.attributes.title}
        description={`${movie.attributes.description.substring(0, 80)}...`}
      />

      <main className='layout min-h-screen py-20'>
        <h1 className='mb-5 font-bold'>{movie.attributes.title}</h1>
        <ReactMarkdown className='leading-7'>
          {movie.attributes.description}
        </ReactMarkdown>
      </main>
    </>
  );
}
export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const { uid } = context.query;
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/movies?filters[uid][$eq]=${uid}`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { movie: data.data[0] },
  };
};
