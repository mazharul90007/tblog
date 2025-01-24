"use client"; // Make this a client-side component

import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useKindeAuth } from "@kinde-oss/kinde-auth-nextjs"; // Assuming you are using Kinde

const Profile = () => {
  const { isAuthenticated, user } = useKindeAuth(); // This hook provides authentication status
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      const authenticated = await isAuthenticated();  // Check if the user is authenticated
      if (!authenticated) {
        router.push("/api/auth/login"); // Redirect to login if not authenticated
      } else {
        setLoading(false); // Set loading to false once authentication is confirmed
      }
    };
    
    checkAuth(); // Call the authentication check
  }, [router, isAuthenticated]); // Ensure it only runs on mount

  // Render a loading state or the profile page if authenticated
  if (loading) {
    return <div>Loading...</div>; // Show loading while checking authentication
  }

  return (
    <div className="my-20">
      <h3 className="text-4xl font-semibold text-center">
        Welcome <span className="text-amber-600">{user?.given_name} {user?.family_name}</span>
      </h3>
      <p className="text-2xl text-center font-semibold my-4">to</p>
      <p className="text-5xl text-center font-bold text-amber-600">miBlog</p>
    </div>
  );
};

export default Profile;
