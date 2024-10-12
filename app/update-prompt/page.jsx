"use client";
import Form from "@components/Form/Form";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const EditPrompt = () => {
  // const router = useRouter();
  // const searchParams = useSearchParams();
  // const promptId = searchParams.get("id");
  // const [submitting, setSubmitting] = useState(false);
  // const [post, setPost] = useState({
  //   prompt: "",
  //   tag: "",
  // });
  // useEffect(() => {
  //   const getPrompt = async () => {
  //     const res = await fetch(`/api/prompt/${promptId}`);
  //     setPost(await res.json());
  //   };
  //   if (promptId) getPrompt();
  // }, [promptId]);
  // const updatePrompt = async e => {
  //   e.preventDefault();
  //   setSubmitting(true);
  //   if (!promptId) return alert("Missing PromptId!");
  //   try {
  //     const res = await fetch(`/api/prompt/${promptId}`, {
  //       method: "PATCH",
  //       body: JSON.stringify({
  //         prompt: post.prompt,
  //         tag: post.tag,
  //       }),
  //     });
  //     if (res.ok) {
  //       router.push("/");
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   } finally {
  //     setSubmitting(false);
  //   }
  // };
  // return (
  //   <Form
  //     type='Edit'
  //     post={post}
  //     setPost={setPost}
  //     submitting={submitting}
  //     handleSubmit={updatePrompt}
  //   />
  // );
};

export default EditPrompt;
