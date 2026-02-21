import { SectionHeading } from '@/components/ui/SectionHeading';
import { SkillGroup } from '@/components/ui/SkillGroup';

const skillData = [
  {
    category: 'Cloud',
    skills: ['AWS', 'Azure', 'DigitalOcean', 'Cloud Architecture'],
  },
  {
    category: 'CI/CD',
    skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'Argo CD'],
  },
  {
    category: 'Containers',
    skills: ['Docker', 'Kubernetes', 'Helm', 'Container Security'],
  },
  {
    category: 'Tools',
    skills: ['Terraform', 'Ansible', 'Linux', 'Prometheus'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" aria-labelledby="skills-heading">
      <SectionHeading
        eyebrow="Skills"
        title="Core capabilities"
        description="Tools and platforms I use to build secure and scalable delivery systems."
      />
      <div id="skills-heading" className="grid gap-5 sm:grid-cols-2">
        {skillData.map((group) => (
          <SkillGroup key={group.category} category={group.category} skills={group.skills} />
        ))}
      </div>
    </section>
  );
}
