"use client";
import Image from "next/image";
import styles from "./PromptCard.module.css";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const PromptCard = ({ post, handleTagClick, handleEdit, handleDelete }) => {
  const { data: session } = useSession();
  const [copied, setCopied] = useState("");
  const pathName = usePathname();
  const router = useRouter();

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };

  const handleProfileClick = () => {
    post.creator._id === session?.user.id
      ? router.push("/profile")
      : router.push(
          `/profile/${post.creator._id}?name=${post.creator.username}`
        );
  };
  return (
    <div className={styles.promptCard}>
      <div className={styles.promptCard__header}>
        <div
          className={styles.promptCard__profile}
          onClick={handleProfileClick}
        >
          <Image
            className={styles.promptCard__profileImage}
            src={post.creator.image}
            alt='user_image'
            width={40}
            height={40}
          ></Image>
          <div className={styles.promptCard__info}>
            <h3 className={styles.promptCard__username}>
              {post.creator.username}
            </h3>
            <p className={styles.promptCard__email}>{post.creator.email}</p>
          </div>
        </div>

        <div className='copy_btn' onClick={handleCopy}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          ></Image>
        </div>
      </div>

      <p className={styles.promptCard__content}>{post.prompt}</p>
      <p
        className={`blue_gradient ${styles.promptCard__tag}`}
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === "/profile" && (
        <div className={`flex-center ${styles.promptCard__actions}`}>
          <p
            className={`green_gradient ${styles.promptCard__edit}`}
            onClick={handleEdit}
          >
            Edit
          </p>
          <p
            className={`orange_gradient ${styles.promptCard__delete}`}
            onClick={handleDelete}
          >
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
