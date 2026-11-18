/* kredit-maliki: Template oleh Maliki Saputra (@malikisaputra) — https://malikisaputra.biz.id. Lisensi Nonkomersial Maliki Studio: wajib kredit, dilarang dijual (lihat LICENSE). */
// Draf: nomor, harga, dan stok masih contoh dan harus diganti sebelum toko digunakan.
window.TOKO = {
  nama: (window.TEMA && TEMA.nama) || 'Kopi Berkah Aroma',
  slogan: 'Kopi untuk menemani hari Anda',
  wa: '', mataUang: 'Rp',
  ongkir: [
    { kota: 'Jakarta', biaya: 0, tanya: true },
    { kota: 'Bogor', biaya: 0, tanya: true },
    { kota: 'Depok', biaya: 0, tanya: true },
    { kota: 'Tangerang', biaya: 0, tanya: true },
    { kota: 'Bekasi', biaya: 0, tanya: true },
    { kota: 'Bandung', biaya: 0, tanya: true }
  ],
  gratisOngkirMin: 0, sheetCSV: '', logo: '', fotoKosong: 'img/foto-produk.svg'
};
window.PRODUK = [{
  id: 'robusta-bold-250', nama: 'Robusta Bold 250 gram', kategori: 'Kopi',
  harga: 0, label: 'Draf — harga menyusul', stok: 0,
  deskripsi: 'Kopi Robusta Bold kemasan 250 gram. Harga dan ketersediaan akan diperbarui.',
  varian: [], gambar: ['img/foto-produk.svg']
}];
