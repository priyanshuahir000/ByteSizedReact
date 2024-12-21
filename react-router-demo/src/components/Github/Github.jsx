import React, { useState, useEffect } from "react";

const Github = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/priyanshuahir000`
        );
        if (!response.ok) {
          throw new Error("User not found");
        }
        const data = await response.json();
        setUserData(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">Error: {error}</div>;
  }

  return (
    <div className="max-w-md mx-auto my-10 bg-white shadow-md rounded-lg overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={userData.avatar_url}
            alt={userData.name}
          />
        </div>
        <div className="p-8">
          <h1 className="text-2xl font-bold text-gray-900">{userData.name}</h1>
          <p className="mt-2 text-gray-600">{userData.bio}</p>
          <p className="mt-2 text-gray-600">Location: {userData.location}</p>
          <p className="mt-2 text-gray-600">
            Public Repos: {userData.public_repos}
          </p>
          <p className="mt-2 text-gray-600">Followers: {userData.followers}</p>
          <p className="mt-2 text-gray-600">Following: {userData.following}</p>
          <a
            href={userData.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-blue-500 hover:text-blue-700"
          >
            View Profile
          </a>
        </div>
      </div>
    </div>
  );
};

export default Github;
