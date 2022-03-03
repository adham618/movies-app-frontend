/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import * as React from 'react';

type CardProps = {
  movie: {
    id: number;
    attributes: {
      title: string;
      description: string;
      uid: string;
      poster: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
  };
};

export default function Card({ movie }: CardProps) {
  const NEXT_PUBLIC_API_URL = process.env.NEXT_PUBLIC_API_URL;
  return (
    <div className='w-md relative mt-5 mb-5 h-auto rounded-2xl border shadow-xl'>
      <Link
        href='/movies/[uid]'
        as={`/movies/${movie.attributes.uid}`}
        passHref
      >
        {movie.attributes.poster.data.attributes.url && (
          <div className='cursor-pointer'>
            <img
              className='h-64 w-full rounded-t-2xl'
              loading='lazy'
              src={
                NEXT_PUBLIC_API_URL +
                movie.attributes.poster.data.attributes.url
              }
              alt='card-img'
            />
          </div>
        )}
      </Link>
      <div className='p-3'>
        <h3 className='mb-2'>{movie.attributes.title}</h3>
        <p className='mb-5 text-xs leading-7 text-gray-700'>
          {movie.attributes.description.substring(0, 70)}.....
        </p>
        <Link href='/movies/[uid]' as={`/movies/${movie.attributes.uid}`}>
          <a className='absolute bottom-2'>Watch Now</a>
        </Link>
      </div>
    </div>
  );
}
