import css from './Card.module.css'
import Button from '../../atoms/Button/Button'

interface CardProps{
    url:string,
    browser:string,
    version:string,
    extraStyle ?:string;
}

function Card(props:CardProps) {

  return (
    <div className={css.card + " " + props.extraStyle}>
       
        <img src={props.url} className={css.img} alt="" />
        <p className={css.cardTitle}>ADD TO {props.browser}</p>
        <p >minium version {props.version}</p>
        <div className={css.separator}></div>
        <Button>Add & Install Extension</Button>
        <div className={css.space}></div>

    </div>
  )
}

export default Card