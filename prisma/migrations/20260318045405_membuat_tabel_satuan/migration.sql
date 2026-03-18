/*
  Warnings:

  - You are about to drop the column `satuan` on the `produk` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "produk" DROP COLUMN "satuan";

-- CreateTable
CREATE TABLE "satuan" (
    "id" SERIAL NOT NULL,
    "nama_satuan" TEXT,

    CONSTRAINT "satuan_pkey" PRIMARY KEY ("id")
);
