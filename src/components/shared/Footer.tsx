import React from "react";


export const Footer: React.FC = () => {
  return (
    <footer className="text-sm text-[var(--muted)] border-t border-[var(--border)] py-6">
      <div className="max-w-6xl mx-auto flex items-center justify-center px-6">
        <div>
          Designed by <span className="font-bold text-[var(--text)]">Daffa Rachel Putra</span>
        </div>
      </div>
    </footer>
  );
};
