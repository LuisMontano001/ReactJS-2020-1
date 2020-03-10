import React, { useState, useEffect } from "react";
import styles from "../EditHomeworkForm/EditHomeworkForm.css"

const EditHomeworkForm = props => {
  const [homework, setHomework] = useState(props.currentHomework);

  useEffect(() => {
    setHomework(props.currentHomework);
  }, [props]);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setHomework({ ...homework, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();

        props.updateHomework(homework.id, homework);
      }}
    >
      <label>Homework</label>
      <input
        type="text"
        name="name"
        value={homework.name}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        className={styles.label}
        type="text"
        name="description"
        value={homework.description}
        onChange={handleInputChange}
      />
      <button>Update homework</button>
      <button 
        className={styles.press}
        onClick={() => props.setEditing(false)}

      >
        Cancel
      </button>
    </form>
  );
};

export default EditHomeworkForm;
