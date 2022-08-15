import React from "react";
import { useState, createContext } from "react";
import PlayerTable from "../Tables/Players/PlayerTable";

const ModalFunctions = {
    savePlayer:{
        title: "Create New Player",
        function: "Save Player",
    },
    saveCouch:{
        title: "Create New Couch",
        function: "save Couch"
    }
};

export const singleTon = createContext();

const ModalServices = (props) =>{

    const handleClose = () => setShow(!show);

    const [show, setShow] = useState(false);

    return(
        <singleTon.Provider value={[show, setShow, ModalFunctions, handleClose]}>
            {props.children}
        </singleTon.Provider>
    )
}

export default ModalServices;