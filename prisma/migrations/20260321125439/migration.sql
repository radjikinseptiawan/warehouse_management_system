-- CreateTable
CREATE TABLE "operasional" (
    "id" SERIAL NOT NULL,
    "nama_operasional" TEXT NOT NULL,
    "biaya_operasional" INTEGER NOT NULL,

    CONSTRAINT "operasional_pkey" PRIMARY KEY ("id")
);
