"use client";
import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "next/navigation";
import Profile from "@components/Profile/Profile";

const UserProfile = () => {
  const [posts, setPosts] = useState([]);
  const searchParams = useSearchParams();
  const params = useParams();
  const userName = searchParams.get("name");
  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/users/${params.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (params.id) fetchPost();
  }, [params.id]);

  return (
    <Profile
      name={userName}
      desc={`Welcome to ${userName}'s personalized profile page. Explore ${userName}'s exceptional prompts and be inspired by the power of their imagination`}
      data={posts}
    ></Profile>
  );
};

export default UserProfile;
