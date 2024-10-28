import { useEffect, useState } from "react";
import { authorizeCheck } from "../authorizedCheck";
import {
  IconChartLine,
  IconHome,
  IconHelp,
  IconUserCircle,
  IconBook2,
} from "@tabler/icons-react";
import { FloatingDock } from "../components/floatingNavbar";

const links = [
  {
    title: "Home",
    icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "/",
  },
  {
    title: "Profile",
    icon: <IconUserCircle className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Quiz",
    icon: <IconBook2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Performance",
    icon: <IconChartLine className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
  {
    title: "Help",
    icon: <IconHelp className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
    href: "#",
  },
];

function Home() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await authorizeCheck();
      setAuthorized(response);
      setLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading && !authorized) {
      window.location.href = '/signin'; 
    }
  }, [authorized, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col items-center h-screen">
        <div className="flex-grow flex items-center justify-center">
          <div className="text-center">This is the home page</div>
        </div>
      </div>
      <div className="fixed bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 left-4 mb-4">
        <FloatingDock items={links} />
      </div>
    </>
  );
}

export default Home;
