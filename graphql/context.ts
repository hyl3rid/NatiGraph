// /graphql/context.ts
import { PrismaClient } from "@prisma/client";
import prisma from "../lib/prisma";
const { getUserId } = require("../utils/getUserId");

export type Context = {
  prisma: PrismaClient;
};

export async function createContext({ req, res }): Promise<Context> {
  return {
    ...req,
    prisma,
    userId: req && req.headers.authorization ? getUserId(req) : null,
  };
}
