import Nav from 'react-bootstrap/Nav';
import style from './Navbar.module.css';
import {FaGithub, FaLinkedin } from "react-icons/fa";


function Navbar(){
    return(
    <div className={style.navbar}>
        <ul>
        <li><Nav.Link href='#Projects'>Projetos</Nav.Link></li>
        <li><Nav.Link href='#Tecologia'>Tecnologias</Nav.Link></li>
        <li><Nav.Link href='#About'>Sobre Mim</Nav.Link></li> 
        </ul>
        <ul>
        <li><a href='https://github.com/joaolopes00-r'><FaGithub size={30}/></a></li> 
        <li><a href='https://www.linkedin.com/in/joão-victor-lopes-rodrigues-8481ab286/'><FaLinkedin size={30}/></a></li>
        
        </ul>
    </div>


    )
}

export default Navbar