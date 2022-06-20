import s from './DownloadAppLinks.module.sass'

interface IDownloadLink {
  id: string,
  iconSrc: string,
  iconTitle: string,
  iconAlt: string,
  href: string
}

interface IDownloadAppLinks {
  downloadLinksMobile?: IDownloadLink[]
  downloadLinksDesktop?: IDownloadLink[]
}

function DownloadAppLinks({ 
  downloadLinksMobile,
  downloadLinksDesktop
 }: IDownloadAppLinks) {

  return <>
  
  {downloadLinksMobile && <ul className={s.list}>
    {downloadLinksMobile.map(({
        id,
        iconSrc,
        iconTitle,
        iconAlt,
        href
    }: IDownloadLink) => {
      return <li 
        key={id}
        className={s.item}
      >
        <a 
          href={href} 
          target="_blank"
          rel="noreferrer"
          >
          <img 
            className={s.image}
            src={iconSrc}
            title={iconTitle}
            alt={iconAlt}
          />
        </a>
      </li>
    })}
  </ul>}

 {downloadLinksDesktop && <select>
    {downloadLinksDesktop.map(({
      id,
      iconSrc,
      iconTitle,
      iconAlt,
      href
    }: IDownloadLink) => {
      return <option>
        {id}
      </option>
    })}

  </select>}
  </>
}

export default DownloadAppLinks