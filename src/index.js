import React from 'react';
import App from './App'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalServices from './Services/ModalServices';

//ReactDOM.render(<App/>, document.getElementById('root'))


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <React.StrictMode>
        <ModalServices>
            <App/>
        </ModalServices>
    </React.StrictMode>
 
);