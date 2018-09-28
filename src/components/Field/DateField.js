import React from 'react';
import { TextField } from "@material-ui/core";

const DateField = (props) => {
    return(
        <TextField {...props} type="date" required margin="normal"
                   InputLabelProps={{
                       shrink: true
                   }}
        />
    )
};

export default DateField;
