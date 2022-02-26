import * as React from 'react';

import Seo from '@/components/Seo';

export default function HomePage() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-white'>
          <div className='layout flex min-h-screen flex-col items-center justify-center text-center'></div>
        </section>
      </main>
    </>
  );
}
