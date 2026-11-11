
import {
  FiCode,
  FiBookOpen,
  FiCheckCircle,
} from "react-icons/fi";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

type ExperienceItem = {
  id: number;
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  icon: typeof FiCode;
};

const experiences: ExperienceItem[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    organization: "Programming Hero | Batch 14",
    period: "Currently Learning",
    description:
      "Developing practical skills in modern frontend and backend development through hands-on projects and structured learning.",
    highlights: [
      "Building responsive React and Next.js applications",
      "Developing REST APIs using Express.js",
      "Working with MongoDB and authentication",
      "Practicing reusable components and clean code",
    ],
    icon: FiCode,
  },
  {
    id: 2,
    title: "Teaching Professional",
    organization: "Education Sector",
    period: "Previous Experience",
    description:
      "Worked in the teaching profession before transitioning into web development, gaining valuable communication, mentoring, and organizational skills.",
    highlights: [
      "Communicating complex topics clearly",
      "Planning and delivering learning activities",
      "Mentoring and supporting students",
      "Developing patience and problem-solving skills",
    ],
    icon: FiBookOpen,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-5xl px-5 sm:px-8">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            My Journey
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            My professional background and journey
            into modern web development.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-indigo-600" />
        </div>

        {/* Experience Timeline */}
        <div className="relative ml-3 border-l-2 border-indigo-100 pl-7 sm:ml-6 sm:pl-10">
          <div className="space-y-8">
            {experiences.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.id} className="relative">

                  {/* Timeline Dot */}
                  <div className="absolute -left-[43px] top-7 flex size-7 items-center justify-center rounded-full border-4 border-white bg-indigo-600 shadow-sm sm:-left-[59px]">
                    <div className="size-2 rounded-full bg-white" />
                  </div>

                  <Card className="gap-0 rounded-2xl border-slate-200 bg-slate-50/70 py-0 shadow-sm transition-shadow hover:shadow-md">
                    <CardContent className="p-6 sm:p-8">

                      <div className="flex flex-wrap items-start justify-between gap-4">
                        <div className="flex items-start gap-4">

                          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                            <Icon size={23} />
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-slate-900 sm:text-xl">
                              {item.title}
                            </h3>

                            <p className="mt-1 text-sm font-medium text-slate-600">
                              {item.organization}
                            </p>
                          </div>
                        </div>

                        <span className="rounded-full bg-indigo-50 px-3 py-1.5 text-xs font-semibold text-indigo-700">
                          {item.period}
                        </span>
                      </div>

                      <p className="mt-5 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {item.highlights.map((highlight) => (
                          <li
                            key={highlight}
                            className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                          >
                            <FiCheckCircle
                              size={17}
                              className="mt-1 shrink-0 text-indigo-600"
                            />

                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
