import { ArrowUpRight, Compass, Heart, Sparkles } from 'lucide-react'
import { Link, useOutletContext } from 'react-router'
import type { SiteContext } from '../App'

const companyCopy = {
  en: {
    eyebrow: 'A LITTLE ABOUT US',
    title: <>A calmer way<br/>to <span>move forward.</span></>,
    intro: 'We believe good work starts with a little more space to think. Northstar brings thoughtful tools and helpful AI into one considered workspace.',
    storyLabel: 'OUR POINT OF VIEW',
    storyTitle: 'Make room for what matters.',
    story: 'Work can feel clearer without becoming more complicated. We are shaping Northstar around the small, useful moments that help people make progress: a thought captured, a plan made, a question answered.',
    valuesLabel: 'WHAT GUIDES US',
    values: [
      { icon: Compass, title: 'Clarity over clutter', body: 'Every detail should make the next step feel easier to see.' },
      { icon: Heart, title: 'Human by design', body: 'Technology should meet people where they are and support the way they think.' },
      { icon: Sparkles, title: 'Useful, with a little wonder', body: 'The best tools make everyday work feel lighter—and leave room for new ideas.' },
    ],
    ctaTitle: 'Curious what we are making?',
    ctaBody: 'Explore the collection or start a conversation with Nova.',
    explore: 'Explore products',
    talk: 'Talk to Nova',
  },
  fa: {
    eyebrow: 'کمی دربارهٔ ما',
    title: <>راهی آرام‌تر<br/>برای <span>رو به جلو رفتن.</span></>,
    intro: 'باور داریم کار خوب با کمی فرصت بیشتر برای فکر کردن شروع می‌شود. نورث‌استار ابزارهای سنجیده و هوش مصنوعی همراه را در یک فضای کاری کنار هم می‌آورد.',
    storyLabel: 'نگاه ما',
    storyTitle: 'برای چیزهای مهم جا باز کن.',
    story: 'کار می‌تواند روشن‌تر و ساده‌تر پیش برود. نورث‌استار را برای لحظه‌های کوچکی می‌سازیم که کمک می‌کنند قدم بعدی را برداری: ثبت یک فکر، چیدن یک برنامه یا پیدا کردن پاسخ یک پرسش.',
    valuesLabel: 'چیزهایی که راهنمای ما هستند',
    values: [
      { icon: Compass, title: 'شفافیت، نه شلوغی', body: 'هر جزئیات باید دیدن قدم بعدی را آسان‌تر کند.' },
      { icon: Heart, title: 'با محوریت انسان', body: 'فناوری باید همراه آدم‌ها باشد و از شیوهٔ فکر کردنشان پشتیبانی کند.' },
      { icon: Sparkles, title: 'کاربردی، با کمی شگفتی', body: 'ابزار خوب کارهای روزمره را سبک‌تر می‌کند و برای ایده‌های تازه جا می‌گذارد.' },
    ],
    ctaTitle: 'دوست داری ببینی چه می‌سازیم؟',
    ctaBody: 'محصولات را ببین یا با نووا گفت‌وگو را شروع کن.',
    explore: 'دیدن محصولات',
    talk: 'گفت‌وگو با نووا',
  },
}

export default function CompanyPage() {
  const { language, openChat } = useOutletContext<SiteContext>()
  const copy = companyCopy[language]

  return <section className="company-page" aria-labelledby="company-title">
    <div className="company-hero">
      <div className="eyebrow"><span className="eyebrow-pip"/>{copy.eyebrow}</div>
      <h1 id="company-title">{copy.title}</h1>
      <p>{copy.intro}</p>
      <div className="company-orbit" aria-hidden="true"><div><Sparkles size={35}/></div><span>✳</span></div>
    </div>

    <section className="company-story" aria-labelledby="company-story-title">
      <div className="company-section-label"><span>01</span>{copy.storyLabel}</div>
      <div><h2 id="company-story-title">{copy.storyTitle}</h2><p>{copy.story}</p></div>
    </section>

    <section className="company-values" aria-labelledby="company-values-title">
      <div className="company-section-label"><span>02</span><h2 id="company-values-title">{copy.valuesLabel}</h2></div>
      <div className="company-value-grid">{copy.values.map(({ icon: Icon, title, body })=><article className="company-value-card" key={title}><span className="company-value-icon"><Icon size={19}/></span><h3>{title}</h3><p>{body}</p></article>)}</div>
    </section>

    <section className="company-cta">
      <div><h2>{copy.ctaTitle}</h2><p>{copy.ctaBody}</p></div>
      <div className="company-cta-actions"><Link to="/products">{copy.explore}<ArrowUpRight size={15}/></Link><button onClick={openChat}>{copy.talk}<ArrowUpRight size={15}/></button></div>
    </section>
  </section>
}
