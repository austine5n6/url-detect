import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Experience from './components/Experience'
import Porfolio from './components/Porfolio'
import Contact from './components/Contact'
import SocialLinks from './components/SocialLinks'
import Footer from './components/Footer'


function App() {
  const refreshPage = ()=> {
    window.location.reload();
 }

  return <div>
    <Navbar onload={refreshPage} />
    <Home />
    <About />
    <Porfolio />
    <Experience />
    <Contact />
    <Footer />

    <SocialLinks /> 
  
</div>;
  
};

export default App;
