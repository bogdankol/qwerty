import s from './DivWithImage.module.sass'

interface IDivWithImage {
  imageSrc: string
  imageTitle: string
  imageAlt: string
}

function DivWithImage({ 
    imageSrc,
    imageTitle,
    imageAlt
  }: IDivWithImage) {
    
  return <div className={s.imageDiv}>

    <img 
      className={s.image}
      src={imageSrc}
      title={imageTitle}
      alt={imageAlt}  
    />
    
  </div>
}

export default DivWithImage