import React from 'react'

import {Grid,Paper} from '@mui/material'

export default function Gridd() {
  return (
    <div>
        <Grid container>
        <Grid item xs={12} sm={6} md={3}>
            <Paper >1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Paper >2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Paper >3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
            <Paper >4</Paper>
        </Grid></Grid>
    </div>
  )
}

