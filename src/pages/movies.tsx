import { useRouter } from 'next/router';
import * as React from 'react';

import Card from '@/components/Card';
import Seo from '@/components/Seo';

import { Movie } from '@/types/home';

interface MoviesPageProps {
  movies: Movie[];
  error: {
    message: string;
  };
  page:
  {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  }
}
export default function MoviesPage({ movies, page }: MoviesPageProps) {
  const router = useRouter();
  return (
    <>
      <Seo templateTitle='Movies' />

      <div className='layout flex min-h-screen flex-col items-center'>
        <div className='mt-5 space-x-5'>
          <button onClick={() => router.push(`/movies?page=${page.pagination.page - 1}`)} className='border px-5 py-2'
          //disabled={page.pagination.page <= 1}
          >Prev</button>
          <button
            onClick={() => router.push(
              `/movies?page=${page.pagination.page + 1}`
            )}
            className='border px-5 py-2 '
          //disabled={page.pagination.page >= page.pagination.pageCount}
          >
            Next
          </button>
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
export const getServerSideProps = async ({ query: { page = 1 } }) => {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  const start = page === 1 ? 0 : (page - 1) * 3
  const res = await fetch(
    `${NEXT_PUBLIC_API_URL}/api/movies?populate=*&pagination[page]=${start}&pagination[pageSize]=4`
  );
  const data = await res.json();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      movies: data.data,
      page: data.meta,
    },
  };
};
