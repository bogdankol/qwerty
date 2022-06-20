import s from './IconTextWithHeader.module.sass'

function IconTextWithHeader({
    iconSrc,
    iconAlt,
    iconTitle,
    introduceText,
    header
  }: any) {
  return <div className={s.wrapper}>

    <div className={s.innerDiv}>
      
      <img 
        src={iconSrc}
        title={iconTitle}
        alt={iconAlt}
        className={s.img}
      />

      <h4 className={s.introduceText}>
        {introduceText}
      </h4>

    </div>

    <h2 className={`${s.header} gradient`}>
      {header}
    </h2>

  </div>
}

export default IconTextWithHeader