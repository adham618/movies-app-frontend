import * as React from 'react';

import Seo from '@/components/Seo';

export default function AboutPage() {
  return (
    <>
      <Seo templateTitle='About' />

      <main>
        <section className=''>
          <div className='layout py-20 min-h-screen'>I am about page</div>
        </section>
      </main>
    </>
  );
}
