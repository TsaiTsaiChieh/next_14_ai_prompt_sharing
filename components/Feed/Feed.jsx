"use client";

import { useEffect, useState } from "react";
import styles from "./Feed.module.css";
import PromptCard from "@components/PromptCard/PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='prompt_layout'>
      {data.map(ele => (
        <PromptCard
          key={ele._id}
          post={ele}
          handleTagClick={handleTagClick}
        ></PromptCard>
      ))}
    </div>
  );
};
const Feed = () => {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("/api/prompt", { method: "GET" });
      const data = await res.json();
      setPosts(data);
    };
    fetchPost();
  }, []);
  const handleSearchChange = e => {
    setSearchText(e.target.value);
  };

  return (
    <section className={styles.feed}>
      <form className={`flex-center ${styles.feed__form}`}>
        <input
          className={`search_input ${styles.feed__input} ${styles["feed__input--peer"]}`}
          type='text'
          placeholder='Search for a tag or a username'
          required
          onChange={handleSearchChange}
          value={searchText}
        ></input>
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}}></PromptCardList>
    </section>
  );
};

export default Feed;
