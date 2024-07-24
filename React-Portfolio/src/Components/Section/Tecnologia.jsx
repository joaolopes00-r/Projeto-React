import ButtonA from '../../Elements/ButtonA'
import style from './Tecnologias.module.css'
import { useEffect, useState } from 'react'


function Tecnologia(){
    
    
    const [text, setText] = useState('');
    const toRotate = ['Sou estudante de Dev Full-Stack', 'Bem vindo ao meu Portfólio!'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period = 200;
    const [delta, setDelta] = useState(100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}

    },[text])

    const toType = () => {
        let i = loop % toRotate.length;
        let fullText = toRotate[i]
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1)

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
            setIsDeleting(true);
            setDelta(period);

            } else if (isDeleting && updatedText === ''){
                setIsDeleting(false);
                setDelta(period);
                setLoop(loop+1);

            }


    }

    return(
        <div className={style.tecno} id='Tecnologia'>
            <h1>Olá Sou João Victor Lopes!</h1>
            <h3>-{text}</h3>
            
            <p>Meu nome é João Victor Lopes Rodrigues e <br/>
                essas são algumas das tecnologias e <br/>
                linguagens que tenho conhecimento. <br/>
                 Clique no botão abaixo para conferir alguns projetos!
            </p>
            <a href="https://github.com/joaolopes00-r?tab=repositories"><ButtonA text='Repositório'/></a>
            
        </div>
        
       
    )
}

export default Tecnologia

