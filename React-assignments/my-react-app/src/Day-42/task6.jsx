import React from "react";

function ProfileCard({ name, job, avatar }) {
  return (
    <div style={styles.card}>
      <img src={avatar} alt={`${name}'s avatar`} style={styles.avatar} />
      <h2>{name}</h2>
      <p>{job}</p>
    </div>
  );
}

const styles = {
  card: {
    width: "250px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    padding: "16px",
    textAlign: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  avatar: {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "12px",
  },
};

export default ProfileCard;
