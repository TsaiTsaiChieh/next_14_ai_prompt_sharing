import PromptCard from "@components/PromptCard/PromptCard";
import styles from "./Profile.module.css";

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className={styles.ProfileSection}>
      <h1 className={`head_text ${styles.ProfileSection__header}`}>
        <span className='blue_gradient'> {name} Profile</span>
      </h1>
      <p className={`desc ${styles.ProfileSection__desc}`}>{desc}</p>

      <div className={`prompt_layout ${styles.profileSection__promptLayout}`}>
        {data.map(post => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
