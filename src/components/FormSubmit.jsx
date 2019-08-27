import React from 'react'
import Button from '@material-ui/core/Button';
import Error from './Error'

export default ({handleSubmitForm,error})=>(
    <>
        <Button onClick={handleSubmitForm} 
            variant="contained" 
            color="primary">
            Enviar
        </Button>
        <br/>
        <Error text={error.submit}/>  
    </>
)
