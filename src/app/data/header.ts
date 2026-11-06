/**
 * Text and links for the top header. Edit them here, not in the template.
 * See CLAUDE.md, section 2.
 */
export interface HeaderLink {
  readonly label: string;
  readonly path: string;
}

export interface HeaderSocial {
  readonly label: string;
  readonly href: string;
  readonly icon: 'instagram' | 'facebook';
}

export interface HeaderContent {
  readonly brand: string;
  readonly links: readonly HeaderLink[];
  readonly socials: readonly HeaderSocial[];
}

export const HEADER: HeaderContent = {
  brand: "Bartender's Journey",
  links: [
    { label: 'Home', path: '/' },
    { label: 'Drinks', path: '/drinks' },
    { label: 'About', path: '/about' },
  ],
  socials: [
    { label: 'Instagram', href: 'https://www.instagram.com/', icon: 'instagram' },
    { label: 'Facebook', href: 'https://www.facebook.com/', icon: 'facebook' },
  ],
};
