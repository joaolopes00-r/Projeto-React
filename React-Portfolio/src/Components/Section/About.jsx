import styles from './About.module.css'
import React from 'react';


function Timeline() {
    return (
        <section>
            <div className={styles.title} id='About'>
                <h1>Sobre mim:</h1>
            </div>
            <div className={styles.verticalConfig}>
            <div className={styles.time}>
            <div className={styles.pointTitle}>
                        <p>Phase One</p>
                        <p>Phase Two</p>
                        <p>Phase Three</p>
                        <p>Phase Four</p>
                </div>
                </div>
                <div className={styles.lineConfig}>
                    <div className={styles.line}>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                        <div className={styles.point}> </div>
                    </div>
                </div>
                <div className={styles.descri}>
                    <div className={styles.info}>
                        <div className={styles.infoText}>
                            <p> Minha Jornada começou desenvolvendo paginas introdutivas e pequenas ultilizando apenas Html,Css e JavaScript</p>
                        </div>
                        <div className={styles.infoText}>
                            <p > Avançei para uma etapa que tive dificuldades, mas nada como um bom esforço para passar por cima, avançei para a etapa de 
                             APIs, manipulção de dados com Json e solicitções HTTP </p>
                        </div>
                        <div className={styles.infoText}>
                            <p >Agora comecei uma etapa muito importante que é essa de está desenvolvendo
                               ultizando React e Vite, ver a praticidade e funcionalidade deles me deu um Up no desenvolvimento. 
                                 </p>
                        </div>
                        <div className={styles.infoText}>
                            <p > Agora é a etapa de concluir totalmente o Front-End e me aperfeiçoar ainda mais minhas habilidades
                                com totas as linguagens aprendida até aqui, para o Back-End estou motivado e determinado, até chegar ao objetivo
                                me Tornar desenvolvedor FULL-STACK
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;