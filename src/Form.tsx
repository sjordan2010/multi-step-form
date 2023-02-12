import React from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup'
import InputField from './InputField';

const Form = () => {
    const validationSchema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
    })
    console.log(Form.toString())

	return (
        <div className="App">
            <header className="App-header">
                <Formik 
                    initialValues={{ username: '', password: ''}}
                    onSubmit={value => alert(JSON.stringify(value))}
                    validationSchema={validationSchema}
                >
                    {(formik) => 
                        <form onSubmit={formik.handleSubmit}>
                            <h3>Good morning!</h3>
                            <InputField  
                                name='username'
                                type='text' 
                                label='Username' 
                                variant='filled' />
                            <InputField  
                                name='password' 
                                type='password'
                                label='Password' 
                                variant='filled' />
                            <Button 
                                id="submit-btn" 
                                type="submit" 
                                variant='contained' 
                                style={{marginTop: 20}}>
                                Login
                            </Button>
                        </form>}

                </Formik>
            </header>
		</div>
	);
}

export default Form;
