import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import "/index.css";
import Footer from "./components/Footer";
import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Dash from "./pages/Dash";
import AddWord from "./pages/AddWord";
import EditWord from "./pages/EditWord";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dash" element={<Dash />} />
        <Route path="/add" element={<AddWord />} />
        <Route path="/edit" element={<EditWord />} />
        <Route path="/*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
