import * as React from 'react';

import Seo from '@/components/Seo';

export default function Blog() {
  return (
    <>
      <Seo templateTitle='Blog' />

      <main>

        <section className=''>
          <div className='layout py-20 min-h-screen'>
            I am a Blog
          </div>
        </section>
      </main>
    </>
  )
}