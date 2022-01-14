import React, { Component } from "react";
import "./table.css";


export default class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: false,
      isError: false,
    };
  }

  // async

  async componentDidMount() {
    this.setState({ isLoading: true });
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    if (response.ok) {
      const users = await response.json();
      var newUser = users.map(function (elem) {
        // console.log(elem.completed);
        return {
          id: elem.id,
          title: elem.title,
          status: elem.completed,
          userId:elem.userId,
          
        };
      });

      this.setState({ users: newUser, isLoading: false });
    } else {
      this.setState({ isError: true, isLoading: false });
    }
  }
  

  renderTableHeader = () => {
    return ["Id","title","status","action"].map((attr) => (
      <th key={attr}>{attr.toUpperCase()}</th>
    ));
  };
  renderTableRows = () => {
    return this.state.users.map((user) => {
      console.log(user);
      return (
        <tr key={user.id}>

          <td>{user.id}</td>
          <td>{user.title}</td>
          <td>{user.status?"true":"false"}</td>
          <td><input type="submit" class="button" /></td>
          

        </tr>
      );
    });
  };
  render() {
    const { users, isLoading, isError } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (isError) {
      return <div>Error</div>;
    }

    return users.length > 0 ? (
      <table className="table table-success">
        <thead>
          <tr>{this.renderTableHeader()}</tr>
        </thead>
        <tbody>{this.renderTableRows()} </tbody>
      </table>
    ) : (
      <div>No users.</div>
    );
  }
}
