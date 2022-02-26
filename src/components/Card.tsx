/* eslint-disable @next/next/no-img-element */
import * as React from 'react';


type CardProps = {
  movie: {
    attributes: {
      title: string,
      description: string;
      poster: {
        data: {
          attributes: {
            url: string
          }
        }
      }
    },
  }
}

export default function Card({ movie }: CardProps) {
  const API_URL = process.env.API_URL
  return (
    <div className='max-w-md border rounded-2xl mt-5 shadow-xl'>
      <div>
        <img className="rounded-t-2xl w-full" src={API_URL + movie.attributes.poster.data.attributes.url} alt="card-img" />
      </div>
      <div className="p-5">
        <h3 className='mb-5'>{movie.attributes.title}</h3>
        <p className='text-gray-700 leading-7'>{movie.attributes.description}</p>
      </div>
    </div>
  )
}
