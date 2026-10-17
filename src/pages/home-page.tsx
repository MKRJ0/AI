import { ArrowUpRight, Sparkles } from 'lucide-react'
import { useOutletContext } from 'react-router'
import type { SiteContext } from '../App'

export default function HomePage() {
  const { t, openChat } = useOutletContext<SiteContext>()
  return <section className="hero" id="home">
    <div className="eyebrow"><span className="eyebrow-pip"/>{t.eyebrow}</div>
    <h1>{t.title}</h1>
    <p className="hero-copy">{t.description}</p>
    <button className="hero-cta" onClick={openChat}>{t.meet}<ArrowUpRight size={16}/></button>
    <div className="hero-note"><span className="avatars"><i>J</i><i>M</i><i>A</i></span><span>{t.note}</span></div>
    <div className="hero-orbit orbit-a"/><div className="hero-orbit orbit-b"/>
    <div className="hero-glyph"><div className="glyph-glow"/><div className="glyph-core"><Sparkles size={41} strokeWidth={1.4}/></div><span className="glyph-star star-one">✳</span><span className="glyph-star star-two">✦</span><span className="glyph-star star-three">·</span></div>
  </section>
}
