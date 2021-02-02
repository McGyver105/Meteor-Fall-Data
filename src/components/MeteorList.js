import React from "react";
import Table from "./Table"
import { Bar } from "react-chartjs-2"
import '../App.css'


class MeteorList extends React.Component {
    state = {
        meteors: [],
        isLoading: true
    }

    data = {
        labels: ["a", "b", "c"],
        datasets: [{
            label: "test values",
            backgroundColor: "rgba(255,99,132,0.5)",
            data: [1, 2, 3]
        }]
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
                return { meteors: res, isLoading: false };
            });
        })
    }
    
    render () {
        return (
            this.state.isLoading ?
                <section>
                    <img className="nyan" src="https://newscrewdriver.files.wordpress.com/2018/10/poptartcat320240.gif?w=320&zoom=2" alt="nyan cat">
                    </img>
                    <p>Loading</p>
                </section>
                :
        <div>
            <Bar data={this.data}/>
            <table>
                <thead>
            <tr className="headers">
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