export interface Skill {
  icon: string;
  title: string;
  description: string;
  image?: string;
}

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveDemo: string;
  github: string;
  image?: string;
  video?: string;
}

export interface Hobby {
  title: string;
  description: string;
  icon: string;
  image?: string;
}
