import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Layout from "./components/Layout";
import HomePage from "./page/HomePage";
import Vision from "./page/Vision";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <Layout>
            <HomePage />
          </Layout>
        } />
        <Route path="/vision" element={
          <Layout>
            <Vision />
          </Layout>
        } />
      </Routes>
    </Router>
  );
}

export default App;