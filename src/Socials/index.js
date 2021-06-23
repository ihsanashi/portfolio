import {
  RiGithubFill,
  RiGitlabFill,
  RiLinkedinBoxFill,
  RiMailFill,
} from 'react-icons/ri';

const iconSize = 20;
const iconStyles = 'text-gray-500 group-hover:text-primary-500';

export const Socials = [
  {
    id: 'github',
    title: 'Github',
    icon: <RiGithubFill size={iconSize} className={iconStyles} />,
    url: 'https://github.com/ihsanashi',
  },
  {
    id: 'gitlab',
    title: 'Gitlab',
    icon: <RiGitlabFill size={iconSize} className={iconStyles} />,
    url: 'https://gitlab.com/ihsanashi',
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
