interface SkillGroupProps {
  category: string;
  skills: string[];
}

export function SkillGroup({ category, skills }: SkillGroupProps) {
  return (
    <article className="panel p-6">
      <h3 className="text-lg font-semibold text-slate-100">{category}</h3>
      <ul className="mt-4 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li key={skill} className="rounded-lg bg-slate-800 px-3 py-2 text-sm text-slate-200">
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}
