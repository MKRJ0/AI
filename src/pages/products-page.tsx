import { useEffect, useState } from 'react'
import { ArrowUpRight, Check, Clock3, CreditCard, LockKeyhole, ShoppingBag, Trash2, X } from 'lucide-react'
import { useOutletContext } from 'react-router'
import type { SiteContext } from '../App'

const collection = {
  en: {
    eyebrow: 'THE FIRST EDITION · SPRING / SUMMER',
    title: <>Pieces to <span>live in.</span></>,
    intro: 'Considered essentials, made for the everyday and the moments that become stories.',
    bag: 'in your bag', add: 'Add to bag', added: 'Added to bag', basketTitle: 'Your bag', emptyBag: 'Your bag is waiting for something good.', subtotal: 'Subtotal', keepShopping: 'Keep exploring', payNow: 'Continue to demo payment', simulatePayment: 'Simulate payment', demoSubmitted: 'Demo payment submitted — no money was charged.', remove: 'Remove', paymentTitle: 'Internet payment gateway', demo: 'DEMO · NO REAL PAYMENT', merchant: 'Merchant', orderAmount: 'Order total', processing: 'Your demo checkout is in progress.', returnsIn: 'Returning to the shop in', returnToShop: 'Return to shop', noRealPayment: 'Demo only. Never enter real card details. Values stay in this page and are not sent or saved.',
    products: [
      { id: 'coat', name: 'The Cloudline Trench', category: 'OUTERWEAR', description: 'A timeless double-breasted trench with a relaxed shape and matching belt.', price: '$248', color: 'Sand', image: 'trench-coat.jpg', alt: 'Sand-colored belted trench coat displayed by itself' },
      { id: 'shirt', name: 'Sunday Button-Up', category: 'EVERYDAY LAYERS', description: 'A crisp, relaxed cotton shirt made for easy everyday layering.', price: '$128', color: 'White', image: 'white-shirt.jpg', alt: 'White cotton button-up shirt displayed by itself' },
      { id: 'tee', name: 'Harbor Stripe Sweater', category: 'SOFT LAYERS', description: 'A cozy cream knit with classic dark stripes and a comfortable fit.', price: '$88', color: 'Cream / Ink', image: 'stripe-sweater.jpg', alt: 'Cream sweater with dark stripes displayed by itself' },
      { id: 'denim', name: 'Arc Wide Jean', category: 'DENIM', description: 'A relaxed, straight-leg fit in classic mid-wash blue denim.', price: '$148', color: 'Vintage indigo', image: 'wide-jeans.jpg', alt: 'Mid-wash blue wide-leg jeans displayed by themselves' },
      { id: 'knit', name: 'Off-Duty Hoodie', category: 'WEEKEND', description: 'A relaxed fleece hoodie with a roomy front pocket and soft feel.', price: '$98', color: 'Charcoal', image: 'hoodie.jpg', alt: 'Charcoal pullover hoodie displayed by itself' },
      { id: 'tote', name: 'Everyday Backpack', category: 'ACCESSORIES', description: 'A durable black backpack with practical pockets for everyday essentials.', price: '$78', color: 'Black', image: 'backpack.jpg', alt: 'Black everyday backpack displayed by itself' },
      { id: 'dress', name: 'Stillwater Knit Dress', category: 'ONE-PIECE', description: 'A deep green ribbed dress with a clean neckline and easy length.', price: '$168', color: 'Forest green', image: 'green-dress.jpg', alt: 'Forest green ribbed dress displayed by itself' },
      { id: 'sneakers', name: 'Grounded Sneaker', category: 'FOOTWEAR', description: 'A clean everyday sneaker with a cushioned sole and understated shape.', price: '$112', color: 'White', image: 'sneakers-photo.jpg', alt: 'Pair of white low-top sneakers displayed by themselves' },
      { id: 'linen-shirt', name: 'Northline Shell Jacket', category: 'OUTERWEAR', description: 'A lightweight black hooded shell with a full zip and practical pockets.', price: '$136', color: 'Black', image: 'shell-jacket.jpg', alt: 'Black hooded shell jacket displayed by itself' },
      { id: 'trousers', name: 'Utility Cargo Pant', category: 'BOTTOMS', description: 'Relaxed black cargo pants with roomy side pockets and an easy fit.', price: '$154', color: 'Black', image: 'cargo-pants.jpg', alt: 'Black utility cargo pants displayed by themselves' },
      { id: 'tank', name: 'After Hours Leather Jacket', category: 'OUTERWEAR', description: 'A classic black leather jacket with a clean, structured silhouette.', price: '$198', color: 'Black', image: 'leather-jacket.jpg', alt: 'Black leather biker jacket displayed by itself' },
      { id: 'scarf', name: 'City Chelsea Boot', category: 'FOOTWEAR', description: 'A polished black Chelsea boot with elastic sides and a sturdy sole.', price: '$128', color: 'Black', image: 'chelsea-boots.jpg', alt: 'Pair of black Chelsea boots displayed by themselves' },
    ],
  },
  fa: {
    eyebrow: 'ویرایش اول · بهار / تابستان',
    title: <>لباس‌هایی برای <span>زندگی.</span></>,
    intro: 'لباس‌های ضروری و خوش‌دوخت برای روزمره و لحظه‌هایی که به خاطره تبدیل می‌شوند.',
    bag: 'در سبد خرید', add: 'افزودن به سبد', added: 'به سبد اضافه شد', basketTitle: 'سبد خرید شما', emptyBag: 'سبد خریدتان منتظر یک انتخاب خوب است.', subtotal: 'جمع جزء', keepShopping: 'ادامه گشت‌وگذار', payNow: 'ادامه به درگاه آزمایشی', simulatePayment: 'شبیه‌سازی پرداخت', demoSubmitted: 'پرداخت نمایشی انجام شد؛ مبلغی کسر نشد.', remove: 'حذف', paymentTitle: 'درگاه پرداخت اینترنتی', demo: 'دمو · بدون پرداخت واقعی', merchant: 'فروشگاه', orderAmount: 'مبلغ سفارش', processing: 'پرداخت آزمایشی در حال انجام است.', returnsIn: 'بازگشت به فروشگاه تا', returnToShop: 'بازگشت به فروشگاه', noRealPayment: 'این صفحه فقط نمایشی است؛ اطلاعات کارت واقعی وارد نکنید. مقادیر فقط در همین صفحه می‌مانند و ارسال یا ذخیره نمی‌شوند.',
    products: [
      { id: 'coat', name: 'بارانی کلادلاین', category: 'لباس رویی', description: 'بارانی دکمه‌دار با فرمی آزاد و کمربند هماهنگ.', price: '$248', color: 'شنی', image: 'trench-coat.jpg', alt: 'بارانی کمربنددار شنی‌رنگ به‌تنهایی' },
      { id: 'shirt', name: 'پیراهن دکمه‌دار سان‌دی', category: 'لایه‌های روزمره', description: 'پیراهنی نخی، ساده و خوش‌فرم برای استفاده روزمره.', price: '$128', color: 'سفید', image: 'white-shirt.jpg', alt: 'پیراهن دکمه‌دار سفید به‌تنهایی' },
      { id: 'tee', name: 'بافت راه‌راه هاربر', category: 'لباس‌های نرم', description: 'بافت کرم‌رنگ و گرم با راه‌راه‌های تیره و فرمی راحت.', price: '$88', color: 'کرم / ذغالی', image: 'stripe-sweater.jpg', alt: 'پلیور کرم راه‌راه به‌تنهایی' },
      { id: 'denim', name: 'شلوار جین آرک', category: 'جین', description: 'شلوار جین آبی با فرمی آزاد و راحت برای استفاده روزمره.', price: '$148', color: 'آبی ایندیگو', image: 'wide-jeans.jpg', alt: 'شلوار جین آبی گشاد به‌تنهایی' },
      { id: 'knit', name: 'هودی آف‌دیوتی', category: 'آخر هفته', description: 'هودی ذغالی و راحت با جیب بزرگ جلویی و پارچه‌ای نرم.', price: '$98', color: 'ذغالی', image: 'hoodie.jpg', alt: 'هودی ذغالی به‌تنهایی' },
      { id: 'tote', name: 'کوله‌پشتی روزمره', category: 'اکسسوری', description: 'کوله‌پشتی مشکی و بادوام با جیب‌های کاربردی برای وسایل روزانه.', price: '$78', color: 'مشکی', image: 'backpack.jpg', alt: 'کوله‌پشتی مشکی به‌تنهایی' },
      { id: 'dress', name: 'پیراهن بافت استیل‌واتر', category: 'لباس یک‌تکه', description: 'پیراهن سبز دنده‌بافت با یقه ساده و قدی راحت.', price: '$168', color: 'سبز جنگلی', image: 'green-dress.jpg', alt: 'پیراهن سبز دنده‌بافت به‌تنهایی' },
      { id: 'sneakers', name: 'کتانی گراندد', category: 'کفش', description: 'کتانی سفید ساده با کفی نرم و فرمی مینیمال برای هر روز.', price: '$112', color: 'سفید', image: 'sneakers-photo.jpg', alt: 'یک جفت کتانی سفید به‌تنهایی' },
      { id: 'linen-shirt', name: 'کاپشن شِل نورث‌لاین', category: 'لباس رویی', description: 'کاپشن سبک مشکی کلاه‌دار با زیپ و جیب‌های کاربردی.', price: '$136', color: 'مشکی', image: 'shell-jacket.jpg', alt: 'کاپشن شِل مشکی کلاه‌دار به‌تنهایی' },
      { id: 'trousers', name: 'شلوار کارگو یوتیلیتی', category: 'شلوار', description: 'شلوار کارگو مشکی و راحت با جیب‌های بزرگ کناری.', price: '$154', color: 'مشکی', image: 'cargo-pants.jpg', alt: 'شلوار کارگو مشکی به‌تنهایی' },
      { id: 'tank', name: 'کت چرم افتر آورز', category: 'لباس رویی', description: 'کت چرم مشکی کلاسیک با فرمی خوش‌ساخت و ماندگار.', price: '$198', color: 'مشکی', image: 'leather-jacket.jpg', alt: 'کت چرم مشکی به‌تنهایی' },
      { id: 'scarf', name: 'نیم‌بوت چلسی سیتی', category: 'کفش', description: 'نیم‌بوت چلسی مشکی با کناره کشی و زیره مقاوم.', price: '$128', color: 'مشکی', image: 'chelsea-boots.jpg', alt: 'یک جفت نیم‌بوت چلسی مشکی به‌تنهایی' },
    ],
  },
}

export default function ProductsPage() {
  const { language } = useOutletContext<SiteContext>()
  const copy = collection[language]
  const [bag, setBag] = useState<string[]>([])
  const [basketOpen, setBasketOpen] = useState(false)
  const [checkoutOpen, setCheckoutOpen] = useState(false)
  const [demoSubmitted, setDemoSubmitted] = useState(false)
  const [secondsLeft, setSecondsLeft] = useState(30)
  const toggleBag = (id: string) => setBag(items => items.includes(id) ? items.filter(item => item !== id) : [...items, id])
  const itemsInBag = copy.products.filter(product => bag.includes(product.id))
  const total = itemsInBag.reduce((sum, product) => sum + Number(product.price.replace(/[^\d.]/g, '')), 0)
  useEffect(() => {
    if (!basketOpen) return
    const onKeyDown = (event: KeyboardEvent) => { if (event.key === 'Escape') setBasketOpen(false) }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [basketOpen])
  useEffect(() => {
    if (!checkoutOpen) return
    const deadline = Date.now() + 30_000
    const timer = window.setInterval(() => {
      const remaining = Math.max(0, Math.ceil((deadline - Date.now()) / 1000))
      setSecondsLeft(remaining)
      if (remaining === 0) setCheckoutOpen(false)
    }, 250)
    return () => window.clearInterval(timer)
  }, [checkoutOpen])

  return <section className="product-page" aria-labelledby="collection-title">
    <div className="collection-heading">
      <div><div className="eyebrow"><span className="eyebrow-pip"/>{copy.eyebrow}</div><h1 id="collection-title">{copy.title}</h1><p>{copy.intro}</p></div>
      <button className="bag-count" aria-live="polite" aria-label={`${copy.basketTitle}: ${bag.length}`} onClick={()=>setBasketOpen(true)}><ShoppingBag size={17}/><span>{bag.length}</span><span>{copy.bag}</span></button>
    </div>
    <div className="clothing-grid">{copy.products.map((product,index)=>{
      const added = bag.includes(product.id)
      return <article className="clothing-card" key={product.id}>
        <div className={`clothing-image image-${index}`}><img src={`/products/${product.image}`} alt={product.alt} loading="lazy"/><span className="category-tag">{product.category}</span><button className={`bag-button ${added?'is-added':''}`} onClick={()=>toggleBag(product.id)} aria-label={`${added?copy.added:copy.add}: ${product.name}`} aria-pressed={added}>{added?<Check size={17}/>:<ShoppingBag size={17}/>}</button></div>
        <div className="clothing-details"><div className="clothing-name-price"><h2>{product.name}</h2><strong>{product.price}</strong></div><p>{product.description}</p><div className="product-bottom"><span>{product.color}</span><button onClick={()=>toggleBag(product.id)} aria-pressed={added}>{added?copy.added:copy.add}<ArrowUpRight size={14}/></button></div></div>
      </article>
    })}</div>
    {basketOpen&&<div className="basket-layer"><button className="basket-backdrop" aria-label="Close basket" onClick={()=>setBasketOpen(false)}/><aside className="basket-drawer" role="dialog" aria-modal="true" aria-labelledby="basket-title" dir={language==='fa'?'rtl':'ltr'}><header className="basket-header"><div><span className="basket-kicker">NORTHSTAR · SHOP</span><h2 id="basket-title">{copy.basketTitle}<span>{bag.length}</span></h2></div><button className="basket-close" aria-label="Close basket" onClick={()=>setBasketOpen(false)}><X size={19}/></button></header>{itemsInBag.length===0?<div className="basket-empty"><span className="basket-empty-icon"><ShoppingBag size={22}/></span><p>{copy.emptyBag}</p><button onClick={()=>setBasketOpen(false)}>{copy.keepShopping}<ArrowUpRight size={14}/></button></div>:<><div className="basket-items">{itemsInBag.map(product=><article className="basket-item" key={product.id}><img src={`/products/${product.image}`} alt=""/><div className="basket-item-copy"><strong>{product.name}</strong><span>{product.color}</span><b>{product.price}</b></div><button className="basket-remove" aria-label={`${copy.remove}: ${product.name}`} onClick={()=>toggleBag(product.id)}><Trash2 size={15}/></button></article>)}</div><div className="basket-summary"><div><span>{copy.subtotal}</span><strong>{new Intl.NumberFormat(language==='fa'?'fa-IR':'en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(total)}</strong></div><small>{language==='fa'?'هزینه ارسال هنگام پرداخت محاسبه می‌شود.':'Shipping calculated at checkout.'}</small><button onClick={()=>{setBasketOpen(false);setSecondsLeft(30);setDemoSubmitted(false);setCheckoutOpen(true)}}>{copy.payNow}<ArrowUpRight size={14}/></button></div></>}</aside></div>}
    {checkoutOpen&&<div className="fake-payment-layer" dir={language==='fa'?'rtl':'ltr'}><section className="fake-payment-card" role="dialog" aria-modal="true" aria-labelledby="payment-title"><div className="fake-payment-brand"><span className="fake-payment-mark"><CreditCard size={19}/></span><span>{language==='fa'?'سپ · نسخه نمایشی':'SEP · DEMO'}</span><span className="fake-demo-badge">{copy.demo}</span></div><div className="fake-payment-content"><div className="fake-payment-lock"><LockKeyhole size={21}/></div><h2 id="payment-title">{copy.paymentTitle}</h2><p>{language==='fa'?'اطلاعات سفارش را بررسی کنید':'Review your order details'}</p><div className="fake-payment-summary"><div><span>{copy.merchant}</span><strong>northstar.</strong></div><div><span>{copy.orderAmount}</span><strong>{new Intl.NumberFormat(language==='fa'?'fa-IR':'en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(total)}</strong></div></div><form className="fake-gateway-fields" onSubmit={event=>{event.preventDefault();setDemoSubmitted(true)}}><label className="fake-gateway-field" htmlFor="demo-card">{language==='fa'?'شماره کارت':'Card number'}<input id="demo-card" type="text" inputMode="numeric" autoComplete="off" maxLength={19} pattern="[0-9 ]{16,19}" placeholder="••••　••••　••••　••••" required/></label><div className="fake-gateway-field-row"><label className="fake-gateway-field" htmlFor="demo-cvv">CVV2<input id="demo-cvv" type="password" inputMode="numeric" autoComplete="off" maxLength={4} pattern="[0-9]{3,4}" placeholder="•••" required/></label><label className="fake-gateway-field" htmlFor="demo-expiry">{language==='fa'?'تاریخ انقضا':'Expiry date'}<input id="demo-expiry" type="text" inputMode="numeric" autoComplete="off" maxLength={5} pattern="[0-9]{2}/[0-9]{2}" placeholder="•• / ••" required/></label><label className="fake-gateway-field" htmlFor="demo-captcha">{language==='fa'?'کد امنیتی':'Captcha'}<input id="demo-captcha" type="text" autoComplete="off" maxLength={4} pattern="A7K4" placeholder="A7K4" required/></label></div><label className="fake-gateway-field" htmlFor="demo-otp">{language==='fa'?'رمز پویا (نمایشی)':'One-time password (demo)'}<input id="demo-otp" type="password" inputMode="numeric" autoComplete="off" maxLength={6} pattern="[0-9]{6}" placeholder="••••••" required/></label><button className="fake-payment-submit" type="submit" disabled={demoSubmitted}>{demoSubmitted?copy.demoSubmitted:copy.simulatePayment}</button></form><div className="fake-payment-status"><span className="payment-spinner"/><span>{demoSubmitted?copy.demoSubmitted:copy.returnsIn} {!demoSubmitted&&<><b>{new Intl.NumberFormat(language==='fa'?'fa-IR':'en-US').format(secondsLeft)}</b> {language==='fa'?'ثانیه':'seconds'}</>}</span></div><small className="fake-payment-disclaimer">{copy.noRealPayment}</small><button className="fake-payment-return" onClick={()=>setCheckoutOpen(false)}>{copy.returnToShop}</button></div><footer className="fake-payment-footer"><LockKeyhole size={13}/>{language==='fa'?'محیط آزمایشی امن':'Secure demo environment'}<span><Clock3 size={13}/> 00:{String(secondsLeft).padStart(2,'0')}</span></footer></section></div>}
  </section>
}
