import React,{useState} from 'react';

import FormContext from './FormContext';

const FormContextProvider=({children})=>{
      
    const [mainsForm,setMainsForm]=useState(null);

    return (
        <FormContext.Provider value={{mainsForm,setMainsForm}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;