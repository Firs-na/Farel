"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "@/lib/api";
import { saveToken } from "@/lib/auth";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");

    const res = await fetch(`${API_URL}/api/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      setError("Email atau password salah");
      return;
    }

    const data = await res.json();
    saveToken(data.token);
    router.push("/admin");
  }

  return (
    <div className="mx-auto mt-20 max-w-sm">
      <h1 className="mb-6 font-display text-2xl font-semibold text-tealDeep">
        Login Admin
      </h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="rounded-xl border border-line px-4 py-2.5"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="rounded-xl border border-line px-4 py-2.5"
        />
        {error && <p className="text-sm text-coral">{error}</p>}
        <button
          type="submit"
          className="rounded-full bg-teal px-5 py-2.5 font-semibold text-white"
        >
          Login
        </button>
      </form>
    </div>
  );
}