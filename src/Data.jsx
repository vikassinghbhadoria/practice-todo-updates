import React, { Component } from "react";
// import Table from "./Table";
// import Appp from "./Data";

export default class Appp extends Component {
  render() {
    return <div>{this.Details()}</div>;
    Details = () => {
        return (
          <div className="App">
          <div className="data">
            {Data.map(data => {
              return (
                <div key={data.id} className="data">
                  <h4>{data.id}</h4>
                  <h4>{data.title}</h4>
                </div>
              );
            })}
          </div>
          </div>
        );
      };
  }
}
