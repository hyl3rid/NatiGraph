import React from 'react';
import Image from 'next/image';

type Props = {};

const SignUp = (props: Props) => {
  return (
    <>
      <section className='image-container'>
        <Image
          src='https://images.unsplash.com/photo-1572594417697-0764e4e7ee1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
          layout='fill'
          objectFit='cover'
          objectPosition='100% 25%'
        />
        <div className='signup-text-container'>
          <h3 className='signup-heading'>
            Mauris placerat eros commodo ligula posuere, ultrices tempor.
          </h3>
          <p className='signup-subheading'>
            Quisque id facilisis nunc. Sed molestie enim metus, at malesuada
            augue ultrices sed.
          </p>
          <button className='signup'>
            <span>Donec ac</span>
            <div className='button-label-green'></div>
          </button>
        </div>
      </section>
      <style jsx>{`
        .image-container {
          width: 100%;
          height: 300px;
          position: relative;
          overflow: hidden;
          top: 0;
        }
        .signup-text-container {
          position: absolute;
          width: 100%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
          color: var(--white);
        }
        .signup-heading {
          font-size: 32px;
          font-family: 'Century Gothic', sans-serif;
          font-weight: 700;
          margin: 15px 0;
          letter-spacing: 3px;
          line-height: 1.25;
        }
        .signup-subheading {
          line-height: 1.39;
          font-size: 18px;
          font-weight: 700;
        }
        .signup {
          background-color: var(--white);
          border: none;
          color: var(--black);
          position: relative;
          overflow: hidden;
          font-size: 14px;
          font-family: 'Century Gothic', sans-serif;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.429;
          text-transform: uppercase;
          height: 58px;
          width: 418px;
          z-index: 100;
        }
        .button-label-green {
          background-color: var(--main-color);
          position: absolute;
          height: 58px;
          width: 418px;
          top: 0;
          left: 0;
          animation-name: slidesidein;
          animation-duration: 0.2s;
          z-index: -10;
        }

        .signup:hover .button-label-green {
          animation-name: slideside;
          animation-duration: 0.2s;
          left: 100%;
        }

        @keyframes slideside {
          from {
            left: 0;
          }

          to {
            left: 100%;
          }
        }

        @keyframes slidesidein {
          from {
            left: 100%;
          }

          to {
            left: 0;
          }
        }
      `}</style>
    </>
  );
};

export default SignUp;
