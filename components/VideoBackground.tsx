import React from 'react';

type Props = {};

const VideoBackground = (props: Props) => {
  return (
    <>
      <div className='video-background'>
        <video muted autoPlay loop>
          <source src='/videos/Saint_Barthelemy.mov' type='video/mp4' />
        </video>
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
          height: 100%;
        }
      `}</style>
    </>
  );
};

export default VideoBackground;
