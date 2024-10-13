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
  const [posts, setPosts] = useState([]);
  // search result
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("/api/prompt", {
        method: "GET",
      });
      const data = await res.json();
      setPosts(data);
    };
    fetchPost();
  }, []);

  const filterPosts = searchVal => {
    return posts.filter(
      post =>
        post.tag.includes(searchVal) ||
        post.prompt.includes(searchVal) ||
        post.creator.username.includes(searchVal)
    );
  };
  const handleSearchChange = e => {
    const searchVal = e.target.value;
    setSearchText(searchVal);
    setSearchResults(filterPosts(searchVal));
  };

  const handleTagClick = tag => {
    setSearchText(tag);
    setSearchResults(filterPosts(tag));
  };

  return (
    <section className={styles.feed}>
      <form className={`flex-center ${styles.feed__form}`}>
        <input
          className={`search_input ${styles.feed__input} ${styles["feed__input--peer"]}`}
          type='text'
          placeholder='Search for a tag, a prompt or a username'
          required
          onChange={handleSearchChange}
          value={searchText}
        ></input>
      </form>

      {searchText ? (
        <PromptCardList
          data={searchResults}
          handleTagClick={handleTagClick}
        ></PromptCardList>
      ) : (
        <PromptCardList
          data={posts}
          handleTagClick={handleTagClick}
        ></PromptCardList>
      )}
    </section>
  );
};

export default Feed;
