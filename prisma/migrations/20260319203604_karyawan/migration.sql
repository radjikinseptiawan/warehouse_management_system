-- CreateEnum
CREATE TYPE "isActive" AS ENUM ('Aktif', 'NonAktif');

-- DropForeignKey
ALTER TABLE "produk" DROP CONSTRAINT "produk_unitId_fkey";

-- AlterTable
ALTER TABLE "produk" ALTER COLUMN "unitId" DROP NOT NULL,
ALTER COLUMN "unitId" DROP DEFAULT;

-- CreateTable
CREATE TABLE "Karyawan" (
    "id" SERIAL NOT NULL,
    "nama_karyawan" TEXT NOT NULL,
    "alamat_karyawan" TEXT NOT NULL,
    "gaji_karyawan" INTEGER NOT NULL,
    "mulai_kerja" TEXT NOT NULL,
    "status" "isActive" NOT NULL,

    CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produk" ADD CONSTRAINT "produk_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "satuan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
