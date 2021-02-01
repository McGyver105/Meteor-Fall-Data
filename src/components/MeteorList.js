import React from "react";
import Table from "./Table"

class MeteorList extends React.Component {
    state = {
        meteors : [{name: "meteor-1", id: 1, recclass: "material", mass: 123, year: Date.now()}]
        //new Date().getYear
    }

render() {
    return (
        <div>
            <table>
                <thead>
            <tr>
                <th>name</th>
                <th>id</th>
                <th>mass</th>
                <th>recclass</th>
                <th>year</th>
            </tr>
            </thead>
            <tbody>
          <Table meteorOne={this.state.meteors[0]}/>
          </tbody>
          </table>
        </div>
    )
    }
}

export default MeteorList
