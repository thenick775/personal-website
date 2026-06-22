export interface Skill {
  label: string;
  href: string;
  icon: string;
}

export const skills: Skill[] = [
  { label: 'Golang', href: 'https://golang.org', icon: '/skills/golang.svg' },
  { label: 'Elixir', href: 'https://elixir-lang.org/', icon: '/skills/elixir.svg' },
  { label: 'PostgreSQL', href: 'https://www.postgresql.org', icon: '/skills/postgresql.svg' },
  { label: 'Docker', href: 'https://www.docker.com/why-docker', icon: '/skills/docker.svg' },
  { label: 'MariaDB', href: 'https://mariadb.com', icon: '/skills/mariadb.svg' },
  { label: 'MySQL', href: 'https://www.mysql.com', icon: '/skills/mysql.svg' },
  { label: 'Python', href: 'https://www.python.org', icon: '/skills/python.svg' },
  {
    label: 'Bash',
    href: 'https://www.gnu.org/software/bash/manual/bash.html#What-is-Bash_003f',
    icon: '/skills/bash.svg',
  },
  { label: 'Git', href: 'https://git-scm.com', icon: '/skills/git.svg' },
  { label: 'Java', href: 'https://www.java.com/', icon: '/skills/java.svg' },
  {
    label: 'Objective-C',
    href: 'https://developer.apple.com/library/archive/documentation/Cocoa/Conceptual/ProgrammingWithObjectiveC/Introduction/Introduction.html',
    icon: '/skills/objc.svg',
  },
  { label: 'Apache Airflow', href: 'https://airflow.apache.org', icon: '/skills/airflow.svg' },
  { label: 'Amazon Web Services', href: 'https://aws.amazon.com', icon: '/skills/aws.svg' },
  { label: 'React', href: 'https://react.dev/', icon: '/skills/react.svg' },
  { label: 'Javascript', href: 'https://www.javascript.com', icon: '/skills/javascript.svg' },
  { label: 'D3 Js', href: 'https://d3js.org', icon: '/skills/d3.svg' },
  { label: 'Django', href: 'https://www.djangoproject.com', icon: '/skills/django.png' },
  {
    label: 'Microfocus Cobol',
    href: 'https://www.microfocus.com/en-us/products/visual-cobol/overview',
    icon: '/skills/cobol.png',
  },
];
