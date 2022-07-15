import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePost } from '../../context/PostContext';

type Props = {};

const Today = (props: Props) => {
  const data = usePost();

  return (
    <>
      <div>
        {' '}
        <div className='picks-header'>
          <div className='vertical-green-bar'></div>
          <h2 className='main-title'>Today's Picks</h2>
        </div>
        {Object.values(data).map((item, index) => {
          if (index > 5) return;
          return (
            <div className='card-container' key={item.id}>
              <Link href='#'>
                <a
                  className='anchor-tag img-margin'
                  style={{
                    width: '90px',
                    height: '90px',
                    position: 'relative',
                  }}
                >
                  <Image
                    src={`${item.photos[0]}`}
                    alt="Basilica di Sant'Andrea, Piazza Andrea Mantegna, Mantua, Province of Mantua, Italy"
                    layout='fill'
                  />
                </a>
              </Link>
              <div className='text-container'>
                <Link href='#'>
                  <a className='anchor-tag anchor-tag-padding'>
                    <span className='category-span'>{item.category || ''}</span>
                  </a>
                </Link>
                <Link href='#'>
                  <a className='anchor-tag'>
                    <span className='title-span'>{item.title || ''}</span>
                  </a>
                </Link>
              </div>
            </div>
          );
        })}
        <Link href='#'>
          <a className='anchor-container seemore-container'>
            <span className='anchor-text seemore'>See More</span>
            <div className='anchor-underline-seemore'></div>
          </a>
        </Link>
        <style jsx>{`
          .main-title {
            font-family: 'Century Gothic', sans-serif;
            font-size: 32px;
            letter-spacing: 3px;
            margin: 0;
            margin-bottom: 32px;
            color: #fff;
            text-transform: uppercase;
          }
          .card-container {
            display: flex;
            width: 313px;
            margin-bottom: 30px;
          }
          .text-container {
            display: flex;
            flex-direction: column;
            width: 203px;
          }
          .category-span {
            font-family: 'Century Gothic', sans-serif;
            font-size: 12px;
            letter-spacing: 1px;
            font-weight: 700;
            line-height: 1.5;
            letter-spacing: 3px;
            text-transform: uppercase;
            color: #fff;
          }
          .title-span {
            font-size: 16px;
            font-weight: 700;
            line-height: 1.5;
            color: #fff;
          }
          .img-margin {
            margin-right: 20px;
          }
          .anchor-tag {
            color: #fff;
            text-decoration: none;
          }
          .anchor-tag-padding {
            padding-bottom: 4px;
          }
          .anchor-container {
            text-decoration: none;
            position: relative;
            display: flex;
          }
          .anchor-text {
            z-index: 100;
            color: #fff;
          }
          .anchor-container:hover > .anchor-underline-seemore {
            height: 16px;
            animation-name: slideup2;
            animation-duration: 0.2s;
          }

          @keyframes slideup2 {
            from {
              height: 2.5px;
            }

            to {
              height: 16px;
            }
          }

          .anchor-underline-seemore {
            position: absolute;
            bottom: 0;
            z-index: 50;
            height: 2.5px;
            width: 100%;
            background-color: var(--main-color);
          }
          .green-bar {
            width: 60px;
            height: 4px;
            background-color: var(--main-color);
            margin: auto;
          }
          .vertical-green-bar {
            width: 5px;
            height: 24px;
            background-color: var(--main-color);
            margin: 6px 20px 8px 0px;
          }
          .picks-header {
            display: flex;
          }
          .seemore {
            position: relative;
            font-family: 'Century Gothic', sans-serif;
            font-weight: 700;
            font-size: 12px;
            letter-spacing: 3px;
            text-transform: uppercase;
            text-decoration: none;
            color: #fff;
            margin-top: 10px;
          }
          .seemore:hover {
            color: #000;
          }
          .seemore-container {
            display: table;
            padding-top: 10px;
          }
        `}</style>
      </div>
    </>
  );
};

export default Today;
