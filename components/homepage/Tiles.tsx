import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePost } from '../../context/PostContext';

type Props = {};

const Tiles = (props: Props) => {
  const data = usePost();

  console.log(Object.values(data));
  return (
    <>
      <div className='cards-containers'>
        <Link href='#'>
          <a className='anchor-container'>
            <div className='card-container card-box-shadow'>
              <div className='image-container'>
                <div className='image-scale'>
                  <Image
                    src='https://images.unsplash.com/photo-1624239364354-93ae3e590f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80'
                    height='215'
                    width='313'
                  ></Image>
                </div>
                <div className='green-animated-border'></div>
              </div>
              <div className='card-texts'>
                <Link href='#'>
                  <a className='card-category-container'>
                    <span className='card-category'>
                      {Object.values(data)[1].category}
                    </span>
                  </a>
                </Link>
                <span className='card-title'>
                  {Object.values(data)[6].title}
                </span>
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
            </div>
          </a>
        </Link>
        <Link href='#'>
          <a className='anchor-container'>
            <div className='card-container'>
              <div className='image-container'>
                <div className='image-scale'>
                  <Image
                    src='https://images.unsplash.com/photo-1624239364354-93ae3e590f66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&q=80'
                    layout='fill'
                    objectFit='cover'
                  ></Image>
                </div>
                <div className='green-animated-border'></div>
              </div>
              <div className='card-texts second-background'>
                <Link href='#'>
                  <a className='card-category-container'>
                    <span className='card-category second-texts'>
                      {Object.values(data)[1].category}
                    </span>
                  </a>
                </Link>
                <span className='card-title second-texts'>
                  {Object.values(data)[6].title}
                </span>
                <span className='readmore second-texts'>
                  <div className='icon-container'>
                    <Image
                      src='/assets/bars-black.svg'
                      layout='fill'
                      className='icon-svg'
                    ></Image>
                  </div>
                  Read
                </span>
              </div>
            </div>
          </a>
        </Link>
      </div>
      <style jsx>{`
        .cards-containers {
          display: flex;
          justify-content: space-between;
          margin-bottom: 60px;
        }
        .anchor-container {
          text-decoration: none;
        }
        .card-container {
          margin-top: 40px;
          width: 313px;
        }
        .card-box-shadow {
          box-shadow: 4px 4px 0 0 var(--main-color);
        }
        .card-texts {
          padding: 15px 18px;
          display: flex;
          flex-direction: column;
        }
        .second-background {
          background-color: #fff;
        }
        .card-category-container {
          margin-bottom: 12px;
          text-decoration: none;
        }
        .card-category {
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.5;
          text-transform: uppercase;
          font-family: 'Century Gothic', sans-serif;
        }
        .card-category:hover {
          text-decoration: underline;
        }
        .card-title {
          color: #fff;
          display: block;
          line-height: 1.273;
          font-size: 22px;
          font-weight: 700;
        }
        .second-texts {
          color: #000 !important;
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
          margin-top: 20px;
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
        .image-container {
          position: relative;
          display: flex;
          flex-direction: column;
          height: 215px;
          width: 313px;
          overflow: hidden;
        }
        .image-scale {
          transition: transform 0.5s ease;
          height: 215px;
          width: 313px;
          overflow: hidden;
        }
        .card-container:hover .image-scale {
          transform: scale(1.1);
        }
        .green-animated-border {
          box-shadow: none;
          position: absolute;
          width: 100%;
          height: 100%;
          bottom: 0;
          left: 0;
        }
        .card-container:hover .green-animated-border {
          animation-name: green-border;
          animation-duration: 0.2s;
          box-shadow: inset 0 -5px 0 0 var(--main-color);
        }

        @keyframes green-border {
          from {
            box-shadow: none;
          }

          to {
            box-shadow: inset 0 -5px 0 0 var(--main-color);
          }
        }
      `}</style>
    </>
  );
};

export default Tiles;
