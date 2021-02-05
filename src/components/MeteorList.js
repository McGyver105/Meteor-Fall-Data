import React from "react";
import { Bar } from "react-chartjs-2"
import '../App.css'
import fetchDataFromNasa from "./Api"
import getMassFromData from "../utils/getMassFromData"
import Title from "./Title";
import LoadingScreen from "./LoadingScreen";
import YearInputForm from "./YearInputForm";
import MeteorTable from "./MeteorTable";

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
        },
        years: {
            start: 2012,
            finish: 2013
        },
        titleYears: {
            start: 2012,
            finish: 2013
        },
        changedYears: false
    }

    componentDidMount() {
        fetchDataFromNasa("2012", "2013").then(([res]) => {
            this.setState((currentState) => {
                return { ...currentState, meteors: res, isLoading: false, data: { ...currentState.data, datasets: [{ ...currentState.data.datasets[0], data: getMassFromData(res) }] } }
            });
        })
    }

    componentDidUpdate () {
        if (this.state.changedYears) {
            fetchDataFromNasa(this.state.years.start, this.state.years.finish).then(([res]) => {
                this.setState((currentState) => {
                    return { ...currentState, meteors: res, isLoading: false, data: { ...currentState.data, datasets: [{ ...currentState.data.datasets[0], data: getMassFromData(res) }] }, changedYears: false }
                });
            })
        }
    }

    render () {
        return (
            this.state.isLoading ?
                <LoadingScreen />
                : 
                <>
                    <Title start={this.state.titleYears.start} finish={this.state.titleYears.finish} />
                    <Bar data={this.state.data} />
                    <p>Choose years to display</p>
                    <YearInputForm handleSubmit={this.handleSubmit} handleChange={this.handleChange} state={this.state} />
                    <MeteorTable meteors={this.state.meteors}/>
                </>
        )
    }

    handleChange = (event) => {
        this.setState((current) => {
            return { years: { ...current.years, [event.target.name]: event.target.value } };
        });
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.setState((current) => {
            return { changedYears: true, titleYears: { start: current.years.start, finish: current.years.finish}};
        });
    }
}

export default MeteorList