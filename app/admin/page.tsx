"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getToken, removeToken } from "@/lib/auth";
import { getLagu, tambahLagu, hapusLagu, type Lagu } from "@/lib/api";

export default function AdminPage() {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const [lagu, setLagu] = useState<Lagu[]>([]);
  const [nama, setNama] = useState("");
  const [genre, setGenre] = useState("");
  const [file, setFile] = useState<File | null>(null);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    if (!getToken()) {
      router.push("/admin/login");
    } else {
      setChecked(true);
      loadLagu();
    }
  }, [router]);

  async function loadLagu() {
    const data = await getLagu();
    setLagu(data);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const token = getToken();
    if (!token || !file) {
      setError("File lagu wajib dipilih");
      return;
    }

    const formData = new FormData();
    formData.append("nama", nama);
    formData.append("genre", genre);
    formData.append("file", file);

    setSubmitting(true);
    try {
      await tambahLagu(formData, token);
      setNama("");
      setGenre("");
      setFile(null);
      await loadLagu(); // refresh daftar setelah berhasil tambah
    } catch {
      setError("Gagal menambah lagu, coba lagi");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete(id: number) {
    const token = getToken();
    if (!token) return;

    await hapusLagu(id, token);
    await loadLagu(); // refresh daftar setelah berhasil hapus
  }

  function handleLogout() {
    removeToken();
    router.push("/admin/login");
  }

  if (!checked) {
    return null;
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="mb-6 flex items-center justify-between">
        <h1 className="font-display text-2xl font-semibold text-tealDeep">
          Dashboard Admin
        </h1>
        <button
          onClick={handleLogout}
          className="rounded-full border border-line px-4 py-2 text-sm font-semibold text-inkSoft"
        >
          Logout
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mb-10 flex flex-col gap-3 rounded-2xl border border-line p-5"
      >
        <h2 className="font-semibold text-tealDeep">Tambah Lagu</h2>
        <input
          type="text"
          placeholder="Nama lagu"
          value={nama}
          onChange={(e) => setNama(e.target.value)}
          className="rounded-xl border border-line px-4 py-2.5"
        />
        <input
          type="text"
          placeholder="Genre"
          value={genre}
          onChange={(e) => setGenre(e.target.value)}
          className="rounded-xl border border-line px-4 py-2.5"
        />
        <input
          type="file"
          accept=".mp3,.wav"
          onChange={(e) => setFile(e.target.files?.[0] ?? null)}
        />
        {error && <p className="text-sm text-coral">{error}</p>}
        <button
          type="submit"
          disabled={submitting}
          className="rounded-full bg-teal px-5 py-2.5 font-semibold text-white disabled:opacity-50"
        >
          {submitting ? "Menyimpan..." : "Simpan"}
        </button>
      </form>

      <h2 className="mb-3 font-semibold text-tealDeep">Daftar Lagu</h2>
      <div className="flex flex-col gap-2">
        {lagu.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between rounded-xl border border-line px-4 py-3"
          >
            <div>
              <p className="font-semibold text-tealDeep">{item.nama}</p>
              <p className="text-xs text-inkSoft">{item.genre}</p>
            </div>
            <button
              onClick={() => handleDelete(item.id)}
              className="text-sm font-semibold text-coral"
            >
              Hapus
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}