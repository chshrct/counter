import React from 'react';
import './App.css';
import {Counter} from './components/Counter';

function App() {
    return (<>
            <Counter minVal={0} maxVal={5}/>
            <Counter minVal={5} maxVal={20}/>
        </>
    );
}

export default App;
