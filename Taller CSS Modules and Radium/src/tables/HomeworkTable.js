import React from "react";
import styles from "../tables/HomeworkTable.css"

const HomeworkTable = props => (
  <table>
    <thead>
      <tr>
        <th>Class name</th>
        <th>Description</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {props.homeworks.length > 0 ? (
        props.homeworks.map(homework => (
          <tr key={homework.id}>
            <td>{homework.name}</td>
            <td>{homework.description}</td>
            <td>
              <button
                onClick={() => {
                  props.editRow(homework);
                }}
                className={styles.btnb}
              >
                Edit
              </button>
              <button
                onClick={() => props.deleteHomework(homework.id)}
                className={styles.btng}
              >
                Complete
              </button>
            </td>
          </tr>
        ))
      ) : (
        <tr>
          <td colSpan={3}>No homeworks to do</td>
        </tr>
      )}
    </tbody>
  </table>
);

export default HomeworkTable;
