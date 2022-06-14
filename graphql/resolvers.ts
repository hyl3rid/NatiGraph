const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../utils/getUserId");

export const resolvers = {
  Query: {
    async posts(parent, args, { prisma }, info) {
      const getPosts = await prisma.post.findMany();

      return getPosts;
    },

    async getPostById(parent, args, { prisma }, info) {
      const getPostById = await prisma.post.findUnique({
        where: {
          id: args.id,
        },
      });

      return getPostById;
    },
  },

  Mutation: {
    async signup(parent, args, { prisma }, info) {
      const password = await bcrypt.hash(args.password, 10);
      const user = await prisma.user.create({
        data: { ...args, password },
      });
      const token = jwt.sign({ userId: user.id }, APP_SECRET);

      return {
        token,
        user,
      };
    },

    async login(parent, args, { prisma }, info) {
      const user = await prisma.user.findUnique({
        where: { email: args.email },
      });
      if (!user) {
        throw new Error("No such user found");
      }
      const valid = await bcrypt.compare(args.password, user.password);
      if (!valid) {
        throw new Error("Invalid password!");
      }
      const token = jwt.sign({ userId: user.id }, APP_SECRET);

      return {
        token,
        user,
      };
    },
    async createPost(parent, args, { prisma, userId, req }, info) {
      if (!userId) {
        throw new Error("Requires authentication!");
      }

      const post = await prisma.post.create({
        data: {
          ...args.data,
          author: { connect: { id: userId } },
        },
      });

      return post;
    },

    async updatePost(parent, args, { prisma, userId }, info) {
      if (!userId) {
        throw new Error("Requires authentication!");
      }

      const updatePost = await prisma.post.update({
        where: {
          id: args.id,
        },
        data: args.data,
      });

      return updatePost;
    },

    async deletePost(parent, args, { prisma, userId }, info) {
      if (!userId) {
        throw new Error("Requires authentication!");
      }

      const deleteUser = await prisma.post.delete({
        where: {
          id: args.id,
        },
      });

      return deleteUser;
    },
  },
};
