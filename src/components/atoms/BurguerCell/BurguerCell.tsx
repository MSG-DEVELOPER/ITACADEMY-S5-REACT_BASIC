import css from './BurguerCell.module.css'

interface BurguerCellProps{
    text:string;
    extraStyle?:string;

}

function BurguerCell(props:BurguerCellProps) {
  return (

    <div>
        <button className={css.container + " " + props.extraStyle }>{props.text}</button>
       
    </div>
  )
}

export default BurguerCell