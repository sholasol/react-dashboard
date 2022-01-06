import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import UserList from "./pages/userList/UserList";
import"./app.css"
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import User from "./pages/user/User";
import Newuser from "./pages/newuser/Newuser";


function App() {
  return (
    <Router>
       <Topbar/>
       <div className="container">
          <Sidebar/> 
          <Routes>
              <Route path="/" element={ <Home />} />
              <Route path="/users" element={ <UserList />} />
              <Route path="/newUser" element={ <Newuser />} />
              <Route path="/user/:userId" element={ <User />} />
            </Routes>
          
        </div>
    </Router>
  ); 
}

export default App;
