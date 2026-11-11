
import {
  FiBookOpen,
  FiCode,
} from "react-icons/fi";

import { FaGraduationCap } from "react-icons/fa";

import {
  Card,
  CardContent,
} from "@/components/ui/card";



const education = [
  {
    title: "Master's in Political Science",
    institution: "Lakshmipur Government College",
    status: "Currently Pursuing",
    description:
      "Currently pursuing a Master's degree in Political Science while developing professional skills in full-stack web development.",
    icon: FaGraduationCap,
  },
  {
    title: "Bachelor's (Honours) in Political Science",
    institution: "Gridakalindia Hazera Hasmat Degree College",
    status: "Completed",
    description:
      "Completed my Bachelor's (Honours) degree in Political Science, developing research, analytical thinking, and communication skills.",
    icon: FiBookOpen,
  },
  {
    title: "Full Stack Web Development",
    institution: "Programming Hero",
    status: "Batch 14 | Ongoing",
    description:
      "Learning and building modern web applications using React, Next.js, TypeScript, Express.js, MongoDB, and related technologies.",
    icon: FiCode,
  },
];


export default function Education() {
  return (
    <section
      id="education"
      className="scroll-mt-20 bg-slate-50 py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Academic Background
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Education & Training
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            My academic qualifications and continuous
            learning journey.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-indigo-600" />
        </div>

        {/* Education Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {education.map((item) => {
            const Icon = item.icon;

            return (
              <Card
                key={item.title}
                className="gap-0 rounded-2xl border-slate-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <CardContent className="p-6">

                  <div className="mb-5 flex size-14 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                    <Icon size={27} />
                  </div>

                  <span className="inline-block rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    {item.status}
                  </span>

                  <h3 className="mt-4 text-xl font-bold text-slate-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-sm font-medium text-slate-600">
                    {item.institution}
                  </p>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
