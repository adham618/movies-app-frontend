import Link from 'next/link';
import { useRouter } from 'next/router';
import * as React from 'react';

import UnstyledLink from '@/components/links/UnstyledLink';

import NextImage from '../NextImage';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
  { href: '/paid-articles', label: 'Paid Articles' },
];

export default function Header() {
  const router = useRouter();
  return (
    <header className='sticky top-0 z-50 overflow-hidden bg-gray-200 shadow-slate-100'>
      <div className='layout flex h-14 items-center justify-between'>
        <Link href='/' passHref>
          <div className='flex cursor-pointer'>
            <NextImage
              src='/svg/logo.svg'
              width={25}
              height={25}
              alt='site-logo'
              draggable='false'
            />
            <span className='font-bold'>Movies</span>
          </div>
        </Link>
        <nav>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink href={href} className='hover:text-gray-600'>
                  <p
                    className={router.pathname === href ? 'text-blue-500' : ''}
                  >
                    {' '}
                    {label}
                  </p>
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
