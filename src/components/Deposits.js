import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Title from './Title';

const useStyles = makeStyles({
    depositContext: {
        flex: 1,
    },
});

export default function Deposits(props) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>{props.company}</Title>
            <Typography component="p" variant="h4">
                ${props.price}
            </Typography>
            <Typography color="textSecondary" className={classes.depositContext}>
                PE: {props.pe}<br />
                52 Week High: ${parseFloat(props.high).toFixed(2)}<br />
                52 Week Low: ${parseFloat(props.low).toFixed(2)}
            </Typography>
        </React.Fragment>
    );
}