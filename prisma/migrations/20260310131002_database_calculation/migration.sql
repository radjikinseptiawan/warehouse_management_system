-- This is an empty migration.

-- 1. Trigger untuk Barang Masuk (Tambah Stok)
CREATE OR REPLACE FUNCTION update_stok_masuk() RETURNS TRIGGER AS $$
BEGIN
    UPDATE "produk" 
    SET "jumlah" = "jumlah" + NEW."jumlah_barang_masuk"
    WHERE "id" = NEW."produkId";
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_update_stok_masuk
AFTER INSERT ON "barang_masuk"
FOR EACH ROW EXECUTE FUNCTION update_stok_masuk();

-- 2. Trigger untuk Barang Keluar (Kurangi Stok)
CREATE OR REPLACE FUNCTION update_stok_keluar() RETURNS TRIGGER AS $$
BEGIN 
    UPDATE "produk" 
    SET "jumlah" = "jumlah" - NEW."jumlah_barang_keluar"
    WHERE "id" = NEW."produkId";
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER tr_update_stok_keluar
AFTER INSERT ON "barang_keluar"
FOR EACH ROW EXECUTE FUNCTION update_stok_keluar();