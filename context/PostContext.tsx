import { createContext, useContext, ReactNode, useState } from 'react';
import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';

// type postContextType = {
//   title: string;
//   description: string;
//   content: string;
// };

// const postContextDefaultValues: postContextType = {
//   title: "test0",
//   description: "test1",
//   content: "test2",
// };

type postContextType = [
  {
    id: number;
    title: string;
    published: boolean;
    createdAt: string;
    updatedAt: string;
    // author        User?    @relation(fields: [authorId], references: [id])
    authorId: number;
    content: string;
    description: string;
    photographers: string[];
    photos: string[];
    captions: string[];
    category: string;
    readTime: number;
  }
];

const postContextDefaultValues: postContextType = [
  {
    id: null,
    title: '',
    published: false,
    createdAt: '',
    updatedAt: '',
    // author        User?    @relation(fields: [authorId], references: [id])
    authorId: null,
    content: null,
    description: '',
    photographers: [],
    photos: [],
    captions: [],
    category: '',
    readTime: null,
  },
];

const PostContext = createContext<postContextType>(postContextDefaultValues);

export function usePost() {
  return useContext(PostContext);
}

type Props = {
  children: ReactNode;
  //   props: object;
};

const GET_POSTS = gql`
  query Posts {
    posts {
      id
      title
      photos
      category
    }
  }
`;

export function PostProvider({ children }: Props) {
  const { loading, error, data } = useQuery(GET_POSTS);
  // console.log(data);
  if (loading) return <p>"Loading..."</p>;
  if (error) return <p>`Error! ${error.message}`</p>;

  const value = {
    ...data.posts,
    // title: postContextDefaultValues.title,
    // description: postContextDefaultValues.description,
    // content: postContextDefaultValues.content,
  };

  return (
    <>
      <PostContext.Provider value={value}>{children}</PostContext.Provider>
    </>
  );
}
