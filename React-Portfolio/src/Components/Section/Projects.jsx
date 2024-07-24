import Cards from "../../Elements/Cards"
import style from './Projects.module.css'
import challe2 from '../Section/imagens/challe2.svg'
import challe1 from '../Section/imagens/challe1.svg'
import pageOne from '../Section/imagens/pageOne.svg'




function Projects(){
    return(
        <section className={style.section}>
        <h1>PROJETOS</h1>
        <div>
        
        <div className={style.project} id="Projects">
        
        <Cards
        img={pageOne}
        title='Primeiro Projeto'
        description='Primeiro Projeto desenvolvido com a DNC ultilzando Html, Css e JavaScript'
        site='https://eclectic-figolla-f1bc34.netlify.app/'
        btntext='Acessar Projeto'   
        />
        <Cards
        img={challe1}
        title='Pirmeiro Desafio'
        description='Primeiro Desafio de conhecimento da Dnc ultilizando Html e Css, com a ultilidade de Capitação de clientes'
        site='https://testedncdesafio.netlify.app/'
        btntext='Acessar Projeto'
        />
        
        <Cards
        img={challe2}
        title='Segundo Desafio'
        description='Segundo desafio de desenvolvimento de uma Pagina de funcionalidade de API'  
        site='https://desafioapidnc1.netlify.app/'    
        btntext='Acessar projeto'  
        
        />


    </div>
        
    </div>

    </section>
        
        
    )
} 

export default Projects