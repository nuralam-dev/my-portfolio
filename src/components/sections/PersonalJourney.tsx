
import Image from "next/image";

import {
  FiBookOpen,
  FiCode,
  FiArrowUpRight,
} from "react-icons/fi";

import Link from "next/link";

export default function PersonalJourney() {
  return (
    <section
      id="journey"
      className="bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Beyond the Code
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              More Than Just
              <span className="text-indigo-600">
                {" "}a Developer.
              </span>
            </h2>

            <p className="text-base leading-8 text-slate-600">
              I'm Nur Alam, a web developer with
              a background in education and a
              strong interest in continuous learning.
            </p>

            <p className="text-base leading-8 text-slate-600">
              My journey began in teaching, where
              I developed communication, patience,
              and problem-solving skills.
              Today, I apply those experiences
              while learning and building modern
              web applications.
            </p>

            {/* Highlights */}
            <div className="space-y-4 pt-2">

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <FiBookOpen size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Background in Education
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Experience in teaching, mentoring,
                    and communicating ideas.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-xl bg-indigo-50 p-3 text-indigo-600">
                  <FiCode size={22} />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Passion for Development
                  </h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Exploring technology and building
                    meaningful digital experiences.
                  </p>
                </div>
              </div>
            </div>

            <Link
              href="#contact"
              className="inline-flex items-center gap-2 pt-3 text-sm font-semibold text-indigo-600 transition-colors hover:text-indigo-700"
            >
              Let's Connect
              <FiArrowUpRight size={18} />
            </Link>
          </div>

          {/* Right Image Gallery */}
          <div className="grid grid-cols-2 items-center gap-4">

            {/* First Photo */}
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-md">
              <Image
                src="/image/Image-3.png"
                alt="Nur Alam personal journey"
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover"
              />
            </div>

            {/* Second Photo */}
            <div className="relative mb-12 aspect-[3/4] overflow-hidden rounded-2xl bg-slate-100 shadow-md">
              <Image
                src="/image/Image-4.png"
                alt="Nur Alam beyond the code"
                fill
                sizes="(max-width: 1024px) 45vw, 260px"
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
