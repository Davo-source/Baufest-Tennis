import React from 'react';
import App from './Components/App'
import { createRoot } from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';

//ReactDOM.render(<App/>, document.getElementById('root'))


const container = document.getElementById('root');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(<App />);