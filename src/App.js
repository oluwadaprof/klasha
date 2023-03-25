import SideBar from "./components/sidebar/SideBar";
import "./App.css";
import CreateRoute from "./routes/CreateRoute";
import TopNav from "./components/topnav/TopNav";
// import MobileNav from "./components/mobileNav/MobileNav";

function App() {
  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        {/* <MobileNav/> */}
        <SideBar />
        <TopNav />
      </div>
      <div style={{marginLeft:"20rem"}}>
      <CreateRoute />  
      </div>
    </div>
  );
}

export default App;
