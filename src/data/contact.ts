export interface ContactLink {
  label: string;
  href: string;
  icon: 'linkedin' | 'email' | 'github' | 'resume';
  external?: boolean;
}

export const contactLinks: ContactLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/in/nicholas-vancise-65381619b',
    icon: 'linkedin',
    external: true,
  },
  {
    label: 'Email',
    href: 'mailto:nvancisedev@gmail.com',
    icon: 'email',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/thenick775',
    icon: 'github',
    external: true,
  },
  {
    label: 'Resume',
    href: 'https://thenick775.github.io/resume_latex/resume.pdf',
    icon: 'resume',
    external: true,
  },
];
