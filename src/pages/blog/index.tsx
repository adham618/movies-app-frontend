import * as React from 'react';

import Seo from '@/components/Seo';

export default function Blog() {
  return (
    <>
      <Seo templateTitle='Blog' />

      <main>
        <section className=''>
          <div className='layout min-h-screen py-20'>I am a Blog</div>
        </section>
      </main>
    </>
  );
}
