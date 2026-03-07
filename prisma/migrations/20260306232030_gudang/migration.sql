-- CreateTable
CREATE TABLE "vendors" (
    "id" SERIAL NOT NULL,
    "nama_vendor" TEXT NOT NULL,
    "warna_vendor" TEXT NOT NULL,
    "alamat_vendor" TEXT NOT NULL,

    CONSTRAINT "vendors_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "nama_kategori" TEXT NOT NULL,
    "warna_category" TEXT NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "lokasi_gudang" (
    "id" SERIAL NOT NULL,
    "nama_gudang" TEXT NOT NULL,
    "alamat_gudang" TEXT NOT NULL,
    "warna_gudang" TEXT NOT NULL,

    CONSTRAINT "lokasi_gudang_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "produk" (
    "id" SERIAL NOT NULL,
    "nama_produk" TEXT NOT NULL,
    "kategoriId" INTEGER NOT NULL,
    "vendorsId" INTEGER NOT NULL,
    "jumlah" INTEGER NOT NULL DEFAULT 0,
    "lokasiId" INTEGER NOT NULL,

    CONSTRAINT "produk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang_masuk" (
    "id" SERIAL NOT NULL,
    "produkId" INTEGER NOT NULL,
    "tanggal_masuk" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nominal_modal" INTEGER NOT NULL,
    "jumlah_barang_masuk" INTEGER NOT NULL,

    CONSTRAINT "barang_masuk_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "barang_keluar" (
    "id" SERIAL NOT NULL,
    "produkId" INTEGER NOT NULL,
    "tanggal_keluar" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "nominal_modal" INTEGER NOT NULL,
    "jumlah_barang_keluar" INTEGER NOT NULL,

    CONSTRAINT "barang_keluar_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "produk" ADD CONSTRAINT "produk_kategoriId_fkey" FOREIGN KEY ("kategoriId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produk" ADD CONSTRAINT "produk_vendorsId_fkey" FOREIGN KEY ("vendorsId") REFERENCES "vendors"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "produk" ADD CONSTRAINT "produk_lokasiId_fkey" FOREIGN KEY ("lokasiId") REFERENCES "lokasi_gudang"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_masuk" ADD CONSTRAINT "barang_masuk_produkId_fkey" FOREIGN KEY ("produkId") REFERENCES "produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "barang_keluar" ADD CONSTRAINT "barang_keluar_produkId_fkey" FOREIGN KEY ("produkId") REFERENCES "produk"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
