// PortfolioPage.tsx
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ThemeProvider } from "../components/ThemeProvider";
import { Header } from "../components/shared/Header";
import { ProjectsGrid } from "../components/ProjectsGrid";
import { SkillsList } from "../components/SkillsList";
import { ContactForm } from "../components/ContactForm";
import { Footer } from "../components/shared/Footer";
import { PORTFOLIO_INFO } from "../config/portfolioData";
import { About } from "../components/About";
import { AppleHelloEnglishEffect } from "../components/HelloEffects";
import type { Project } from "../types/portfolio";
import { ProjectModal } from "../components/ProjectModal";
import { ScrollProgressBar } from "../components/shared/ScrollProgressBar";
import { ScrollToTop } from "../components/shared/ScrollToTop";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const PortfolioPage: React.FC = () => {
  const [selected, setSelected] = useState<Project | null>(null);

  const [showHello, setShowHello] = useState(true);

  return (
    <ThemeProvider>
      <ScrollProgressBar />
      <Header
        links={[
          { href: "#about", label: "About" },
          { href: "#projects", label: "Projects" },
          { href: "#skills", label: "Skills" },
          { href: "#contact", label: "Contact" },
        ]}
      />

      {/* About / hero: hidden while hello animation plays */}
      <AnimatePresence>
        {showHello && (
          <motion.div
            key="hello-overlay"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <AppleHelloEnglishEffect
              className="text-white"
              onAnimationComplete={() => setShowHello(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="about"
        className="hero-panel relative h-screen min-h-screen w-full overflow-hidden"
        initial={{ opacity: 0, y: 8 }}
        animate={showHello ? { opacity: 0, y: 8 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="relative z-10 flex min-h-screen w-full items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-6xl 2xl:max-w-7xl mx-auto">
            <About />
          </div>
        </div>
      </motion.section>

      <main className="max-w-6xl 2xl:max-w-9xl mx-auto px-6 py-15 sm:py-20 lg:py-32 relative z-20">
        <section id="projects" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Projects</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Selected work — click a card for details.
          </p>
          <ProjectsGrid
            projects={PORTFOLIO_INFO.projects}
            onOpen={setSelected}
          />
        </section>

        <section id="skills" className="py-8">
          <h2 className="text-2xl font-semibold text-[var(--brand)]">Skills</h2>
          <p className="mb-6 text-sm text-gray-500 dark:text-gray-400 mt-1">
            Tools and technologies I use regularly.
          </p>
          <SkillsList skills={PORTFOLIO_INFO.skills} isBar={true} />
        </section>

        <section id="contact" className="py-12">
          <h2 className="text-3xl font-bold text-[var(--brand)]">Kontak</h2>
          <p className="mb-8 text-sm text-[var(--muted)] mt-2">
            Mari berdiskusi mengenai proyek Anda, atau sekadar menyapa.
          </p>
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="w-full">
              <ContactForm />
            </div>

            <div className="p-8 rounded-3xl bg-[var(--surface)]/40 backdrop-blur-2xl border border-[var(--border)]/50 shadow-[0_8px_32px_-12px_rgba(0,0,0,0.2)] flex flex-col gap-6 h-full">
              <div>
                <h3 className="text-xl font-bold text-[var(--text)] mb-2">Mari Berkolaborasi</h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  Saya selalu terbuka untuk peluang kerja sama, baik proyek lepas (freelance) maupun kontrak penuh. Jangan ragu untuk mengirimkan pesan kepada saya, kotak masuk saya selalu terbuka!
                </p>
              </div>
              
              <div className="w-full h-px bg-[var(--border)]/50"></div>

              <div>
                <h4 className="text-sm font-bold text-[var(--brand)] uppercase tracking-widest mb-3">Kontak Cepat</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)]">
                      📧
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] font-medium uppercase tracking-wider">Email</div>
                      <div className="text-sm font-medium text-[var(--text)]">daffarachel72@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[var(--surface)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)]">
                      📍
                    </div>
                    <div>
                      <div className="text-xs text-[var(--muted)] font-medium uppercase tracking-wider">Lokasi</div>
                      <div className="text-sm font-medium text-[var(--text)]">Indonesia (Remote)</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full h-px bg-[var(--border)]/50"></div>

              <div>
                <h4 className="text-sm font-bold text-[var(--brand)] uppercase tracking-widest mb-3">Media Sosial</h4>
                <div className="flex flex-wrap gap-3">
                  {/* LinkedIn hidden
                  <a href="https://www.linkedin.com/in/daffa-rachel-putra-310180312/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--brand)] hover:border-[var(--brand)]/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    <FaLinkedin size={18} />
                    <span className="text-sm font-medium">LinkedIn</span>
                  </a>
                  */}
                  <a href="https://github.com/daffarch" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--brand)] hover:border-[var(--brand)]/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    <FaGithub size={18} />
                    <span className="text-sm font-medium">GitHub</span>
                  </a>
                  <a href="https://www.instagram.com/daffarchh?igsh=MTIxMGlwYXFsN21xcg%3D%3D&utm_source=qr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--brand)] hover:border-[var(--brand)]/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    <FaInstagram size={18} />
                    <span className="text-sm font-medium">Instagram</span>
                  </a>
                  <a href="#" className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[var(--surface)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--brand)] hover:border-[var(--brand)]/50 transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                    <FaWhatsapp size={18} />
                    <span className="text-sm font-medium">WhatsApp</span>
                  </a>
                </div>
              </div>

              {PORTFOLIO_INFO.meta?.pdf && (
                <div className="mt-auto pt-6">
                  <a
                    href={PORTFOLIO_INFO.meta.pdf}
                    className="flex items-center justify-center w-full px-6 py-3 rounded-xl border-2 border-[var(--brand)] text-[var(--brand)] font-bold tracking-wide hover:bg-[var(--brand)] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg"
                  >
                    Unduh CV / Resume
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <ScrollToTop />
      <Footer />

      <ProjectModal
        project={selected}
        open={!!selected}
        onClose={() => setSelected(null)}
      />
    </ThemeProvider>
  );
};

export default PortfolioPage;
