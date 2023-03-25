import SideBar from './components/sidebar/SideBar'
import './App.css';
import CreateRoute from './routes/CreateRoute';

function App() {
  return (
    <div className="App">
     <SideBar/>
     <CreateRoute/>
    </div>
  );
}

export default App;
