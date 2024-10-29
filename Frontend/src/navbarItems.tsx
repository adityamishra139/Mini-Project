import { IconBook2, IconChartLine, IconHelp, IconHome, IconUserCircle } from '@tabler/icons-react';

export const links = [
    {
      title: "Home",
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Quiz",
      icon: <IconBook2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/quiz",
    },
    {
      title: "Performance",
      icon: <IconChartLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/performance",
    },
    {
      title: "Profile",
      icon: <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/profile",
    },
    {
      title: "Help",
      icon: <IconHelp className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/help",
    },
  ];