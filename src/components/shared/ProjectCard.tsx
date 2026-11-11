
import Image from "next/image";
import Link from "next/link";

import {
  FiArrowUpRight,
  FiExternalLink,
  FiGithub,
  FiCheckCircle,
} from "react-icons/fi";

import {
  Card,
  CardContent,
} from "@/components/ui/card";

import { Badge } from "@/components/ui/badge";

import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
};

export default function ProjectCard({
  project,
}: ProjectCardProps) {
  return (
    <Card className="group flex h-full flex-col gap-0 overflow-hidden rounded-2xl border border-slate-200 bg-white py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-indigo-200 hover:shadow-lg">

      {/* Project Overview Image */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100">

        <Image
          src={project.image}
          alt={`${project.title} project overview`}
          fill
          sizes="(max-width: 767px) 100vw, (max-width: 1279px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Featured Badge */}
        {project.featured && (
          <Badge className="absolute left-4 top-4 z-10 rounded-full bg-indigo-600 px-3 py-1.5 text-xs text-white">
            Featured Project
          </Badge>
        )}

        {/* Image Overlay Link */}
        <Link
          href={project.liveUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${project.title} live website`}
          className="absolute right-4 top-4 z-10 flex size-10 items-center justify-center rounded-full bg-white/95 text-slate-800 shadow-md transition-all hover:bg-indigo-600 hover:text-white"
        >
          <FiArrowUpRight size={20} />
        </Link>
      </div>

      {/* Project Details */}
      <CardContent className="flex flex-1 flex-col p-5 sm:p-6">

        {/* Category */}
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-600">
          {project.category}
        </p>

        {/* Project Name */}
        <h3 className="text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-7 text-slate-600">
          {project.description}
        </p>

        {/* Key Features */}
        {project.features.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-slate-900">
              Key Features
            </h4>

            <ul className="space-y-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                >
                  <FiCheckCircle
                    size={16}
                    className="mt-1 shrink-0 text-indigo-600"
                    aria-hidden="true"
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}
        {project.technologies.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="rounded-md bg-slate-100 px-2.5 py-1.5 text-xs font-medium text-slate-700"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}

        {/* Action Buttons */}
        <div className="mt-auto flex flex-wrap gap-3 border-t border-slate-100 pt-5 sm:mt-7">

          {/* Live Demo */}
          <Link
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-indigo-700"
          >
            <FiExternalLink size={17} />
            Live Demo
          </Link>

          {/* GitHub Repository */}
          {project.githubUrl && (
            <Link
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-slate-800 transition-colors hover:border-indigo-300 hover:bg-indigo-50"
            >
              <FiGithub size={18} />
              GitHub
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
