import React, { useState, Fragment } from "react";
import AddHomeworkForm from "./componentes/AddHomeworkForm/AddHomeworkForm";
import EditHomeworkForm from "./componentes/EditHomeworkForm/EditHomeworkForm";
import HomeworkTable from "./tables/HomeworkTable";
import styles from "./componentes/styles/App.css"
import Radium from 'radium';

const App = () => {

  const homeworksData = [
    {
      id: 1,
      name: "React js",
      description: "Create a react app with css modules"
    },
    {
      id: 2,
      name: "Core",
      description: "Read the reading of the week"
    }
  ];

  const initialFormState = { id: null, name: "", description: "" };


  const [homeworks, setHomeworks] = useState(homeworksData);
  const [currentHomework, setCurrentHomework] = useState(initialFormState);
  const [editing, setEditing] = useState(false);


  const addHomework = homework => {
    homework.id = homeworks.length + 1;
    setHomeworks([...homeworks, homework]);
  };

  const deleteHomework = id => {
    setEditing(false);

    setHomeworks(homeworks.filter(homework => homework.id !== id));
  };

  const updateHomework = (id, updateHomework) => {
    setEditing(false);

    setHomeworks(
      homeworks.map(homework =>
        homework.id === id ? updateHomework : homework
      )
    );
  };

  const editRow = homework => {
    setEditing(true);

    setCurrentHomework({
      id: homework.id,
      name: homework.name,
      description: homework.description
    });
  };

  return (
    <div className={styles.App}>
    <div className="container">
      <h1 className={styles.h2}>Things to do: </h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <Fragment>
              <h2>Edit homework</h2>
              <EditHomeworkForm
                editing={editing}
                setEditing={setEditing}
                currentHomework={currentHomework}
                updateHomework={updateHomework}
              />
            </Fragment>
          ) : (
            <Fragment>
              <h2>Add homework</h2>
              <AddHomeworkForm addHomework={addHomework} />
            </Fragment>
          )}
        </div>
      </div>
      <div className="flex-row">
        <div className="flex-large">
          <h2>View homeworks to do</h2>
          <HomeworkTable
            homeworks={homeworks}
            editRow={editRow}
            deleteHomework={deleteHomework}
          />
        </div>
      </div>
      </div>
    </div>
  );
};

export default Radium (App);
