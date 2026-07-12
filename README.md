# RuangDengar — Terapi Musik (Next.js)

Prototipe website terapi musik dibangun dengan Next.js 14 (App Router) + TypeScript + Tailwind CSS.

## Struktur folder

```
app/
  layout.tsx        Layout utama (font, Sidebar)
  globals.css        Tailwind + reset kecil
  page.tsx            Daftar Lagu (halaman utama, + pencarian & filter genre)
  nrs/page.tsx          Cek Skala Nyeri (NRS)
  referensi/page.tsx   Referensi ilmiah
  tentang/page.tsx      Tentang + QnA/FAQ

components/
  Sidebar.tsx     Navigasi utama — sidebar tetap di desktop, drawer geser di HP
  SearchBox.tsx, GenreChips.tsx, SongCard.tsx, SongList.tsx
  NrsScale.tsx, ReferenceCard.tsx, QnA.tsx

data/
  songs.ts       Daftar lagu (masih sedikit, tinggal ditambah/diganti)
  nrs.ts          Data & logika tingkat skala nyeri
  references.ts    Data referensi ilmiah
  faq.ts           Data pertanyaan & jawaban (QnA)

lib/
  useAmbientAudio.ts   Hook Web Audio API untuk nada ambient demo
```

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Yang perlu diganti sebelum produksi

- `data/songs.ts` — masih pakai nada ambient hasil Web Audio API sebagai
  pengganti sementara, bukan file audio asli. Tambahkan field `src` berisi
  URL/berkas MP3 lagu asli lalu ganti logika di `lib/useAmbientAudio.ts`
  (atau buat hook baru `<audio>` biasa) untuk memutar file sungguhan.
- `data/faq.ts` — bebas ditambah/dikurangi sesuai kebutuhan.
- Warna & font ada di `tailwind.config.ts`, gampang disesuaikan dengan
  identitas visual kamu sendiri.
