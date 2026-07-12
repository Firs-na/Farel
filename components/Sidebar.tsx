"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const links = [
  { href: "/lagu", label: "Daftar Lagu", icon: "🎵" },
  { href: "/nrs", label: "Cek Nyeri", icon: "📊" },
  { href: "/referensi", label: "Referensi", icon: "📚" },
  { href: "/tentang", label: "Tentang", icon: "👨‍⚕️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Tutup drawer otomatis setiap kali pindah halaman (khusus tampilan HP)
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Tombol buka sidebar - hanya tampil di layar kecil */}
      <button
        onClick={() => setOpen(true)}
        aria-label="Buka menu"
        className="fixed left-4 top-4 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface shadow-md md:hidden"
      >
        <span className="flex flex-col gap-1" aria-hidden>
          <span className="block h-0.5 w-4.5 w-[18px] rounded bg-tealDeep" />
          <span className="block h-0.5 w-4.5 w-[18px] rounded bg-tealDeep" />
          <span className="block h-0.5 w-4.5 w-[18px] rounded bg-tealDeep" />
        </span>
      </button>

      {/* Overlay gelap saat drawer terbuka di HP */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-tealDeep/40 md:hidden"
          aria-hidden
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-[240px] flex-col border-r border-line bg-surface px-5 py-6 transition-transform duration-300 md:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <Link href="/" className="mb-8 flex items-center gap-2.5 px-1">
          <img src="/logo.png" alt="RuangDengar" className="h-12" />
        </Link>

        <nav className="flex flex-col gap-1">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3 rounded-xl px-3.5 py-2.5 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-teal text-white"
                    : "text-inkSoft hover:bg-surfaceSoft hover:text-tealDeep"
                }`}
              >
                <span aria-hidden>{link.icon}</span>
                {link.label}
              </Link>
            );
          })}
        </nav>

        <p className="mt-auto px-1 text-[11px] leading-relaxed text-inkSoft">
          RuangDengar — media pendukung terapi musik, bukan pengganti
          layanan medis profesional.
        </p>
      </aside>
    </>
  );
}
