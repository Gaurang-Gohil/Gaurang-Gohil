import { ProjectCard, type Project } from '@/components/ui/ProjectCard';
import { SectionHeading } from '@/components/ui/SectionHeading';

const projects: Project[] = [
  {
    title: 'Kubernetes Deployment Blueprint',
    description:
      'A reusable production-ready Kubernetes deployment template with autoscaling, monitoring, and secure secret management.',
    techStack: ['Kubernetes', 'Helm', 'Prometheus', 'Grafana'],
    githubUrl: 'https://github.com/ronie/k8s-blueprint',
    liveUrl: 'https://example.com/k8s-blueprint',
  },
  {
    title: 'GitOps CI/CD Pipeline',
    description:
      'End-to-end CI/CD pipeline with GitOps workflows, pull-request previews, and controlled progressive deployments.',
    techStack: ['GitHub Actions', 'Argo CD', 'Terraform', 'AWS'],
    githubUrl: 'https://github.com/ronie/gitops-cicd',
    liveUrl: 'https://example.com/gitops-cicd',
  },
  {
    title: 'Infrastructure Cost Optimizer',
    description:
      'Automated reporting toolkit that identifies underutilized resources and recommends right-sizing actions.',
    techStack: ['Python', 'AWS Lambda', 'CloudWatch', 'Athena'],
    githubUrl: 'https://github.com/ronie/cost-optimizer',
    liveUrl: 'https://example.com/cost-optimizer',
  },
  {
    title: 'Service Reliability Dashboard',
    description:
      'Centralized observability dashboard for latency, error budgets, and deployment health across microservices.',
    techStack: ['OpenTelemetry', 'Grafana', 'Loki', 'Tempo'],
    githubUrl: 'https://github.com/ronie/reliability-dashboard',
    liveUrl: 'https://example.com/reliability-dashboard',
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" aria-labelledby="projects-heading">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work"
        description="A snapshot of projects that demonstrate automation, cloud operations, and production reliability."
      />
      <div id="projects-heading" className="grid gap-5 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} project={project} />
        ))}
      </div>
    </section>
  );
}
