-- AlterTable
ALTER TABLE "produk" ADD COLUMN     "unitId" INTEGER NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "produk" ADD CONSTRAINT "produk_unitId_fkey" FOREIGN KEY ("unitId") REFERENCES "satuan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
