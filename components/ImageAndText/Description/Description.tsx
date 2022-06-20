import s from './Description.module.sass'

interface IDescription {
  description: string
  text: string
  textStyle: "grey-dark" | "grey-light"
}

function Description({
    description,
    text,
    textStyle="grey-dark"
  }: IDescription) {

  function decideTextClass() {
    if(textStyle === "grey-dark") return s.textDark
    if(textStyle === "grey-light") return s.textLight
    return s.textDark
  }

  return <div className={s.div}>

    {description && <h3 className={s.header}>{description}</h3>}

    {text && <p className={decideTextClass()}>{text}</p>}
    
  </div>
}

export default Description