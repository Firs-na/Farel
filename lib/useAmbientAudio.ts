"use client";

import { useRef, useState, useCallback } from "react";
import type { Song } from "@/data/songs";

/**
 * Hook sederhana untuk memutar nada ambient demo (bukan file audio asli)
 * menggunakan Web Audio API. Cocok untuk prototipe sebelum lagu asli
 * (berlisensi) tersedia.
 */
export function useAmbientAudio() {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const ctxRef = useRef<AudioContext | null>(null);
  const nodesRef = useRef<{
    oscA?: OscillatorNode;
    oscB?: OscillatorNode;
    lfo?: OscillatorNode;
    gain?: GainNode;
  }>({});

  const stop = useCallback(() => {
    const ctx = ctxRef.current;
    const { oscA, oscB, lfo, gain } = nodesRef.current;
    if (ctx && gain) {
      const now = ctx.currentTime;
      gain.gain.cancelScheduledValues(now);
      gain.gain.setValueAtTime(gain.gain.value, now);
      gain.gain.linearRampToValueAtTime(0, now + 0.4);
      setTimeout(() => {
        try {
          oscA?.stop();
          oscB?.stop();
          lfo?.stop();
        } catch {
          /* already stopped */
        }
      }, 450);
    }
    nodesRef.current = {};
  }, []);

  const play = useCallback(
    (song: Song) => {
      stop();
      if (!ctxRef.current) {
        const AudioCtx =
          window.AudioContext ||
          (window as unknown as { webkitAudioContext: typeof AudioContext })
            .webkitAudioContext;
        ctxRef.current = new AudioCtx();
      }
      const ctx = ctxRef.current;
      const now = ctx.currentTime;

      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.05, now + 1.2);

      const oscA = ctx.createOscillator();
      oscA.type = song.wave;
      oscA.frequency.setValueAtTime(song.freq, now);

      const oscB = ctx.createOscillator();
      oscB.type = "sine";
      oscB.frequency.setValueAtTime(song.freq * 1.5, now);

      const lfo = ctx.createOscillator();
      lfo.frequency.setValueAtTime(0.15, now);
      const lfoGain = ctx.createGain();
      lfoGain.gain.setValueAtTime(4, now);
      lfo.connect(lfoGain);
      lfoGain.connect(oscA.frequency);

      oscA.connect(gain);
      oscB.connect(gain);
      gain.connect(ctx.destination);

      oscA.start();
      oscB.start();
      lfo.start();

      nodesRef.current = { oscA, oscB, lfo, gain };
      setPlayingId(song.id);
    },
    [stop]
  );

  const toggle = useCallback(
    (song: Song) => {
      if (playingId === song.id) {
        stop();
        setPlayingId(null);
      } else {
        play(song);
      }
    },
    [playingId, play, stop]
  );

  return { playingId, toggle };
}
