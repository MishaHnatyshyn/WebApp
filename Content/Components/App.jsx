import React, { Component } from "react"
import Filters from "./Filters"
import CarTable from "./CarTable"

export default class App extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {
            cars: [],
            color: '',
            model: '',
            brand: '',
            colorList: [],
            brandList: [],
            modelList: [],
        };
        this.handleFilterChange = this.handleFilterChange.bind(this);
        this.filterFunc = this.filterFunc.bind(this);
        
    }
   
    handleFilterChange(filter){
        this.setState(filter, () => {
            const carsDisplay = this.state.cars.filter(this.filterFunc)
            this.setState({
                colorList: carsDisplay.reduce((acc, item) => acc.indexOf(item.color) === -1 ? acc.concat(item.color) : acc, []),
                brandList: carsDisplay.reduce((acc, item) => acc.indexOf(item.brand) === -1 ? acc.concat(item.brand) : acc, []),
                modelList: carsDisplay.reduce((acc, item) => acc.indexOf(item.model) === -1 ? acc.concat(item.model) : acc, []),
            })
        })
    }
    
    filterFunc(item){
        const {color, model, brand} = this.state;
        if (color && item.color !== color) return false;
        if (model && item.model !== model) return false;
        if (brand && item.brand !== brand) return false;
        return true;
    }
    
    componentDidMount(){
        fetch('/api/cars')
            .then(res => res.json())
            .then(res => {
                this.setState({
                    cars: res,
                    colorList: res.reduce((acc, item) => acc.indexOf(item.color) === -1 ? acc.concat(item.color) : acc, []),
                    brandList: res.reduce((acc, item) => acc.indexOf(item.brand) === -1 ? acc.concat(item.brand) : acc, []),
                    modelList: res.reduce((acc, item) => acc.indexOf(item.model) === -1 ? acc.concat(item.model) : acc, []),
                })
            })
    }
    
    render() {
        const {cars, color, model, brand} = this.state;
        return (
            <React.Fragment>
                <Filters {...this.state} update={this.handleFilterChange}/>
                <CarTable cars={cars.filter(this.filterFunc)} />
            </React.Fragment>
        );
    }
}