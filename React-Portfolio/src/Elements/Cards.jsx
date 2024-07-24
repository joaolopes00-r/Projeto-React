import style from './Cards.module.css'
import ButtonA from './ButtonA'


function Cards ({img, title, description, site, btntext}){
    
    return(
    <div className={style.card}>
        <section>
            <img src={img} alt="erro"/>
            <h3>{title}</h3>
            <p>{description}</p>
              <ButtonA text={btntext} link={site}/>
            </section>
    </div>    

    
    )
}

export default Cards