import React, { Component } from "react"
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

export default class Filters extends React.Component  {
    constructor(props){
        super(props)
        this.handleColorChange = this.handleColorChange.bind(this)
        this.handleModelChange = this.handleModelChange.bind(this)
        this.handleBrandChange = this.handleBrandChange.bind(this)
    }
    
    
    handleColorChange(e){
        this.props.update({ color: e.target.value })
    };
    
     handleModelChange(e){
        this.props.update({ model: e.target.value })
    };
    
     handleBrandChange(e){
        this.props.update({ brand: e.target.value })
    };
    
    render() {
        const {
            colorList,
            brandList,
            modelList,
            color,
            brand,
            model
        } = this.props;
        return (
            <div className="filters-container">
                <Paper className="filters">
                    <div className="select-container">
                        <label htmlFor="brand-select">Brand</label>
                        <Select onChange={this.handleBrandChange} value={brand} id="brand-select">
                            <MenuItem value="">All</MenuItem>
                            {brandList.map(brand => (<MenuItem key={brand} value={brand}>{brand}</MenuItem>))}
                        </Select>
                    </div>

                    <div className="select-container">
                        <label htmlFor="model-select">Model</label>
                        <Select onChange={this.handleModelChange} value={model} id="model-select">
                            <MenuItem value="">All</MenuItem>
                            {modelList.map(model => (<MenuItem key={model} value={model}>{model}</MenuItem>))}
                        </Select>
                    </div>

                    <div className="select-container">
                        <label htmlFor="color-select">Color</label>
                        <Select onChange={this.handleColorChange} value={color} id="color-select">
                            <MenuItem value=""><em>All</em></MenuItem>
                            {colorList.map(color => (<MenuItem key={color} value={color}>{color}</MenuItem>))}
                        </Select>
                    </div>

                </Paper>
            </div>
        );
    }
}