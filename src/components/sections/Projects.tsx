
import ProjectCard from "@/components/shared/ProjectCard";

import { projects } from "@/data/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 bg-slate-50 py-20 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">

        {/* Section Heading */}
        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
            My Selected Work
          </p>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600">
            Explore a selection of web applications
            I've built using modern frontend and
            backend technologies, with a focus on
            functionality, usability, and clean design.
          </p>

          <div className="mx-auto mt-6 h-1 w-14 rounded-full bg-indigo-600" />
        </div>

        {/* Projects Grid */}
        <div className="grid items-stretch gap-7 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>

        {/* Bottom Description */}
        <p className="mx-auto mt-12 max-w-2xl text-center text-sm leading-7 text-slate-500">
          Each project represents a different part of
          my development journey, from building user
          interfaces to implementing full-stack
          functionality.
        </p>
      </div>
    </section>
  );
}
