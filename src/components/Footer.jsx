import { useLang } from '../context/LangContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLang()
  return (
    <footer className="footer">
      <div className="f-inner">
        <span>{t.footer_l}</span>
        <span>{t.footer_c}</span>
        <span>{t.footer_r}</span>
      </div>
      <div className="f-glow"/>
    </footer>
  )
}
