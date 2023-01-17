import logo from './logo.svg';
import './App.css';
import profile1 from './profile1.jpg';
import flag from './flag.jpg';
import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ChatIcon from '@mui/icons-material/Chat';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MailIcon from '@mui/icons-material/Mail';
import DescriptionIcon from '@mui/icons-material/Description';
import WifiIcon from '@mui/icons-material/Wifi';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FoundationIcon from '@mui/icons-material/Foundation';
import ModeIcon from '@mui/icons-material/Mode';
import LuggageIcon from '@mui/icons-material/Luggage';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import DataUsageRoundedIcon from '@mui/icons-material/DataUsageRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import {Bar} from "react-chartjs-2";
import {Chart,LinearScale,CategoryScale,BarElement} from 'chart.js';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Doughnut } from 'react-chartjs-2';
import { ArcElement,Tooltip,Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import { LineElement,PointElement } from 'chart.js';


Chart.register(
  LinearScale,CategoryScale,BarElement
);
Chart.register(
  Tooltip,ArcElement,Legend
);
Chart.register(
  LineElement,CategoryScale,LinearScale,PointElement
)

const labels=['Feb','Mar','Apr','May','June','July','Aug','Sep','Oct']
const data ={
  labels,
  datasets:[
    {
      label:'2020 Expense',
      data:[18,20,15,22,18,25,25,30,25],
      backgroundColor:'whitesmoke',
    },
    {
      label:'2021 Expense',
      data:[20,25,18,27,25,30,25,35,30],
      backgroundColor:' #6170fb',
      cutout:'90%'
    },
  ]
}


function App() {

  const data1={
    labels:[],
    datasets:[{
      label:'poll',
      data:[5,3,2],
      backgroundColor:[' #6170fb','whitesmoke','red'],
      borderColor:[' #6170fb','whitesmoke','red'],
      cutout:'90%'
    }],
    
  }
  const data3={
    labels:[],
    datasets:[{
      label:'poll',
      data:[5,3],
      backgroundColor:[' #6170fb','whitesmoke','red'],
      borderColor:[' #6170fb','whitesmoke','red'],
      circumference:180,
      aspectRatio:2,
      rotation:270,
      cutout:'90%'
    }],
    
  }
  const data2={
    labels:['mon','tue','wed','thu','fri','sat'],
    datasets:[
      {
        label:'Previous',
        data:[40,30,58,35,55,40],
        // data:[3,6,9],
        backgroundColor:'red',
        borderColor:'red',
        pointBorderColor:'red',
        fill:true,
        tension:0.4
      },
      {
        label:'Current',
        data:[20,55,80,40,45,30],
        backgroundColor:'#6170fb',
        borderColor:'#6170fb',
        pointBorderColor:'#6170fb',
        fill:true,
        tension:0.4
      }
    ]
  }
  const options={
    plugins:{
      legend:true
    },
    scales:{
      y:{
        min:0,
        max:80,
      }
    }
  }
  return (
  <div className='main'>
 <div className='left'>
  <div className='menuicon1'>
  <div className='menuicon'><MenuIcon></MenuIcon></div>
  </div>
  <div className='menu'><h2>MENU</h2> </div>

  <div className='dashboard'>
    <div className='dashboard1'>
<div ><GridViewIcon style={{"fontSize":"medium"}}></GridViewIcon></div>
<div >
 
<div className='dashboard2'> Dashboards</div>
<div className='dashboard2'>Ecommerce</div>
<div className='saas'>Saas</div>
<div className='saas'>Crypto</div>

</div>
</div>

<div ><KeyboardArrowUpIcon style={{"fontSize":"medium"}}></KeyboardArrowUpIcon></div>
  </div>

  <div className='menu'><h2>APPLICATIONS</h2> </div>
  <div className='calendar'>
   <div><CalendarMonthIcon style={{"fontSize":"medium"}}></CalendarMonthIcon> </div>
   <div>Calendar</div>
  </div>
  <div className='calendar'>
   <div><ChatIcon style={{"fontSize":"medium"}}></ChatIcon> </div>
   <div>Chat</div>
  </div>
  <div className='calendar'>
   <div><Inventory2Icon style={{"fontSize":"medium"}}></Inventory2Icon> </div>
   <div>File Manager</div>
  </div>
  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><LocalMallIcon style={{"fontSize":"medium"}}></LocalMallIcon> </div>
  <div>Ecommerce</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><MailIcon style={{"fontSize":"medium"}}></MailIcon> </div>
  <div>Mail</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><MailIcon style={{"fontSize":"medium"}}></MailIcon> </div>
  <div>Invoices</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><DescriptionIcon style={{"fontSize":"medium"}}></DescriptionIcon> </div>
  <div>Projects</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><WifiIcon style={{"fontSize":"medium"}}></WifiIcon> </div>
  <div>Contacts</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>
 
  <div className='menu'><h2>LAYOUTS</h2> </div><br></br>
  <div className='menu'><h2>PAGES</h2> </div>

  <div className='calendar'>
   <div><PersonOutlineIcon style={{"fontSize":"medium"}}></PersonOutlineIcon> </div>
   <div>Authentication</div>
  </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div>< FoundationIcon style={{"fontSize":"medium"}}></ FoundationIcon> </div>
  <div>Utility</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>
  <div className='menu'><h2>COMPONENTS</h2> </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><LuggageIcon style={{"fontSize":"medium"}}></ LuggageIcon> </div>
  <div>UI Elements</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>

  <div className='ecommerce'>
 <div className='calendar'>
 <div className='ecommerce1'>
 <div><ModeIcon style={{"fontSize":"medium"}}></ModeIcon> </div>
  <div>Forms</div>
 </div>
 </div>
 <div className='downarr'><KeyboardArrowDownIcon style={{"fontSize":"medium"}}></KeyboardArrowDownIcon> </div>
  </div>
 </div>
    
 <div className='right'>
<div className='rightdashboard'>
  <div className='dashboardname'>Dashboard</div>
  <div className='righticons'>
   <div className='dashboardname'><SearchIcon style={{"fontSize":"large"}} ></SearchIcon> </div>
   <div><img style={{"height":"15px","width":"18px"}} src={flag}></img></div>
   <div ><GridViewIcon style={{"fontSize":"large"}}></GridViewIcon> </div>
   <div><NotificationsIcon style={{"fontSize":"large"}}></NotificationsIcon> </div>
   <div><SettingsIcon style={{"fontSize":"large"}}></SettingsIcon> </div>

   <div><img style={{"height":"20px" ,"width":"20px","borderRadius":"50px"}} src={profile1}></img> </div>

  </div>
</div>

<div className='rightsmall'>
 
 <div className='one'>
  <div className='leftone'>
    <div className='bluecontainer'>
    <div className='middleicon'><DataUsageRoundedIcon style={{"fontSize":"larger","color":"white"}}></ DataUsageRoundedIcon> </div>
    </div>
    <div>
    <div className='revenue'>Revenue</div>
    <div className='number'>
    <div>$21,456</div>
    <div className='rightnumber'>+2.65%</div>
    </div>
    </div>
  </div>
 </div>
 <div className='one'>
 <div className='leftone'>
    <div className='bluecontainer'>
    <div className='middleicon'><LocalMallIcon style={{"fontSize":"larger","color":"white"}}></ LocalMallIcon> </div>
    </div>
    <div>
    <div className='revenue'>Orders</div>
    <div className='number'>
    <div>5,643</div>
    <div className='rightnumber1'>-0.82%</div>
    </div>
    </div>
  </div>
 </div>
 <div className='one'>
 <div className='leftone'>
    <div className='bluecontainer'>
    <div className='middleicon'><PeopleAltRoundedIcon style={{"fontSize":"larger","color":"white"}}></ PeopleAltRoundedIcon> </div>
    </div>
    <div>
    <div className='revenue'>Customers</div>
    <div className='number'>
    <div>45,254</div>
    <div className='rightnumber1'>-1.04%</div>
    </div>
    </div>
  </div>
 </div>
</div>

<div className='second'>
<div>
  <div className='overview'>
    <div >Overview</div>
    <div className='sortby'>
    <div>SortBy:</div>
    <div className='revenue'>Yearly</div>
    <div><KeyboardArrowDownIcon style={{"fontSize":"small"}}></KeyboardArrowDownIcon> </div>
    </div>
  </div>
  <br></br>

  <div className='graph'>
    <div>
    <div className='thismonth'>This Month</div>
    
    <div className='thismonth1'>
      <div>$24,568</div>
      <div className='rightnumber'>+2.65%</div>
      
    </div>
    </div>
  
  </div>

  <div  className='orders'>
  <div>
    <div className='thismonth'>Orders</div>
    <div className='order1'>5,643</div>
  </div>
  <div>
    <div className='thismonth'>Sales</div>
    <div className='order1'>16,273</div>
  </div>
  </div>

  <div  className='orders'>
  <div>
    <div className='thismonth'>Order Value</div>
    <div className='order1'>12.03%</div>
  </div>
  <div>
    <div className='thismonth'>Customers</div>
    <div className='order1'>21,456</div>
  </div>
  </div>
  <div  className='orders'>
  <div>
    <div className='thismonth'>Income</div>
    <div className='order1'>$35,652</div>
  </div>
  <div>
    <div className='thismonth'>Expenses</div>
    <div className='order1'>$12,248</div>
  </div>
  </div>
  </div>

  <div className='barchart'>
  <Bar data={data}></Bar>
  </div>
</div>

<div className='third'>
  <div className='third1'>
  <div className='orderstatus'>
    <div className='overview'>User Activity</div>
    <div className='topproduct'>
    <div className='revenue'>Weekly</div>
    <div> <KeyboardArrowDownIcon style={{"fontSize":"small"}}></KeyboardArrowDownIcon> </div>
    </div>
  </div>
  <div className='thismonth'>This Month</div>
  <div className='order1'>16,543</div>
  <div>
    <Line data={data2}
    options={options}
    ></Line>
  </div>
  </div>
  
  <div className='third1'>
    <div className='orderstatus'>
      <div className='overview'>Order Status</div>
      <div><MoreHorizIcon style={{"fontSize":"medium", "color":"black"}} ></MoreHorizIcon> </div>
    </div>
    <div className='doughnut'>
<Doughnut data={data1}>
</Doughnut> 
</div> 
  </div>
  <div className='third1'>
    <div >
      <div className='overview1'>
    <div className='overview'>Top Product</div>
    <div className='topproduct'>
    <div className='revenue'>Monthly</div>
    <div> <KeyboardArrowDownIcon style={{"fontSize":"small"}}></KeyboardArrowDownIcon> </div>
    </div>
    </div>
    <div className='topproduct'>
<div className='blue1'>
      <div className='blue'>
    
      <div className='middleicon'>#1</div> </div>
     <div>
     <div className='revenue'> Polo blue T-shirt</div>
    <div>$25.4</div>
     </div> 
      </div>
      <div className='rightnumber'>3.82K</div>
    </div>
<br></br>
    <div className='topproduct'>
<div className='blue1'>
      <div className='blue'>
    
      <div className='middleicon'>#2</div> </div>
     <div>
     <div className='revenue'> Hoodie for men</div>
    <div>$24.5</div>
     </div> 
      </div>
      <div className='rightnumber'>3.14K</div>
    </div>
    <br></br>
    <div className='topproduct'>
<div className='blue1'>
      <div className='blue'>
    
      <div className='middleicon'>#3</div> </div>
     <div>
     <div className='revenue'> Red Color Cap</div>
    <div>$22.5</div>
     </div> 
      </div>
      <div className='rightnumber'>2.84K</div>
    </div>
    
    </div>
  </div>
</div>

 </div>
 <div className='thirdcontainer'>

  <div className='colorcontainer'>
    <div className='threedots'><MoreHorizIcon style={{"fontSize":"large"}} ></MoreHorizIcon> </div>
    <div className='image2'><img className='image1' src={profile1}></img> 
  
    </div>
  </div>
  <div className='heading'>
    <div>
  <div >Jennifer Bennett</div>
  <div className='revenue'>Product Designer</div>
  </div>
  </div>
  <div className='followers'>
    <div>
      <div>1,269</div>
      <div className='revenue'>Products</div>
    </div>
    <div>
      <div>5.2K</div>
      <div className='revenue'>Followers</div>
    </div>
  </div>
<div className='hr'>  <hr></hr></div>
<div className='earning'>
  <div>Earning</div>
  <div className='revenue'><ErrorOutlineIcon style={{"fontSize":"large"}}></ErrorOutlineIcon> </div>
</div>
<div className='thismonth2'>
  <div>
    <div className='semidoughnut'>
      <Doughnut data={data3}></Doughnut>
    </div>
    <div className='earning1' >76%</div>

<div className='earning1'>$26,256</div>
<div className='revenue'>Earning This Month</div>
</div>
</div>
<div className='previous'>
<div className='rightnumber'>+2.65%</div>
<div className='revenue'>From previous period</div>
</div>
<div className='hr'>  <hr></hr></div>
<div className='recent'>Recent Activity</div>
<div className='sep'>
<div className='whitecontainer'>
  <div className='middleicon1'>12
  <div className=''>Sep</div>
  </div>
 </div>
 <div className='res'>Responded to need "Volunteer Activites"</div>
</div>
{/* <div className='sep'>
<div className='whitecontainer'>
  <div className='middleicon1'>11
  <div className=''>Sep</div>
  </div>
 </div>
 <div className='res'>Everyone realizes would be desiable.. </div>
</div> */}
 </div>
  </div>
  );
}

export default App;
