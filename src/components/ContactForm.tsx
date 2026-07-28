import React, { useState } from "react";

type ContactState = { name: string; email: string; message: string };

// =====================================================
// CARA SETUP (gratis, 50 pesan/bulan):
// 1. Buka https://formspree.io dan buat akun gratis
// 2. Klik "New Form", beri nama (misal "Portfolio Contact")
// 3. Masukkan email tujuan: daffarachel72@gmail.com
// 4. Copy Form ID (contoh: "xrgbopkl")
// 5. Ganti "YOUR_FORM_ID" di bawah dengan ID tersebut
// =====================================================
const FORMSPREE_ID = "mzdnodyy";

export const ContactForm: React.FC = () => {
  const [state, setState] = useState<ContactState>({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState<boolean | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  function update(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;
    setState((s) => ({ ...s, [name]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setSuccess(null);
    setErrorMsg(null);

    // Jika Formspree belum dikonfigurasi, beri tahu user
    if (!FORMSPREE_ID) {
      setErrorMsg("Form ID belum dikonfigurasi.");
      setSuccess(false);
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: state.name,
          email: state.email,
          message: state.message,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        throw new Error(
          data?.errors?.map((err: { message: string }) => err.message).join(", ") ||
            `Server error ${res.status}`,
        );
      }

      setSuccess(true);
      setState({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Failed to send contact message", err);
      setSuccess(false);
      setErrorMsg((err as Error).message || "Gagal mengirim pesan");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      className="grid gap-5 p-8 rounded-3xl bg-[var(--surface)]/40 backdrop-blur-2xl border border-[var(--border)]/50 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.2)]"
      aria-live="polite"
    >
      <div>
        <label htmlFor="name" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2">
          Nama
        </label>
        <input
          id="name"
          name="name"
          title="Nama"
          placeholder="Siapa nama Anda?"
          value={state.name}
          onChange={update}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/60 backdrop-blur-sm border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40 focus:border-[var(--brand)] transition-all duration-300 shadow-inner placeholder-[var(--muted)]/50"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          title="Email"
          placeholder="Alamat email untuk membalas pesan ini?"
          value={state.email}
          onChange={update}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/60 backdrop-blur-sm border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40 focus:border-[var(--brand)] transition-all duration-300 shadow-inner placeholder-[var(--muted)]/50"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-bold text-[var(--muted)] uppercase tracking-widest mb-2">
          Pesan
        </label>
        <textarea
          id="message"
          name="message"
          title="Pesan"
          placeholder="Ceritakan apa yang ingin Anda diskusikan..."
          value={state.message}
          onChange={update}
          rows={5}
          className="w-full px-4 py-3 rounded-xl bg-[var(--surface)]/60 backdrop-blur-sm border border-[var(--border)] text-[var(--text)] focus:outline-none focus:ring-2 focus:ring-[var(--brand)]/40 focus:border-[var(--brand)] transition-all duration-300 shadow-inner placeholder-[var(--muted)]/50 resize-y"
          required
        />
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <button
          type="submit"
          disabled={loading}
          className="w-full sm:w-auto px-8 py-3 rounded-xl text-white font-semibold tracking-wide bg-gradient-to-r from-[var(--brand)] to-[var(--accent)] hover:shadow-lg hover:shadow-[var(--brand)]/30 hover:-translate-y-1 transition-all duration-300 disabled:opacity-60 disabled:hover:translate-y-0 disabled:hover:shadow-none"
        >
          {loading ? "Sedang mengirim..." : "Kirim Pesan"}
        </button>

        {success === true && (
          <div className="text-sm font-medium text-emerald-500 bg-emerald-500/10 px-4 py-2 rounded-lg border border-emerald-500/20">
            Pesan berhasil terkirim! Terima kasih.
          </div>
        )}
        {success === false && (
          <div className="text-sm font-medium text-red-500 bg-red-500/10 px-4 py-2 rounded-lg border border-red-500/20">
            Gagal mengirim pesan.
            {errorMsg && (
              <span className="block text-xs text-red-400 mt-1 opacity-80">{errorMsg}</span>
            )}
          </div>
        )}
      </div>
    </form>
  );
};
