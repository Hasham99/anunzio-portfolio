import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import CompanyProfile from './components/pages/CompanyProfile';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/company-profile" element={<CompanyProfile />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
