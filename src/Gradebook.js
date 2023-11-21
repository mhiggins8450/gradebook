import React, { useRef, useState } from 'react';
import './Gradebook.css';

function Gradebook() {
  const [students, setStudents] = useState([]);
  const nameRef = useRef(null);
  const gradeRef = useRef(null);

  const addStudent = () => {
    const name = nameRef.current.value;
    const grade = gradeRef.current.value;

    if (name !== '' && grade !== '') {
      const newStudent = { name, grade };
      setStudents([...students, newStudent]);
      nameRef.current.value = '';
      gradeRef.current.value = '';
    }
  };

  return (
    <div className="gradebook">
      <h2>Gradebook</h2>
      <div className="input-section">
        <input type="text" placeholder="Enter student name" ref={nameRef} />
        <input type="text" placeholder="Enter grade" ref={gradeRef} />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <div className="students-table">
        <h3>Student Grades:</h3>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{student.name}</td>
                <td>{student.grade}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Gradebook;