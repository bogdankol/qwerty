import Headline from "../../Headline"
import DivWithImage from "../DivWithImage"
import Description from "../Description"
import Button from '../../Button'
import DownloadAppLinks from "../../DownloadAppLinks"
import UseWidth from '../../../tool/WindowWidthHandler'

import s from './NotMobile.module.sass'

interface IDownloadLink {
  id: string,
  iconSrc: string,
  iconTitle: string,
  iconAlt: string,
  href: string
}

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
  downloadLinksMobile: IDownloadLink[]
  downloadLinksDesktop: IDownloadLink[]
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
    downloadLinksMobile,
    downloadLinksDesktop
  }: INotMobile) {

  const currentScreenWidth = UseWidth()


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
            iconStyle="grey"
            headerStyle="colored"
          />

          <Description 
            description={description}
            text={text}
            textStyle="grey-dark"
          />

          <div style={{display: "flex"}}>

            <Button btnText={btnText} />

            <DownloadAppLinks downloadLinksDesktop={downloadLinksDesktop} />

          </div>
          
        </li>

      </ul>

      {currentScreenWidth < 1100 && <div>
        <DownloadAppLinks downloadLinksMobile={downloadLinksMobile} />
      </div>}
    

    </section>
  )
}

export default NotMobile