import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type AuthPayload {
    token: String
    user: User
  }

  type User {
    id: ID!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: String
    title: String
    published: Boolean
    createdAt: String
    updatedAt: String
    author: User!
    content: String
    description: String
    photographers: [String]
    photos: [String]
    captions: [String]
    category: String
    readTime: Int
  }

  type Query {
    posts: [Post!]!
    getPostById(id: Int!): Post!
  }

  type Mutation {
    signup(email: String!, password: String!): AuthPayload
    login(email: String!, password: String!): AuthPayload
    createPost(data: CreatePostInput!): Post!
    updatePost(id: Int!, data: CreatePostInput!): Post!
    deletePost(id: Int!): Post!
  }

  input CreatePostInput {
    title: String
    published: Boolean
    authorId: Int
    content: String
    description: String
    photographers: [String]
    photos: [String]
    captions: [String]
    category: String
    readTime: Int
  }
`;
