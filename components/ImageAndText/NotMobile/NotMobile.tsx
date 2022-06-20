import Headline from "../../Headline"
import DivWithImage from "../DivWithImage"
import Description from "../Description"
import Button from '../../Button'
import DownloadAppLinks from "../../DownloadAppLinks"

import s from './NotMobile.module.sass'

interface INotMobile {
  imageSrc: string
  imageTitle: string
  imageAlt: string
  iconSrc: string
  iconAlt: string
  iconTitle: string
  introduceText: string
  header: string
  description: string
  text: string
  btnText: string
  downloadLinks: {
    id: string,
    iconSrc: string,
    iconTitle: string,
    iconAlt: string,
    href: string
  }[]
}

function NotMobile({
    imageSrc,
    imageTitle,
    imageAlt,
    iconSrc,
    iconAlt,
    iconTitle,
    introduceText,
    header,
    description,
    text,
    btnText,
    downloadLinks
  }: INotMobile) {
  return (
    <section className={s.section}>

      <ul className={s.list}>

        <li className={s.item}>
          <DivWithImage 
            imageSrc={imageSrc}
            imageTitle={imageTitle}
            imageAlt={imageAlt}
          />
        </li>
        
        <li className={s.item}>
          <Headline 
            iconSrc={iconSrc}
            iconAlt={iconAlt}
            iconTitle={iconTitle}
            introduceText={introduceText}
            header={header}
            iconStyle="blue"
            headerStyle="blue"
          />

          <Description 
            description={description}
            text={text}
            textStyle="grey-dark"
          />

          <Button btnText={btnText} />
        </li>

      </ul>

      <div>
        <DownloadAppLinks 
          downloadLinks={downloadLinks}
        />
      </div>
    

    </section>
  )
}

export default NotMobile