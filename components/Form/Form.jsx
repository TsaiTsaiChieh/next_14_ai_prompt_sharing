"use client";

import Link from "next/link";
import styles from "./Form.module.css";

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className={styles.formSection}>
      <h1 className={`head_text ${styles.formSection__title}`}>
        <span className='blue_gradient'>{type} Post</span>
      </h1>
      <p className={`desc ${styles.formSection__description}`}>
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform.
      </p>

      <form
        onSubmit={handleSubmit}
        className={`glassmorphism ${styles.formSection__form}`}
      >
        <label>
          <span className={styles.formSection__label}>Your AI Prompt</span>t
          <textarea
            className='form_textarea'
            value={post.prompt}
            onChange={e => setPost({ ...post, prompt: e.target.value })}
            placeholder='Write your prompt here...'
            required
          ></textarea>
        </label>
        <label>
          <span className={styles.formSection__label}>Tag {` `}</span>
          <span className={styles.formSection__labelText}>
            (#product, #web development, #idea)
          </span>

          <input
            className='form_input'
            value={post.tag}
            onChange={e => setPost({ ...post, tag: e.target.value })}
            placeholder='#tag'
            required
          ></input>
        </label>

        <div className={styles.formSection__buttons}>
          <Link className={styles.formSection__cancel} href='/'>
            Cancel
          </Link>
          <button
            className={styles.formSection__submit}
            type='submit'
            disabled={submitting}
          >
            {submitting ? `${type}...` : `${type}`}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
