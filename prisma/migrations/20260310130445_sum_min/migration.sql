-- AlterTable
ALTER TABLE "produk" ADD COLUMN     "is_delete" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "public_id" TEXT;
