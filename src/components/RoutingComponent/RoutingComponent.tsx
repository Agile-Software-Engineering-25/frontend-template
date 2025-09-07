import Weather from '@pages/Weather/Weather';
import Home from '@pages/Home/Home';
import { Route, Routes } from 'react-router';
import { Sheet } from '@mui/joy';

const RoutingComponent = () => {
  return (
    <Sheet sx={{ width: '100vw', height: '100vh', m: 0 }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/weather" element={<Weather />} />
      </Routes>
    </Sheet>
  );
};

export default RoutingComponent;
