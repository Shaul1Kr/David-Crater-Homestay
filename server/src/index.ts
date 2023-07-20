// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.rooms.create({ data: { roomName: "6 Bed Mixed Dorm - Meru" } });
//   const allRooms = await prisma.rooms.findMany();
//   console.log(allRooms);
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
