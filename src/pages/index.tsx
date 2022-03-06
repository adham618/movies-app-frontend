import Link from 'next/link';
import * as React from 'react';

import Card from '@/components/Card';
import Seo from '@/components/Seo';

import { Movie } from '@/types/home';

interface HomePageProps {
  movies: Movie[];
  error: {
    message: string;
  };
}

export default function HomePage({ movies, error }: HomePageProps) {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />
      <div className='layout flex min-h-screen flex-col items-center'>
        <div className='mt-5 font-bold'>
          <h1>Lastest Movies</h1>
        </div>
        <section className='grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </section>
        <div className='mb-7 border px-5 py-2'>
          <Link href='/movies' passHref>
            <button>All Movies</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const qs = require('qs');
  const query = qs.stringify(
    {
      pagination: {
        page: 1,
        pageSize: 4,
      },
    },
    {
      encodeValuesOnly: true,
    }
  );
  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/movies?populate=*&${query}&sort[0]=publishedAt%3Adesc`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { movies: data.data },
  };
};
