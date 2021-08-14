import { RiGithubFill, RiLinkedinBoxFill, RiMailFill } from 'react-icons/ri';

const iconSize = 20;
const iconStyles =
  'text-gray-400 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400';

export const Socials = [
  {
    id: 'github',
    title: 'Github',
    icon: <RiGithubFill size={iconSize} className={iconStyles} />,
    url: 'https://github.com/ihsanashi',
  },
  {
    id: 'linkedin',
    title: 'LinkedIn',
    icon: <RiLinkedinBoxFill size={iconSize} className={iconStyles} />,
    url: 'https://www.linkedin.com',
  },
  {
    id: 'email',
    title: 'Email',
    icon: <RiMailFill size={iconSize} className={iconStyles} />,
    url: 'mailto:hello@ahmadihsan.com',
  },
];
