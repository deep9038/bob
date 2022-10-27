
import './App.css';
import Sidebar from './Component/Sidebar/sidebar';
import Header from './Component/Header/Header';
import Routs from './Component/Routs/Routs';
import TemporaryDrawer from './Component/Sidebar2/SideBar';
// import Charts from "./Component/Chart/Chart"

function App() {
  return (
    <div className="main">
    <div className='side'>
      <TemporaryDrawer/>
    </div>
    <div className='content'>
      <div className='top'>
        <Header/>
      </div>
      <div className='bottom'>
        <Routs/>
        {/* <Charts/> */}
        
      </div>
    </div>
      
    </div>
  );
}

export default App;
