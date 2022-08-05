import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';

const Header: React.FC = () => {
  const router = useRouter();
  const isActive: (pathname: string) => boolean = (pathname) =>
    router.pathname === pathname;

  const { data: session, status } = useSession();

  let left = (
    <div className='left'>
      <Link href='/'>
        <div className='image-wrapper'>
          <Image
            alt='National Geographic Logo - Home'
            src='/assets/green-natgeo.svg'
            layout='fill'
          />
        </div>
      </Link>
      <style jsx>{`
        .image-wrapper {
          width: 24.7px;
          height: 32px;
          position: relative;
        }
      `}</style>
    </div>
  );

  let right = null;

  if (status === 'loading') {
    left = (
      <div className='left'>
        <Link href='/'>
          <a className='bold' data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className='right'>
        <p>Validating session ...</p>
        <style jsx>{`
          .right {
            margin-left: auto;
          }
        `}</style>
      </div>
    );
  }

  if (!session) {
    right = (
      <div className='right'>
        <Link href='/api/auth/test'>
          <a
            data-active={isActive('/signup')}
            className='login-button spacer-anchor'
          >
            LOGIN
          </a>
        </Link>
        <Link href='/api/auth/signin'>
          <a data-active={isActive('/signup')} className='anchor-search-icon'>
            <svg
              version='1.1'
              id='Capa_1'
              xmlns='http://www.w3.org/2000/svg'
              xmlnsXlink='http://www.w3.org/1999/xlink'
              x='0px'
              y='0px'
              className='search-icon'
              viewBox='0 0 52.966 52.966'
              style={{ background: 'transparent none repeat scroll 0% 0%' }}
              xmlSpace='preserve'
            >
              <path
                d='M51.704,51.273L36.845,35.82c3.79-3.801,6.138-9.041,6.138-14.82c0-11.58-9.42-21-21-21s-21,9.42-21,21s9.42,21,21,21
	c5.083,0,9.748-1.817,13.384-4.832l14.895,15.491c0.196,0.205,0.458,0.307,0.721,0.307c0.25,0,0.499-0.093,0.693-0.279
	C52.074,52.304,52.086,51.671,51.704,51.273z M21.983,40c-10.477,0-19-8.523-19-19s8.523-19,19-19s19,8.523,19,19
	S32.459,40,21.983,40z'
              />
            </svg>
          </a>
        </Link>
        <Link href='/api/auth/signin'>
          <a data-active={isActive('/signup')} className='renew-anchor'>
            <span className='renew-text'>Renew</span>
            <div className='renew-underline'></div>
          </a>
        </Link>
        <Link href='/api/auth/signin'>
          <a data-active={isActive('/signup')} className='subscribe-anchor'>
            <span className='subscribe-text'>SUBSCRIBE</span>
            <div className='subscribe-yellow-layer'></div>
            <div className='subscribe-black-layer'></div>
          </a>
        </Link>
        <Link href='/api/auth/signin'>
          <a
            data-active={isActive('/signup')}
            className='menu-anchor spacer-anchor'
          >
            <span>MENU</span>
            <svg
              className='double-chevron-down'
              // style={{width: '1em', height: '1em', vertical-align: 'middle', fill: 'currentColor',overflow: 'hidden'}}
              viewBox='0 0 1024 1024'
              version='1.1'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M707.84 238.506667 768 298.666667 512 554.666667 256 298.666667 316.16 238.506667 512 433.92 707.84 238.506667M707.84 494.506667 768 554.666667 512 810.666667 256 554.666667 316.16 494.506667 512 689.92 707.84 494.506667Z' />
            </svg>
          </a>
        </Link>
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
          }

          a:not(:last-child) {
            margin-right: 1rem;
          }

          .right {
            display: flex;
            align-items: center;
            margin-left: auto;
            background-color: var(--grey-light);
          }

          .right a {
            border: 1px solid var(--geist-foreground);
          }

          .login-button {
            font-family: 'Century Gothic', sans-serif;
            font-weight: 800;
            font-size: 14px;
            letter-spacing: 3px;
          }

          .login-button:hover {
            color: #555;
          }

          .spacer-anchor {
            margin-top: 8px;
            margin-bottom: 8px;
            padding: 0 8px;
          }

          .search-icon {
            height: 17px;
            width: 17px;
          }

          .search-icon:hover {
            fill: #555;
          }

          .anchor-search-icon {
            display: inline-flex;
            justify-content: center;
            align-items: center;
          }

          .anchor-search-icon:hover {
            color: #555;
          }

          .renew-anchor {
            font-family: 'Century Gothic', sans-serif;
            font-size: 14px;
            display: flex;
            flex-direction: column;
            position: relative;
          }

          .renew-anchor:hover > .renew-underline {
            height: 22px;
            animation-name: slideup;
            animation-duration: 0.2s;
          }

          @keyframes slideup {
            from {
              height: 2px;
            }

            to {
              height: 22px;
            }
          }

          .renew-text {
            z-index: 100;
          }

          .renew-underline {
            position: absolute;
            bottom: -3px;
            z-index: 50;
            height: 2px;
            width: 100%;
            background-color: var(--main-color);
          }

          .subscribe-anchor {
            font-family: 'Century Gothic', sans-serif;
            font-weight: 700;
            font-size: 12px;
            letter-spacing: 3px;
            padding: 0 20px;
            height: 47px;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
          }

          .subscribe-text {
            color: var(--white);
            z-index: 150;
          }

          .subscribe-black-layer {
            background-color: var(--black);
            height: 47px;
            width: 100%;
            z-index: 100;
            position: absolute;
          }

          .subscribe-yellow-layer {
            background-color: var(--main-color);
            height: 47px;
            width: 100%;
            z-index: 50;
            position: absolute;
          }

          .subscribe-anchor:hover > .subscribe-black-layer {
            left: 100%;
            animation-name: sideslideout;
            animation-duration: 0.4s;
          }

          @keyframes sideslideout {
            from {
              left: 0;
            }

            to {
              left: 100%;
            }
          }
          .subscribe-anchor > .subscribe-black-layer {
            left: 0;
            animation-name: sideslidein;
            animation-duration: 0.4s;
          }

          @keyframes sideslidein {
            from {
              left: 100%;
            }

            to {
              left: 0;
            }
          }

          .subscribe-anchor:hover > .subscribe-text {
            animation-name: colorfadein;
            animation-duration: 0.4s;
            color: #000;
          }

          @keyframes colorfadein {
            from {
              color: #fff;
            }

            to {
              color: #000;
            }
          }

          .subscribe-anchor > .subscribe-text {
            animation-name: colorfadeout;
            animation-duration: 0.4s;
            color: #fff;
          }

          @keyframes colorfadeout {
            from {
              color: #000;
            }

            to {
              color: #fff;
            }
          }

          .menu-anchor {
            font-family: 'Century Gothic', sans-serif;
            font-weight: 700;
            position: relative;
            display: flex;
            align-items: center;
            letter-spacing: 3px;
            font-size: 14px;
          }

          .menu-anchor:hover,
          .double-chevron-down:hover {
            color: #555;
            fill: #555;
          }

          .double-chevron-down {
            height: 20px;
            width: 20px;
            margin-left: 6px;
            margin-right: -6px;
            /* margin-top: 100px; */
          }
        `}</style>
      </div>
    );
  }

  if (session) {
    left = (
      <div className='left'>
        <Link href='/'>
          <a className='bold' data-active={isActive('/')}>
            Feed
          </a>
        </Link>
        <Link href='/drafts'>
          <a data-active={isActive('/drafts')}>My drafts</a>
        </Link>
        <style jsx>{`
          .bold {
            font-weight: bold;
          }

          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          .left a[data-active='true'] {
            color: gray;
          }

          a + a {
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
    right = (
      <div className='right'>
        <p>
          {session.user.name} ({session.user.email})
        </p>
        <Link href='/create'>
          <button>
            <a>New post</a>
          </button>
        </Link>
        <button onClick={() => signOut()}>
          <a>Log out</a>
        </button>
        <style jsx>{`
          a {
            text-decoration: none;
            color: var(--geist-foreground);
            display: inline-block;
          }

          p {
            display: inline-block;
            font-size: 13px;
            padding-right: 1rem;
          }

          a + a {
            margin-left: 1rem;
          }

          .right {
            margin-left: auto;
          }

          .right a {
            border: 1px solid var(--geist-foreground);
            padding: 0.5rem 1rem;
            border-radius: 3px;
          }

          button {
            border: none;
          }
        `}</style>
      </div>
    );
  }

  return (
    <nav>
      {left}
      {right}
      <style jsx>{`
        nav {
          display: flex;
          align-items: center;
          height: 49px;
          padding: 0 17px;
          background-color: #fff;
        }
      `}</style>
    </nav>
  );
};

export default Header;
