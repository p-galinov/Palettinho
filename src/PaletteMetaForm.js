import React, { Component} from "react";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {ValidatorForm, TextValidator} from "react-material-ui-form-validator";
import {Picker} from "emoji-mart";
import "emoji-mart/css/emoji-mart.css";


class PaletteMetaForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            stage: "form",
            newPaletteName: ""
        };
        this.handleChange = this.handleChange.bind(this);
        this.showEmojiPicker = this.showEmojiPicker.bind(this);
        this.savePalette = this.savePalette.bind(this);
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };
    
    handleClose = () => {
        this.setState({ open: false });
    };

    handleChange(evt){
        this.setState({[evt.target.name]: evt.target.value });
    };
    showEmojiPicker(){
        this.setState({stage: "emoji"})
    }
    savePalette(emoji){
        const newPalette = {
            paletteName: this.state.newPaletteName, 
            emoji: emoji.native
        }
        this.props.handleSubmit(newPalette);     
    }

    render() {
        return (
            <div>
                <Dialog open={this.state.stage ==="emoji"} onClose={this.props.hideForm}> 
                <DialogTitle id="form-dialog-title">Chose Palette Emoji 💩</DialogTitle>
                    <Picker   
                    title="Pick a palette emoji"
                    onSelect={this.savePalette}
                    />
                </Dialog>
                <Dialog
                open={this.state.stage==="form"}
                onClose={this.props.hideForm}
                aria-labelledby="form-dialog-title"
                >
               
                <ValidatorForm onSubmit={this.showEmojiPicker}>
                    <DialogContent>
                        <DialogContentText>
                            Please enter a name for the palette. Make sure it's unique!
                        </DialogContentText>
                    
                                <TextValidator 
                                label="Palette Name" 
                                value={this.state.newPaletteName}
                                name='newPaletteName'
                                fullWidth
                                margin = "normal"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={['Enter palette name', "Name already taken"]}
                                onChange={this.handleChange} 
                                ></TextValidator>
                        </DialogContent>
                    
                    <DialogActions>
                        <Button onClick={this.props.hideForm} color="primary">
                        Cancel
                        </Button>
                        <Button  variant="contained"  color="primary"  type="submit"> 
                                Save Palette
                        </Button>
                    </DialogActions>    
                </ValidatorForm>
                </Dialog>
            </div>
        );
    }
}
 
export default PaletteMetaForm;