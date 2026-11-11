
import { IconType } from "react-icons";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
  SiShadcnui,
} from "react-icons/si";

import {
  FiCode,
  FiDatabase,
  FiLayout,
  FiServer,
  FiGithub,
} from "react-icons/fi";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
} from "@/components/ui/card";

// Define TypeScript types
type Skill = {
  name: string;
  icon: IconType;
  color: string;
};

type SkillCategory = {
  title: string;
  description: string;
  icon: IconType;
  skills: Skill[];
};

// Skills data
const skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    description: "Building responsive user interfaces.",
    icon: FiLayout,
    skills: [
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-500",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-slate-900",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-600",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-500",
      },
    ],
  },
  {
    title: "Backend Development",
    description: "Developing APIs and server-side logic.",
    icon: FiServer,
    skills: [
      {
        name: "Node.js",
        icon: SiNodedotjs,
        color: "text-green-600",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-slate-800",
      },
      {
        name: "REST APIs",
        icon: FiCode,
        color: "text-indigo-600",
      },
    ],
  },
  {
    title: "Database & Authentication",
    description: "Managing application data and access.",
    icon: FiDatabase,
    skills: [
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-600",
      },
      {
        name: "Better Auth",
        icon: FiDatabase,
        color: "text-indigo-600",
      },
    ],
  },
  {
    title: "UI & Developer Tools",
    description: "Creating consistent designs and workflows.",
    icon: FiCode,
    skills: [
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-cyan-500",
      },
      {
        name: "shadcn/ui",
        icon: SiShadcnui,
        color: "text-slate-900",
      },
      {
        name: "React Icons",
        icon: FiLayout,
        color: "text-indigo-600",
      },
      {
        name: "GitHub",
        icon: FiGithub,
        color: "text-slate-900",
      },
    ],
  },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="scroll-mt-20 bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            My Tech Stack
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Technical Skills
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
            Technologies and tools I use to build
            responsive and functional web applications.
          </p>

          <div className="mx-auto mt-5 h-1 w-14 rounded-full bg-indigo-600" />
        </div>

        {/* Skill Category Cards */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <Card
                key={category.title}
                className="gap-0 rounded-2xl border-slate-200 bg-slate-50/60 py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-md"
              >
                <CardContent className="p-6 sm:p-8">
                  {/* Category Heading */}
                  <div className="mb-6 flex items-start gap-4">
                    <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
                      <CategoryIcon size={23} />
                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-slate-900">
                        {category.title}
                      </h3>

                      <p className="mt-1 text-sm text-slate-500">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Individual Skills */}
                  <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon;

                      return (
                        <div
                          key={skill.name}
                          className="flex min-h-24 flex-col items-center justify-center gap-3 rounded-xl border border-slate-200 bg-white p-3 text-center transition-all duration-200 hover:border-indigo-200 hover:shadow-sm"
                        >
                          <SkillIcon
                            size={27}
                            className={skill.color}
                            aria-hidden="true"
                          />

                          <span className="text-xs font-semibold text-slate-700 sm:text-sm">
                            {skill.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom Text */}
        <div className="mt-12 text-center">
          <Badge
            variant="secondary"
            className="rounded-full bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700"
          >
            Continuously learning and improving
          </Badge>
        </div>
      </div>
    </section>
  );
}
