import React from "react";
import Table from "./Table"

class MeteorList extends React.Component {
    state = {
        meteors : []
        //new Date().getYear
    }

    componentDidMount () {
        const array = []
        fetch('https://data.nasa.gov/resource/gh4g-9sfh.json?$select=name,id,mass,year,recclass%20where%20year%20between%20%272012-01-01T00:00:00.000%27%20and%20%272013-01-01T00:00:00.000%27')
            .then(res => {
                array.push(res.json())
                return array
            })
            .then(res => {
            return Promise.all(res)
            })
            .then(([res]) => {
                this.setState(() => {
                    return { meteors: res };
                });
        })
    }
    
    render () {
   console.log(this.state.meteors)
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
                    {this.state.meteors.map((meteor) => {
                        return <Table key={meteor.id} meteorOne={meteor}/>
                    })}
          </tbody>
          </table>
        </div>
    )
    }
}

export default MeteorList
