import React, { useState } from "react";
import styles from "../AddHomeworkForm/AddH.css"
import Radium from 'radium';

const AddHomeworkForm = props => {
  const initialFormState = { id: null, name: "", description: "" };
  const [homework, setHomework] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;

    setHomework({ ...homework, [name]: value });
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        if (!homework.name || !homework.description) return;

        props.addHomework(homework);
        setHomework(initialFormState);
      }}
    >
      <label>Class name</label>
      <input className={styles.input}
        type="text"
        name="name"
        value={homework.name}
        onChange={handleInputChange}
      />
      <label>Description</label>
      <input
        type="text"
        name="description"
        value={homework.description}
        onChange={handleInputChange}
      />
      <button>Add new homework</button>
    </form>
  );
};

export default Radium(AddHomeworkForm);
