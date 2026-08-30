   export const API_URL = "http://127.0.0.1:8000";

   export type Lagu = {
  id: number;
  nama: string;
  genre: string;
  file: string;
  created_at: string;
  updated_at: string;
};

export async function getLagu(): Promise<Lagu[]> {
  const res = await fetch(`${API_URL}/api/lagu`);
  const data = await res.json();
  return data;
}

export async function tambahLagu(formData: FormData, token: string) {
  const res = await fetch(`${API_URL}/api/lagu`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
    },
    body: formData,
  });

  if (!res.ok) {
    throw new Error("Gagal menambah lagu");
  }

  return res.json();
}

export async function hapusLagu(id: number, token: string) {
  const res = await fetch(`${API_URL}/api/lagu/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) {
    throw new Error("Gagal menghapus lagu");
  }

  return res.json();
}