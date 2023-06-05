import { PrismaClient } from "@prisma/client";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;

// In order to have one instance of the prisma client class, we 
// import 'prisma' from this file whenever we need to use it instead
// of creating a new instance of Prisma client class.