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
          <h2>Lastest Movies</h2>
        </div>
        <section className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </section>
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${NEXT_PUBLIC_API_URL}/api/movies?populate=*`);
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
