import Link from 'next/link';

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl: string;
}

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="panel flex h-full flex-col p-6 transition-colors duration-200 hover:border-accent/70">
      <h3 className="text-xl font-semibold text-slate-100">{project.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} tech stack`}>
        {project.techStack.map((tech) => (
          <li key={tech} className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-200">
            {tech}
          </li>
        ))}
      </ul>

      <div className="mt-6 flex gap-4 text-sm">
        <Link
          href={project.githubUrl}
          className="text-accent underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          GitHub
        </Link>
        <Link
          href={project.liveUrl}
          className="text-slate-200 underline-offset-4 hover:underline"
          target="_blank"
          rel="noreferrer"
        >
          Live Demo
        </Link>
      </div>
    </article>
  );
}
