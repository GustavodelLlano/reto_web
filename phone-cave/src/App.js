import './App.css';
import { Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import PhoneDetails from './Pages/DetailsPage';

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/:id" element={<PhoneDetails />} />
      </Routes>
    </main>
  );
}

export default App;
