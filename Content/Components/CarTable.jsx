import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


import React, { Component } from "react"

export default function CarTable({cars}) {
    return(
        <div className="car-table-container">
            <Paper className="car-table">
                <Table>
                    <TableHead>
                        <TableRow className="t-header">
                            <TableCell>Brand</TableCell>
                            <TableCell>Model</TableCell>
                            <TableCell>Color</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {cars.map(car => (
                            <TableRow key={car._id}>
                                <TableCell>{car.brand}</TableCell>
                                <TableCell>{car.model}</TableCell>
                                <TableCell>{car.color}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Paper>
        </div>
       
    )
};