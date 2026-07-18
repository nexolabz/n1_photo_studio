import Nav from "../components/Nav/Navbar";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";
import About from "../components/About/About";
import Services from "../components/Services/Services";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";

function HomePage() {
  return (
    <>
    
    
      <Nav />
<div>
      <Home />
      <Profile />
      <Services />
      <About />
      <Contact />

      <Footer />
</div>


     
    </>
  );
}

export default HomePage;