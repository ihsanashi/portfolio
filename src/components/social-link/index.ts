import type { JSX } from 'astro/jsx-runtime';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandMatrix,
  IconMail,
  type IconProps,
} from '@tabler/icons-react';
import type { ForwardRefExoticComponent, RefAttributes, SVGProps } from 'react';

export type TSocialLink = {
  href: string | URL;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
  label: string;
  target?: JSX.HTMLAttributeAnchorTarget;
};

export const SOCIAL_LINKS: TSocialLink[] = [
  {
    href: 'mailto:me@ahmadihsan.com',
    icon: IconMail,
    label: 'Email',
  },
  {
    href: 'https://github.com/ihsanashi',
    icon: IconBrandGithub,
    label: 'GitHub',
    target: '_blank',
  },
  {
    href: 'https://linkedin.com/in/ahmadihsan7',
    icon: IconBrandLinkedin,
    label: 'LinkedIn',
    target: '_blank',
  },
  {
    href: 'https://matrix.to/#/@ahmadihsan:matrix.org',
    icon: IconBrandMatrix,
    label: 'Matrix',
    target: '_blank',
  },
];
