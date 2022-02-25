import React from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {
    return (<>
            <Counter maxVal={5}/>
            <Counter maxVal={20}/>
        </>
    );
}

export default App;
