import React from 'react';

type Props = {};

const VideoBackground = (props: Props) => {
  return (
    <>
      <div className='video-background'>
        <video muted autoPlay loop>
          <source src='/videos/Saint_Barthelemy.mov' type='video/mp4' />
        </video>
        <div className='shadow-image'></div>
      </div>
      <style jsx>{`
        .video-background {
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .video-background video {
          width: 100%;
          height: 1000px;
          background-color: var(--black);
        }
        .shadow-image {
          box-shadow: inset 0 -100000400px 100000000px -100000000px black;
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          left: 0;
        }
      `}</style>
    </>
  );
};

export default VideoBackground;
