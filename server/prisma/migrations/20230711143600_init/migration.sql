-- CreateTable
CREATE TABLE "Orders" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "arrivalDate" TIMESTAMP(3),
    "departureDate" TIMESTAMP(3),
    "firstName" VARCHAR(255) NOT NULL,
    "lastName" VARCHAR(255) NOT NULL,
    "email" VARCHAR(255) NOT NULL,
    "phone" VARCHAR(255) NOT NULL,
    "country" VARCHAR(255) NOT NULL,
    "requests" VARCHAR(255) NOT NULL,

    CONSTRAINT "Orders_pkey" PRIMARY KEY ("id")
);
