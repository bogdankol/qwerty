import s from './Description.module.sass'

function Description({
    description,
    text,
  }: any) {
  return (
    <div className={s.div}>
      <h3 className={s.header}>{description}</h3>
      <p className={s.text}>{text}</p>
    </div>
  )
}

export default Description