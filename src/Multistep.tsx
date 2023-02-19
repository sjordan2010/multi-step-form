import React, { useState } from 'react'
import { Formik, FormikConfig, FormikValues } from 'formik'

interface Props extends FormikConfig<FormikValues> {
    children: React.ReactNode
}

function Multistep({ children, initialValues, onSubmit }: Props) {
    const [stepNumber, setStepNumber] = useState(0);
    const steps = React.Children.toArray(children) as React.ReactElement[]

    const currStep = steps[stepNumber];
    const totalSteps = steps.length;
    const isFinalStep = stepNumber === totalSteps - 1;


    const nextStep = () => {
        setStepNumber(stepNumber + 1);
    };
    
    const prevStep = () => {
        setStepNumber(stepNumber - 1);
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submitted')
    }

    return (
      <div>
        <Formik initialValues={{}} 
                onSubmit={handleSubmit} 
                validationSchema={currStep.props.validationSchema}
        >
            {(formik) => {
                <form onSubmit={formik.handleSubmit}>
                    <input type="text" />
                </form>
            }}
        </Formik>
      </div>
    )
  }
  
  export default Multistep
  export const FormStep = ({ stepName = '', children }: any) => children;
