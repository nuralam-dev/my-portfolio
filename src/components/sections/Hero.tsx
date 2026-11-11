
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiDownload,
  FiFacebook,
  FiGithub,
  FiLinkedin,
  FiMail,
} from "react-icons/fi";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto grid min-h-[calc(100svh-80px)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-20">

        {/* Left Side: Introduction */}
        <div className="order-2 space-y-7 lg:order-1">

          {/* Availability */}
          <Badge
            variant="outline"
            className="rounded-full border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-medium text-indigo-700"
          >
            Full Stack Web Developer
          </Badge>

          {/* Heading */}
          <div className="space-y-4">
            <p className="text-lg font-medium text-slate-600 sm:text-xl">
              Hello, I&apos;m
            </p>

            <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
              Nur Alam
              <span className="text-indigo-600">.</span>
            </h1>

            <h2 className="text-2xl font-semibold tracking-tight text-slate-700 sm:text-3xl">
              Full Stack Web Developer
            </h2>
          </div>

          {/* Description */}
          <p className="max-w-xl text-base leading-8 text-slate-600 sm:text-lg">
            I build modern, responsive, and user-friendly
            web applications using React, Next.js,
            Express.js, and MongoDB.
            With a background in teaching, I bring
            communication, problem-solving, and
            continuous learning to development.
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2">
            {[
              "React",
              "Next.js",
              "TypeScript",
              "Express.js",
              "MongoDB",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-md bg-slate-100 px-3 py-1.5 text-xs font-medium text-slate-700"
              >
                {tech}
              </Badge>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              nativeButton={false}
              render={<Link href="#projects" />}
              size="lg"
              className="h-12 rounded-lg bg-indigo-600 px-6 text-white shadow-sm transition-all hover:bg-indigo-700 hover:shadow-md"
            >
              View My Projects
              <FiArrowUpRight className="size-4" />
            </Button>

            <a
              href="/resume/Nur_Alam_Resume.pdf"
              download="Nur_Alam_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-5 py-3 font-medium text-white hover:bg-indigo-700"
            >
              <FiDownload size={18} />
              Download Resume
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 border-t border-slate-200 pt-6">
            <span className="text-sm font-medium text-slate-500">
              Find me on
            </span>

            <a
              href="https://github.com/nuralam-dev"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="text-xl text-slate-600 transition-colors hover:text-indigo-600"
            >
              <FiGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/nur-alam-645675379/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="text-xl text-slate-600 transition-colors hover:text-indigo-600"
            >
              <FiLinkedin />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591072114721"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
              className="text-xl text-slate-600 transition-colors hover:text-indigo-600"
            >
              <FiFacebook />
            </a>

            <a
              href="mailto:nuralam.course@gmail.com"
              aria-label="Send Email"
              className="text-xl text-slate-600 transition-colors hover:text-indigo-600"
            >
              <FiMail />
            </a>
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="relative order-1 flex justify-center lg:order-2">

          {/* Background Shape */}
          <div className="absolute inset-6 rounded-[3rem] bg-indigo-50" />

          {/* Image Container */}
          <div className="relative h-[350px] w-[290px] overflow-hidden rounded-[2rem] border-4 border-white bg-slate-100 shadow-xl sm:h-[440px] sm:w-[360px] lg:h-[500px] lg:w-[400px]">
            <Image
              src="/image/Image-1.png"
              alt="Nur Alam - Full Stack Web Developer"
              fill
              preload
              sizes="(max-width: 640px) 290px, (max-width: 1024px) 360px, 400px"
              className="object-cover object-top"
            />
          </div>

          {/* Location Badge */}
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-lg">
            <p className="text-sm font-semibold text-slate-800">
              Based in Bangladesh 🇧🇩
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
