import css from'./Button.module.css'

interface buttonProps{

    children:string | React.ReactElement<HTMLImageElement>;
    clas?: keyof typeof css;
    callback?: ()=>void;

}

function Button(props:buttonProps) {
    
  const FinalClass = props.clas ? css[props.clas] : "";

  return (

    <>
      <button className={FinalClass} onClick={props.callback}>{props.children}</button>
    </>
  )
}

export default Button;