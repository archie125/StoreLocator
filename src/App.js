
import './App.scss';
import 'antd/dist/antd.css';

import { Button } from 'antd';

import GoogleMap from './GoogleMap';


function App() {
  return (
    <div className='app'>
          <Button type="primary">Primary Button</Button>
      <div className='group-1'>
        <div className='group-1-item'>Catherine Padon</div>
        <div className='group-1-item'>Fermin Gegangao</div>
      </div>
      <div className='group-2'>
        <div className='group-2-item'>Catherine Cagadas</div>
        <div className='group-2-item'>Andrian Pontejo</div>
      </div>
      <GoogleMap />
    </div>
  );
}


export default App;
