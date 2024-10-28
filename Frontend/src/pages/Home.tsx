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
import Testimonials from "../components/Testimonials";
import Hero from "../components/Hero";
import Features from "../components/Features";
import Footer from "../components/Footer";
import axios from "axios";
import { BACKEND_URL } from "../config";

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
  const [user, setUser] = useState(null); // Initialize as null
  const [userId,setUserId] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      const response = await authorizeCheck();
      if (response === -1) {
        setAuthorized(false);
      } else {
        setUserId(response)
        setAuthorized(true);
      }
      setLoading(false);
    };
    checkAuth();
  }, []);

  useEffect(() => {
    if (!loading && !authorized) {
      window.location.href = '/signin'; 
    }
    console.log(userId)
    const getUserDetails = async () => {
      try {
        const response = await axios.get(`${BACKEND_URL}/getUser`,{
          data:{
            id:userId
          }
        });
        setUser(response.data);
      } catch (e) {
        console.error("Error in getting user detail:", e);
        // You might want to set an error state or show a message to the user
      }
    };

    if (authorized) {
      getUserDetails();
    }
  }, [authorized, loading]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Loading...</div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="text-center">Error fetching user details.</div>
      </div>
    );
  }

  return (
    <>
      <div className="flex flex-col w-full items-center">
        <div>
          <Hero name={user} />
          <Features />
          <Testimonials />
          <Footer />
        </div>
      </div>
      <div className="fixed bottom-0 md:left-1/2 md:transform md:-translate-x-1/2 left-4 mb-4">
        <FloatingDock items={links} />
      </div>
    </>
  );
}

export default Home;
