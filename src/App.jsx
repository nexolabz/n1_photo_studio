import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BookingPage from "./pages/BookingPage";


import Wedding from "./components/ServiceDetails/Wedding";
import Fashion from "./components/ServiceDetails/Fashion";
import Portrait from "./components/ServiceDetails/Portrait";
import Event from "./components/ServiceDetails/Event";
import Commercial from "./components/ServiceDetails/Commercial";
import Cinematic from "./components/ServiceDetails/Cinematic";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/booking" element={<BookingPage />} />
     
   
  
  <Route path="/wedding" element={<Wedding />} />
  <Route path="/fashion" element={<Fashion />} />
  <Route path="/portrait" element={<Portrait />} />
  <Route path="/event" element={<Event />} />
  <Route path="/commercial" element={<Commercial />} />
  <Route path="/cinematic" element={<Cinematic />} />
</Routes>



      
    
  );
}

export default App;