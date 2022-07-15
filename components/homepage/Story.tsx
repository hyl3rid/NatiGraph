import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePost } from '../../context/PostContext';

type Props = {};

const Story = (props: Props) => {
  const data = usePost();

  return (
    <>
      <Link href='#'>
        <a>
          <div className='image-container'>
            <div className='image-scale'>
              <Image
                src={`${Object.values(data)[6].photos[0]}`}
                alt='Vintage portrait photography collection'
                layout='fill'
                objectFit='cover'
              ></Image>
            </div>
            <div className='text-container'>
              <Link href='#'>
                <a className='main-category-anchor'>
                  <span className='main-category'>
                    {Object.values(data)[6].category}
                  </span>
                </a>
              </Link>
              <span className='main-title'>{Object.values(data)[6].title}</span>
              <span className='readmore'>
                <div className='icon-container'>
                  <Image
                    src='/assets/bars.svg'
                    layout='fill'
                    className='icon-svg'
                  ></Image>
                </div>
                Read
              </span>
            </div>
            <div className='shadow-image'></div>
          </div>
        </a>
      </Link>
      <style jsx>{`
        .image-container {
          width: 666px;
          height: 423px;
          position: relative;
          padding: 20px;
          overflow: hidden;
        }
        .shadow-image {
          box-shadow: inset 0 -200px 200px -200px black;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
        .image-scale {
          transition: transform 0.5s ease;
          width: 666px;
          height: 423px;
          overflow: hidden;
        }
        .image-container:hover .image-scale {
          transform: scale(1.1);
        }
        .text-container {
          position: absolute;
          bottom: 20px;
          z-index: 100;
        }
        .main-title {
          font-size: 38px;
          font-weight: 700;
          line-height: 1.211;
          color: #fff;
        }
        .main-category-anchor {
          text-decoration: none;
        }
        .main-category {
          font-family: 'Century Gothic', sans-serif;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 3px;
          line-height: 1.5;
          color: #fff;
          font-weight: 700;
          margin-bottom: 5px;
          display: block;
        }
        .main-category:hover {
          text-decoration: underline;
        }
        .readmore {
          display: flex;
          color: #fff;
          font-family: 'Century Gothic', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.5;
          text-transform: uppercase;
          margin-top: 18px;
          height: 32px;
          align-items: center;
        }
        .icon-container {
          height: 18px;
          width: 18px;
          position: relative;
          margin-right: 6px;
        }
        .icon-svg {
          background-color: #fff;
        }
      `}</style>
    </>
  );
};

export default Story;
