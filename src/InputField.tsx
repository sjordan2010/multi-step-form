import { TextField } from '@mui/material';
import { FieldConfig, useField } from 'formik';
import React from 'react';

interface Props extends FieldConfig {
    label: string,
    variant: "standard" | "filled" | "outlined" | undefined; 
    type: string | undefined;
}

const InputField = ({ type, variant, label, ...props }: Props) => {
// const InputField = (props: Props) => {
    const [field, meta] = useField(props.name)

    return (
        <TextField
            fullWidth 
            {...field} 
            {...props}
            label={label} 
            variant={variant}
            type={type}
            error={meta.touched && Boolean(meta.error)}
            helperText={meta.touched && meta.error}  
        />
    )
}

export default InputField;