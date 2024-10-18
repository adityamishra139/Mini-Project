import { useEffect, useState } from "react";
import { authorizeCheck } from "../authorizedCheck";

function Home() {
  const [authorized, setAuthorized] = useState(false);
  const [loading, setLoading] = useState(true); // Add loading state

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
      alert('You are not logged in');
      window.location.href = '/signin'; 
    }
  }, [authorized, loading]); 

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>This is the home page</div>
  );
}

export default Home;
