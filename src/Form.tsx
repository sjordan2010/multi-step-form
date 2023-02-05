import React from 'react';
import { Formik } from 'formik';
import { TextField, Button } from '@mui/material';
import * as yup from 'yup'

const Form = () => {
    const validationSchema = yup.object({
        username: yup.string().required('Username is required'),
        password: yup.string().required('Password is required')
    })

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
                    <TextField  
                        id='id' 
                        name='username' 
                        label='Username' 
                        type="text"
                        variant='filled'
                        value={formik.values.username} 
                        onChange={formik.handleChange}
                        error={formik.touched.username && Boolean(formik.errors.username)}
                        helperText={formik.touched.username && formik.errors.username}
                        required />
                    <TextField 
                        id='pw' 
                        name='password' 
                        label='Password' 
                        type='password' 
                        variant='filled' 
                        value={formik.values.password} 
                        onChange={formik.handleChange}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                        required />
                    <Button id="submit-btn" type="submit" variant='contained' style={{marginTop: 20}} >Login</Button>
				</form>}
		</Formik>
		</header>
		</div>
	);
}

export default Form;
