
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiCode,
  FiUser,
} from "react-icons/fi";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

const highlights = [
  {
    title: "Education",
    description: "Honours Completed, Master's Ongoing",
    icon: FiBookOpen,
  },
  {
    title: "Development",
    description: "Full Stack Web Development",
    icon: FiCode,
  },
  {
    title: "Background",
    description: "Teaching & Communication",
    icon: FiUser,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Get To Know Me
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            About Me
          </h2>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-indigo-600" />
        </div>

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left: About Image */}
          <div className="relative mx-auto w-full max-w-md lg:mx-0">

            {/* Background Decoration */}
            <div className="absolute -bottom-4 -right-4 h-full w-full rounded-3xl bg-indigo-100" />

            {/* Profile Photo */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-slate-200 shadow-lg">
              <Image
                src="/image/Image-2.png"
                alt="Nur Alam"
                fill
                sizes="(max-width: 487px) calc(100vw - 40px), 448px"
                className="object-cover object-center"
              />
            </div>

            {/* Small Floating Card */}
            <div className="absolute -bottom-6 left-4 rounded-xl border border-slate-100 bg-white px-5 py-4 shadow-lg sm:left-8">
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-indigo-50 p-3 text-indigo-600">
                  <FiCode size={22} />
                </div>

                <div>
                  <p className="text-sm font-bold text-slate-900">
                    Full Stack
                  </p>
                  <p className="text-xs text-slate-500">
                    Web Developer
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: About Content */}
          <div className="pt-8 lg:pt-0">

            <Badge
              variant="outline"
              className="mb-5 rounded-full border-indigo-200 bg-indigo-50 px-4 py-1.5 text-indigo-700"
            >
              My Journey
            </Badge>

            <h3 className="mb-6 text-2xl font-bold leading-snug text-slate-900 sm:text-3xl">
              From Teaching to Building
              <span className="text-indigo-600">
                {" "}Digital Experiences.
              </span>
            </h3>

            <div className="space-y-4 text-base leading-8 text-slate-600">
              <p>
                I&apos;m Nur Alam, a passionate Full Stack Web
                Developer focused on building modern,
                responsive, and user-friendly web
                applications.
              </p>

              <p>
                Before moving into web development, I
                spent several years in the teaching
                profession. This experience helped me
                develop strong communication, patience,
                problem-solving, and teamwork skills.
              </p>

              <p>
                I have completed my Honours degree and
                am currently pursuing my Master&apos;s.
                I&apos;m also developing my technical skills
                through Programming Hero, Batch 14.
              </p>

              <p>
                I enjoy transforming ideas into practical
                digital solutions using React, Next.js,
                Express.js, and MongoDB.
              </p>
            </div>

            {/* Highlights */}
            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <Card
                    key={item.title}
                    className="gap-0 border-slate-200 bg-white py-0 shadow-sm"
                  >
                    <CardContent className="p-4">
                      <Icon
                        size={22}
                        className="mb-3 text-indigo-600"
                      />

                      <h4 className="text-sm font-bold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-2 text-xs leading-5 text-slate-500">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Link */}
            <div className="mt-8">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
              >
                Let&apos;s Work Together
                <FiArrowUpRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
