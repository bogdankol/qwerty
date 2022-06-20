import s from './DownloadAppLinks.module.sass'

interface IDownloadLink {
  id: string,
  iconSrc: string,
  iconTitle: string,
  iconAlt: string,
  href: string
}

interface IDownloadAppLinks {
  downloadLinks: IDownloadLink[]
}

function DownloadAppLinks({ downloadLinks }: IDownloadAppLinks) {
  return <ul className={s.list}>
    {downloadLinks.map(({
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
  </ul>
}

export default DownloadAppLinks