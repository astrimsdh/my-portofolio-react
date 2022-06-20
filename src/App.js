import './App.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Footer from './pages/Footer';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import Portofolio from './pages/Portofolio';
import profil from './dist/img/astrimusidah.png';
import Project1 from './dist/img/portfolio/1.png';
import Project2 from './dist/img/portfolio/2.png';
import LogoGojek from './dist/img/logo/Gojek.svg';
import LogoGoogle from './dist/img/logo/Google.svg';
import LogoTokopedia from './dist/img/logo/Tokopedia.svg';

const App = () => {
  
  const HumbergerClick = () => {
    const hamburger = document.querySelector('#hamburger');
    const navMenu = document.querySelector('#nav-menu');
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');
  }


  window.onscroll = function(){
    const header = document.querySelector('header');
    const fixedNav = header.offsetTop;
    if(window.pageYOffset > fixedNav){
        header.classList.add('navbar-fixed');
    }else{
        header.classList.remove('navbar-fixed');
    }
  }
  return (
    <div>
      <Navbar HumbergerClick={HumbergerClick}/>
      <Home profil={profil}/>
      <About />
      <Portofolio Project={{Project1, Project2}} />
      <Clients Clients={{LogoGojek, LogoGoogle, LogoTokopedia}}/>
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
