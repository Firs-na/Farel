"use client";

import { useCallback, useRef, useState } from "react";

export function useAudioPlayer() {
  const [playingId, setPlayingId] = useState<number | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const toggle = useCallback(
    (id: number, url: string) => {
      // Kalau lagu yang diklik sama dengan yang lagi main, berarti mau di-pause
      if (playingId === id) {
        audioRef.current?.pause();
        setPlayingId(null);
        return;
      }

      // Kalau ada lagu lain yang masih main, hentikan dulu
      audioRef.current?.pause();

      const audio = new Audio(url);
      audio.play();
      audio.onended = () => setPlayingId(null); // otomatis reset kalau lagu selesai
      audioRef.current = audio;
      setPlayingId(id);
    },
    [playingId]
  );

  return { playingId, toggle };
}