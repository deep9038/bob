
import Welcome from "./Welcome/Welcome";
import Chart from "../Component/Chart/Chart";
const Dashboard = () => {
  return (
  <div className="title">
    <div style={{margin:'10px'}}>
    <Welcome/>
    <Chart/>
    </div>
    
  </div>
  );
};

export default Dashboard;
