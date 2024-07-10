import React,{useState,useEffect} from 'react';

import FormContext from './FormContext';

const FormContextProvider=({children})=>{
      
    const [mainsForm, setMainsForm] = useState(() => {
        const savedForm = localStorage.getItem('mainsForm');
        return savedForm ? JSON.parse(savedForm) : {}; // Set your initial state here
      });
    
      useEffect(() => {
        localStorage.setItem('mainsForm', JSON.stringify(mainsForm));
      }, [mainsForm]);
    return (
        <FormContext.Provider value={{mainsForm,setMainsForm}}>
            {children}
        </FormContext.Provider>
    )
}

export default FormContextProvider;