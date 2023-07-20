import { RequestHandler } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getAvailableRooms: RequestHandler = async (req, res) => {
  const { checkIn, checkOut } = req.body;
  console.log(checkIn, checkOut);
  const allAvailableRooms = await prisma.rooms.findMany();
  res.send(allAvailableRooms);
};

export const getAllRooms: RequestHandler = async (req, res) => {
  const { checkIn, checkOut } = req.body;
  console.log(checkIn, checkOut);
  const allRooms = await prisma.rooms.findMany();
  res.send(allRooms);
};
