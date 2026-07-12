export type FaqItem = {
  q: string;
  a: string;
};

export const faq: FaqItem[] = [
  {
    q: "Apakah musik di sini bisa menggantikan obat pereda nyeri?",
    a: "Tidak. Musik terapi di sini adalah alat pendukung relaksasi, bukan pengganti obat atau penanganan medis. Untuk nyeri berat atau tidak biasa, tetap konsultasikan ke tenaga kesehatan.",
  },
  {
    q: "Bagaimana cara memilih genre musik yang tepat?",
    a: "Kamu bisa mulai dari halaman Cek Nyeri (NRS). Setelah menilai tingkat nyerimu, sistem akan merekomendasikan genre yang paling sesuai secara otomatis.",
  },
  {
    q: "Kenapa lagunya hanya berupa nada ambient, bukan lagu asli?",
    a: "Versi ini adalah prototipe. Nada ambient dibuat langsung di browser sebagai simulasi rasa dari tiap genre. Kamu bisa menggantinya dengan berkas audio asli yang sudah berlisensi.",
  },
  {
    q: "Apakah data yang saya masukkan (misalnya skala nyeri) disimpan?",
    a: "Tidak. Semua interaksi berjalan langsung di browser kamu dan tidak dikirim atau disimpan ke server mana pun.",
  },
  {
    q: "Berapa lama sebaiknya mendengarkan musik terapi dalam satu sesi?",
    a: "Umumnya 15–30 menit per sesi sudah cukup untuk merasakan efek relaksasi. Sesuaikan dengan kenyamananmu sendiri.",
  },
];
