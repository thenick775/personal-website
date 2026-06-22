export const site = {
  title: 'Nicholas VanCise',
  description: 'The home of my personal website',
  language: 'en-us',
  hero: {
    eyebrow: 'personal website',
    heading:
      "I'm a full stack developer, with a bias towards back-end distributed computing.",
  },
  about: {
    title: 'About Me',
    paragraphs: [
      'My name is Nicholas VanCise, and puzzles are my favorite pastime!',
      "Currently I'm working on my masters at the University of Nevada Las Vegas, as well as pursuing my dreams as a software engineer.",
      'In addition to this, in my own time I dabble in emulator development, webscraping, data visualization, and infrastructure programming.',
      "When I'm not studying or working on my personal projects I spend my time enjoying nature, reading science fiction, and working on classic vehicles!",
    ] as string[],
  },
  contact: {
    title: 'Contact me',
    intro:
      "Feel free to message me through any of the means listed below! I'm always looking for constructive feedback and am happy to answer any questions.",
  },
} as const;
