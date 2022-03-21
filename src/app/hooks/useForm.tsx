import { useState } from 'react';

const initState:any = {}

const UseForm = ( init = initState ) => {
    const [ values, setValues ] = useState(init);

    const reset = () => {
        setValues( init )
    }

    const handleInputChange = (e:Event) => {
        const target = e.target as HTMLInputElement;
        const { name, value } = target;
        setValues({
            ...values,
            [name]: value
        })
    };

    return [
        values, 
        handleInputChange,
        setValues,
        reset
    ]
};


export default UseForm;