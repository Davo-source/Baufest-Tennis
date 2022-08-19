import React from "react";
import { useState, createContext } from "react";

const ModalFunctions = {
    savePlayer:{
        title: "Create New Player",
        function: "Add Player",
    },
    saveCouch:{
        title: "Create New Couch",
        function: "Add Couch",
    }
};

export const singleTon = createContext();

const ModalServices = (props) =>{


    const [show, setShow] = useState(false);
    const [edit, setEdit] = useState(false);

    const handleEdit = ()=> setEdit(!edit);
    const handleClose = () => {
        setShow(!show);
        if(edit) handleEdit();
    }

    return(
        <singleTon.Provider value={[
            show, 
            setShow, 
            ModalFunctions, 
            handleClose, 
            edit, 
            handleEdit
        ]}>
            {props.children}
        </singleTon.Provider>
    )
}

export default ModalServices;