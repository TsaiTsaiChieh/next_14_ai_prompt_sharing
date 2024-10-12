"use client";
import { useEffect, useState } from "react";
import Profile from "../../components/Profile/Profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const MyProfile = () => {
  const { data: session } = useSession();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (session?.user.id) fetchPost();
  }, [session?.user.id]);

  const handleEdit = post => {
    router.push(`/update-prompt?id=${post._id}`);
  };
  const handleDelete = async post => {
    const hasConfirm = confirm("Are you sure you want to delete this prompt");
    if (hasConfirm) {
      try {
        await fetch(`/api/prompt/${post._id}`, { method: "DELETE" });
        // refresh the post data
        const filterPosts = posts.filter(p => p._id !== post._id);
        setPosts(filterPosts);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={posts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    ></Profile>
  );
};

export default MyProfile;
