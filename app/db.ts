import { PrismaClient } from "@prisma/client";

const prismaClientSingleton = () => {
  console.log("inside the singleton func");
  return new PrismaClient();
};

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton();

export default prisma;

if (process.env.NODE_ENV !== "production") globalThis.prismaGlobal = prisma;

// this file only work for the development not for the production
// globalthis ===> this object doesn't change when the web hot reload whwn we save the file :)
