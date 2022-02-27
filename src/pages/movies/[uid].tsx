import { GetServerSidePropsContext } from 'next';
import * as React from 'react';

import Seo from '@/components/Seo';



interface MoviePageProps {
  movie: {
    attributes: {
      title: string,
      description: string;
      uid: string,
    },
  }
}

export default function MoviePage({ movie }: MoviePageProps) {
  return (
    <>
      <Seo templateTitle={movie.attributes.title} description={movie.attributes.description.substring(0, 80)} />


      <main className='layout py-20 min-h-screen'>
        <h1 className='font-bold mb-5'>{movie.attributes.title}</h1>
        <p className='leading-7'>{movie.attributes.description}</p>
      </main>
    </>
  )
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const { uid } = context.query
  const API_URL = process.env.API_URL
  const res = await fetch(`${API_URL}/api/movies?filters[uid][$eq]=${uid}`)
  const data = await res.json()
  if (!data) {
    return {
      notFound: true,
    }
  }
  return {
    props: { movie: data.data[0] }
  }
}