/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
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
    <div className='max-w-md border rounded-2xl mt-5 shadow-xl mb-5 relative h-auto'>
      <div className='relative rounded-t-2xl w-full h-64'>
        <Image
          layout='fill'
          className='rounded-t-2xl  w-full h-64'
          priority
          src={
            NEXT_PUBLIC_API_URL + movie.attributes.poster.data.attributes.url
          }
          alt='card-img'
        />
      </div>
      <div className='p-3'>
        <h3 className='mb-2'>{movie.attributes.title}</h3>
        <p className='text-gray-700 text-xs mb-5 leading-7'>
          {movie.attributes.description.substring(0, 70)}.....
        </p>
        <Link href='/movies/[uid]' as={`/movies/${movie.attributes.uid}`}>
          <a className='absolute bottom-2'>Watch Now</a>
        </Link>
      </div>
    </div>
  );
}
