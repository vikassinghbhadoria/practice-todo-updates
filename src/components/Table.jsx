import * as React from 'react';
import TableRows from './tableRows';
import User from './user';

const TableHeader = () => {
  return ['Id', 'title', 'status', 'action'].map((attr) => (
    <th key={attr}>{attr.toUpperCase()}</th>
  ));
};
const Table = ({ user, setUser }) => {
  const [users, setUsers] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/todos'
        );
        if (response.ok) {
          const data = await response.json();
          const newUser = data.map(function (elem) {
            // console.log(elem.completed);
            return {
              id: elem.id,
              title: elem.title,
              status: elem.completed,
              userId: elem.userId,
            };
          });
          setUsers(newUser);
          // console.log(users);
          setLoading(false);
        } else {
          setUsers(null);
          setLoading(true);
        }
      } catch (error) {
        console.log(error.message);
        setUsers(null);
        setLoading(true);
      }
    }
    fetchData();
  }, []);
  if (loading) return <h1>Loading...</h1>;
  return (
    <>
      <div>
        <div style={{ float: 'left' }}>
          {users ? (
            <>
              <table className='table table-success'>
                <thead>
                  <TableHeader />
                </thead>
                <TableRows users={users} setUser={setUser} />
              </table>
            </>
          ) : (
            <div>No users.</div>
          )}
        </div>
        <div style={{ float: 'right' }}>
          {user ? <User user={user} /> : <></>}
        </div>
      </div>
    </>
  );
};

export default Table;
