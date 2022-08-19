import { createContext } from "react";
import { useState } from "react";

export const CheckboxSingleton = createContext();

const CheckboxServices = (props) => {
    
    const [checked, setChecked] = useState(true);

    const handleChange = () => {
        setChecked(!checked);
    }
    
    return(
        <CheckboxSingleton.Provider value={[
            checked,
            handleChange
        ]}>
            {props.children}
        </CheckboxSingleton.Provider>

    )
};

export default CheckboxServices;