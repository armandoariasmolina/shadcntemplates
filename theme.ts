export interface Template {
  title: string;
  author: string;
  avatarUrl: string;
  demoUrl: string;
  description: string;
  distribution: 'open-source' | 'premium';
  themeKey: string;
  category: string[];

  // GitHub-based theme properties (optional)
  githubUrl?: string;

  // Premium theme properties (optional)
  affiliateUrl?: string;

  // Disabled theme property (optional)
  disabled?: boolean;
}