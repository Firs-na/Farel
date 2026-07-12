export type Reference = {
  year: string;
  title: string;
  source: string;
  note: string;
};

export const references: Reference[] = [
  {
    year: "2013",
    title:
      "Music interventions for improving psychological and physical outcomes in cancer patients",
    source: "Cochrane Database of Systematic Reviews — Bradt, Dileo & Shim",
    note: "Tinjauan sistematis yang merangkum bukti bahwa musik dapat membantu menurunkan kecemasan, nyeri, dan meningkatkan mood pada pasien kanker.",
  },
  {
    year: "2014",
    title: "Music interventions for preoperative anxiety",
    source: "Cochrane Database of Systematic Reviews — Bradt & Dileo",
    note: "Merangkum studi yang menunjukkan mendengarkan musik sebelum operasi dapat menurunkan tingkat kecemasan dibanding perawatan standar.",
  },
  {
    year: "2015",
    title:
      "Music as an aid for postoperative recovery in adults: a systematic review and meta-analysis",
    source: "The Lancet — Hole, Hirsch, Ball & Meads",
    note: "Menemukan bahwa musik pascaoperasi berkaitan dengan penurunan rasa nyeri, kecemasan, dan kebutuhan obat pereda nyeri.",
  },
];
