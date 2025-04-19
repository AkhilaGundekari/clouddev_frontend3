import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('https://akhilag-fce3dmaee7a5avay.centralus-01.azurewebsites.net/api/students')

      .then(res => res.json())
      .then(data => setStudents(data))
      .catch(err => console.error('Error fetching students:', err));
  }, []);

  return (
    <div className="App">
      <h1>Student List of Akhila Gundekari</h1>
      <table border="1" cellPadding="10" className="center-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.age}</td>
              <td>{student.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;

