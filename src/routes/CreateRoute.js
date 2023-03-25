import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import Home from "../pages/Home/Home";
import Transaction from "../pages/Transaction/Transaction"
import Error from "../pages/Error/Error";


const CreateRoute = () => {
  return (
      <Routes>
        <Route >
          <Route path="/" element={<Home />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="transaction" element={<Transaction />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
  )
}

export default CreateRoute