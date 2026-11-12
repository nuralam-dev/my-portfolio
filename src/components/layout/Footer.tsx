
import Link from "next/link";

import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUp,
} from "react-icons/fi";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const EMAIL = "nuralam1122345@gmail.com";

export default async function Footer() {
  "use cache";

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-5 pt-16 pb-8 sm:px-8 lg:px-12">

        <div className="grid gap-10 md:grid-cols-3">

          {/* Brand */}
          <div>
            <Link
              href="#home"
              className="text-2xl font-extrabold tracking-tight"
            >
              Nur Alam
              <span className="text-indigo-400">.</span>
            </Link>

            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Full Stack Web Developer focused on
              creating responsive, functional, and
              user-friendly web applications.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-5 text-base font-semibold">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-3">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 transition-colors hover:text-indigo-400"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="mb-5 text-base font-semibold">
              Get In Touch
            </h3>

            <a
              href={`mailto:${EMAIL}`}
              className="text-sm text-slate-400 hover:text-indigo-400"
            >
              {EMAIL}
            </a>

            <div className="mt-6 flex gap-3">
              <a
                href="https://github.com/nuralam-dev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <FiGithub size={19} />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <FiLinkedin size={19} />
              </a>

              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email"
                className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
              >
                <FiMail size={19} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-7 text-center sm:flex-row">

          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Nur Alam.
            All rights reserved.
          </p>

          <p className="text-xs text-slate-400">
            Built with Next.js & TypeScript
          </p>

          <Link
            href="#home"
            aria-label="Back to top"
            className="flex size-10 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition-colors hover:bg-indigo-600 hover:text-white"
          >
            <FiArrowUp size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
