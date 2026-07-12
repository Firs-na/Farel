export type Song = {
  id: string;
  title: string;
  genre: string;
  duration: string;
  freq: number; // frekuensi dasar untuk nada ambient demo
  wave: OscillatorType;
};

export const genres = ["Semua", "Alam", "Piano Solo", "Ambient Meditasi", "Jazz Santai"] as const;

export const songs: Song[] = [
  { id: "s1", title: "Gemericik Sungai Pagi", genre: "Alam", duration: "4:12", freq: 220, wave: "sine" },
  { id: "s2", title: "Hujan di Atas Genting", genre: "Alam", duration: "5:03", freq: 196, wave: "sine" },
  { id: "s3", title: "Nafas Piano", genre: "Piano Solo", duration: "3:58", freq: 261, wave: "triangle" },
  { id: "s4", title: "Cahaya Lembut", genre: "Piano Solo", duration: "4:21", freq: 293, wave: "triangle" },
  { id: "s5", title: "Ruang Hening", genre: "Ambient Meditasi", duration: "6:10", freq: 110, wave: "sine" },
  { id: "s6", title: "Nafas Dalam", genre: "Ambient Meditasi", duration: "6:33", freq: 123, wave: "sine" },
  { id: "s7", title: "Kopi Sore", genre: "Jazz Santai", duration: "3:40", freq: 261, wave: "sawtooth" },
  { id: "s8", title: "Irama Rehat", genre: "Jazz Santai", duration: "3:29", freq: 246, wave: "sawtooth" },
];
