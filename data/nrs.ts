export type NrsLevel = {
  range: [number, number];
  label: string;
  desc: string;
  genre: string;
};

export const nrsData: NrsLevel[] = [
  {
    range: [0, 0],
    label: "Tidak nyeri",
    desc: "Kamu tidak sedang merasakan nyeri. Musik masih bisa membantu menjaga suasana hati tetap tenang.",
    genre: "Jazz Santai",
  },
  {
    range: [1, 3],
    label: "Nyeri ringan",
    desc: "Nyeri terasa namun masih bisa diabaikan saat beraktivitas. Musik dengan tempo tenang dan alami bisa membantu mengalihkan fokus.",
    genre: "Alam",
  },
  {
    range: [4, 6],
    label: "Nyeri sedang",
    desc: "Nyeri cukup mengganggu aktivitas sehari-hari. Musik piano lembut dapat membantu menurunkan ketegangan.",
    genre: "Piano Solo",
  },
  {
    range: [7, 10],
    label: "Nyeri berat",
    desc: "Nyeri sangat mengganggu dan sulit diabaikan. Musik ambient bertempo sangat lambat dapat mendukung relaksasi mendalam bersama teknik nafas dalam.",
    genre: "Ambient Meditasi",
  },
];

export function getNrsLevel(n: number): NrsLevel {
  return nrsData.find((d) => n >= d.range[0] && n <= d.range[1]) ?? nrsData[0];
}
