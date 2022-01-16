import React from 'react';
// import { useNavigate } from 'react-router-dom';

const TableRows = ({ users, setUser }) => {
  // let navigate = useNavigate();
  const handleSubmit = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    if (response.ok) {
      const data = await response.json();
      // console.log(data);
      setUser(data);
      // navigate(`/user`);
    }
  };
  return (
    <>
      {users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.status ? 'true' : 'false'}</td>
          <td>
            <input
              type='submit'
              className='button'
              onClick={() => handleSubmit(user.id)}
            />
          </td>
        </tr>
      ))}
    </>
  );
};

export default TableRows;
