import React from 'react';
import Link from 'next/link';
import VideoBackground from './VideoBackground';
import Carousel from './Carousel';

type Props = {};

const Streaming = (props: Props) => {
  return (
    <>
      <div className='video-background'>
        <VideoBackground />
        <div className='video-content'>
          <section className='text-container'>
            <p className='video-content-title'>Integer sit amet luctus.</p>
            <div className='video-content-subheading'>
              Duis facilisis quis urna eu vulputate. Vestibulum consequat, lacus
              ut suscipit accumsan, est sem pharetra urna, in blandit risus nibh
              a est. Curabitur bibendum turpis eu nisl auctor luctus. Donec nisi
              ante, sollicitudin a lacus at, tristique efficitur leo. Phasellus
              eu vulputate neque, nec vulputate lorem. Pellentesque auctor nisi
              eget.
            </div>
            <Link href='#'>
              <a className='anchor-container video-content-anchor-container'>
                <span className='anchor-text video-content-anchor-text'>
                  Morbi pulvinar sapien+
                </span>
                <div className='anchor-underline'></div>
              </a>
            </Link>
          </section>
          <section className='carousel-container'>
            <Link href='#'>
              <a className='carousel-heading-links'>
                <h3 className='carousel-title-link'>
                  Fusce felis neque, elementum+
                </h3>
                <div className='anchor-container'>
                  <span className='carousel-anchor-see-shows anchor-text'>
                    Cras leo
                  </span>
                  <div className='anchor-underline'></div>
                </div>
              </a>
            </Link>
            <Carousel />
          </section>
        </div>
      </div>
      <style jsx>{`
        .video-background {
          position: relative;
          display: flex;
          flex-direction: columns;
          justify-content: center;
        }
        .video-content {
          position: absolute;
          bottom: 0;
          text-align: center;
          padding: 40px 60px;
        }
        .text-container {
          padding: 0 40px 70px 40px;
        }
        .video-content-title {
          margin-bottom: 35px;
          margin-top: 90px;
          color: #fff;
          font-family: 'Century Gothic', sans-serif;
          font-size: 22px;
          font-weight: 700;
          line-height: 1.273;
          text-transform: uppercase;
          letter-spacing: 3px;
        }
        .video-content-subheading {
          font-size: 18px;
          line-height: 1.5;
          margin: 0 auto 24px auto;
          color: #fff;
          max-width: 728px;
        }
        .anchor-container:hover > .anchor-underline {
          height: 19px;
          animation-name: slideup;
          animation-duration: 0.2s;
        }
        .anchor-container {
          text-decoration: none;
          position: relative;
          display: flex;
        }

        @keyframes slideup {
          from {
            height: 2px;
          }

          to {
            height: 19px;
          }
        }
        .anchor-text {
          z-index: 100;
          color: var(--white);
        }
        .anchor-text:hover {
          color: #000;
        }
        .anchor-underline {
          position: absolute;
          bottom: 0;
          z-index: 50;
          height: 2px;
          width: 100%;
          background-color: var(--main-color);
        }
        .video-content-anchor-container {
          display: table;
          margin: auto;
        }
        .video-content-anchor-text {
          position: relative;
          line-height: 1.429;
          text-transform: uppercase;
          font-size: 14px;
          letter-spacing: 3px;
          font-weight: 700;
        }
        .carousel-container {
          padding: 25px 0 40px 0;
        }
        .carousel-heading-links {
          text-decoration: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
        }
        .carousel-title-link {
          color: var(--white);
          margin: 0;
          font-family: 'Century Gothic', sans-serif;
          font-size: 18px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.5;
          text-transform: uppercase;
        }

        .carousel-anchor-see-shows {
          color: var(--white);
          font-family: 'Century Gothic', sans-serif;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.5;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
};

export default Streaming;
