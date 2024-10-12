"use client";
import Image from "next/image";
import styles from "./PromptCard.module.css";
import { useState } from "react";

const PromptCard = ({ post, handleTagClick }) => {
  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => {
      setCopied("");
    }, 3000);
  };
  return (
    <div className={styles.promptCard}>
      <div className={styles.promptCard__header}>
        <div className={styles.promptCard__profile}>
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

        <div className='copy_btn' onClick={() => {}}>
          <Image
            src={
              copied === post.prompt
                ? "/assets/icons/tick.svg"
                : "/assets/icons/copy.svg"
            }
            alt={copied === post.prompt ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
            onClick={handleCopy}
          ></Image>
        </div>
      </div>

      <p className={styles.promptCard__content}>{post.prompt}</p>
      <p
        className={`blue_gradient ${styles.promptCard__tag}`}
        onClick={handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>
    </div>
  );
};

export default PromptCard;
