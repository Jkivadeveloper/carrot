import DetailedTask from "../../modules/DetailedTask";
import Home from "../../modules/Home";
import { Routes, Route } from "react-router-dom";
import MyTasks from "../../modules/MyTasks";
import CreateTask from "../../modules/CreateTask";
import Login from "../../modules/Login";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<MyTasks />} />
      <Route path="task/:id" element={<DetailedTask />} />
      <Route path="menu" element={<Home />} />
      <Route path="menu/create" element={<CreateTask />} />
      <Route path="Login" element={<Login />} />
    </Routes>
  );
};

export default AppRoutes;
