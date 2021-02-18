import './App.css';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Logo from "./assets/mobile.png";
import Button from '@material-ui/core/Button';
import Dialog from '../src/Dialog';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatAlignJustifyIcon from '@material-ui/icons/FormatAlignJustify';
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function App() {
    const [open, setOpen] = React.useState(false);

    const [logged, setLogged] = React.useState('sign-up');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const [color, setColor] = React.useState('blue');

    const handleColor = (event, newColor) => {
        setColor(newColor);
        console.log(color);
    };

    return ( < div className = "App"
        style = {
            { backgroundColor: color }
        } >
        <
        Container justify = "center" >


        <
        ToggleButtonGroup value = { color }
        exclusive onChange = { handleColor }
        style = {
            { float: "right" }
        } >
        <
        ToggleButton value = "red" >
        <
        FormatAlignLeftIcon / >
        <
        /ToggleButton> <
        ToggleButton value = "blue" >
        <
        FormatAlignCenterIcon / >
        <
        /ToggleButton> < /
        ToggleButtonGroup >


        <
        Grid container justify = "center" >
        <
        Grid item lg = { 6 } > color <
        img src = { Logo }
        style = {
            { width: "100%" }
        }
        / > < /
        Grid > <
        Grid item lg = { 6 } >
        <
        h1 > One Touch For All Needs < /h1> <
        p > industry.Lorem Ipsum has been the industry 's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has< /p>  <
        Button variant = "outlined"
        color = "primary"
        onClick = { handleClickOpen } > { logged } <
        /Button> < /
        Grid > < /
        Grid > < /Container>

        <
        Dialog openDialog = { open }
        closeDialog = { handleClose }
        data = { setLogged }
        />

        <
        /
        div >
    );
}

export default App;