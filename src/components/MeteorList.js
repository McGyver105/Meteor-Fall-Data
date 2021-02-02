import React from "react";
import Table from "./Table"
import { Bar } from "react-chartjs-2"
import '../App.css'
import getMassFromData from "../utils/getMassFromData"


class MeteorList extends React.Component {
    state = {
        meteors: [],
        isLoading: true,
        data: {
            labels: ["0-50", "50-100", "100-200", "200-300", "300-400", "400-700", "700-1000", "1k-10k", "10k-100k", "100K+"],
            datasets: [{
                label: "Mass of meteors in grams",
                backgroundColor: "rgba(255,99,132,0.5)",
                data: []
            }]
        }
    }

    componentDidMount() {
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
                this.setState((currentState) => {
                    return { ...currentState, meteors: res, isLoading: false, data: { ...currentState.data, datasets: [{ ...currentState.data.datasets[0], data: getMassFromData(res) }] } }
                }); //everytime we go to the next level of nesting, need to grab what's in there and copy it before moving on
            })
    }

    render() {
        return (
            this.state.isLoading ?
                <section>
                    <img className="nyan" src="https://newscrewdriver.files.wordpress.com/2018/10/poptartcat320240.gif?w=320&zoom=2" alt="nyan cat">
                    </img>
                    <p>Loading</p>
                </section>
                : //second rendering
                <div>
                    <Bar data={this.state.data} />
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
                                return <Table key={meteor.id} meteorOne={meteor} />
                            })}
                        </tbody>
                    </table>
                </div>
        )
    }
}

export default MeteorList