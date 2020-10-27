import React, { Component} from "react";
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import {ChromePicker} from 'react-color';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import styles from "./Styles/ColorPickerFormStyles.js";

class ColorPickerForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentColor: "teal",
            newColorName: ""
         }
         this.updateCurrentColor = this.updateCurrentColor.bind(this);
         this.handleChange = this.handleChange.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateCurrentColor(newColor){
        this.setState({currentColor: newColor.hex});
    };

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value });
    }

    handleSubmit(){
        const newColor = {
            color: this.state.currentColor, 
            name: this.state.newColorName
        };
    this.props.addNewColor(newColor);
    this.setState({ newColorName: ""});
    }

    render() { 
        const { paletteFull, classes } = this.props;
        const { currentColor, newColorName } = this.state;
        return ( 
            <div>
                <ChromePicker 
                color={currentColor} 
                onChangeComplete={this.updateCurrentColor}
                className={classes.picker}
                />

                <ValidatorForm onSubmit={this.handleSubmit} ref="form" instantValidate={false}>
                  <TextValidator 
                    value={newColorName} 
                    className={classes.colorInput}
                    name='newColorName'
                    margin="normal"
                    placeholder="Enter color name..."
                    onChange={this.handleChange}
                    validators={['required', 'isColorNameUnique', 'isColorUnique']}
                    errorMessages={['Enter color name', 'That color name is already taken', 'Color already used']}
                    />
                    <Button 
                      variant="contained"
                      type="submit" 
                      color="primary"
                      disabled={paletteFull} 
                      className={classes.addColor}
                      style={{backgroundColor: paletteFull ? "grey" : currentColor}}>
                      {paletteFull ? "Palette is full": "Add color"}
                    </Button>
                </ValidatorForm>
            </div>
         );
    }
}
 
export default withStyles(styles)(ColorPickerForm);