import s from './DivWithImage.module.sass'

function DivWithImage({ 
    imageSrc,
    imageTitle,
    imageAlt
  }: any) {
  return (
    <div className={s.imageDiv}>
      <img 
        className={s.image}
        src={imageSrc}
        title={imageTitle}
        alt={imageAlt}  
      />
    </div>
  )
}

export default DivWithImage