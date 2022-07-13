import React from 'react';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Post, { PostProps } from '../components/Post';
import Today from '../components/Today';
import Story from '../components/Story';
import Tiles from '../components/Tiles';
import Streaming from '../components/Streaming';
import { usePost } from '../context/PostContext';

type Props = {
  feed: PostProps[];
};

const Blog: React.FC<Props> = () => {
  const data = usePost();
  console.log(data);
  return (
    <Layout>
      <div className='background'>
        <div className='margins-div'>
          <div className='principal-headings'>
            <h1 className='principal-title'>Latest Stories</h1>
            <span className='principal-subheading'>
              <Link href='#'>
                <a className='anchor-container'>
                  <span className='anchor-text'>Pellentesque</span>
                  <div className='anchor-underline anchor-bottom'></div>
                </a>
              </Link>
              &nbsp;habitant morbi tristique senectus et netus et malesuada
              fames.
            </span>
            <div className='green-bar'></div>
          </div>
          <div className='stories'>
            <Today />
            <div>
              <Story />
              <Tiles />
            </div>
          </div>
        </div>
      </div>

      <Streaming />

      <style jsx>{`
        .background {
          background-color: #000;
          width: 100%;
          height: 100%;
        }
        .margins-div {
          margin-left: 164px;
          margin-right: 164px;
        }
        .principal-headings {
          padding-top: 87px;
          padding-bottom: 60px;
        }
        .principal-title {
          font-family: 'Century Gothic', sans-serif;
          text-transform: uppercase;
          font-size: 54px;
          font-weight: 700;
          letter-spacing: 3px;
          line-height: 1.5;
          text-align: center;
          color: #fff;
          margin: 0;
        }
        .principal-subheading {
          margin-top: 14px;
          margin-bottom: 23px;
          font-size: 18px;
          line-height: 1.5;
          color: #fff;
          display: flex;
          justify-content: center;
          width: 100%;
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
          color: #fff;
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
        .anchor-bottom {
          bottom: 3px;
        }
        .stories {
          display: flex;
          justify-content: space-between;
        }
        .green-bar {
          width: 60px;
          height: 4px;
          background-color: var(--main-color);
          margin: auto;
        }
      `}</style>
    </Layout>
  );
};

// export const getStaticProps: GetStaticProps = async () => {
//   const feed = await prisma.post.findMany({
//     where: { published: true },
//     include: {
//       author: {
//         select: { name: true },
//       },
//     },
//   });
//   return { props: { feed } };
// };

export default Blog;
