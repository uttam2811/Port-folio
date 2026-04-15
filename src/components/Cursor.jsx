import { useEffect, useRef } from 'react'
import './Cursor.css'

export default function Cursor() {
  const dot  = useRef(null)
  const ring = useRef(null)
  const rx = useRef(0), ry = useRef(0)

  useEffect(() => {
    let mx = 0, my = 0
    const move = e => { mx = e.clientX; my = e.clientY }
    document.addEventListener('mousemove', move)

    const tick = () => {
      dot.current  && (dot.current.style.transform  = `translate(${mx-5}px,${my-5}px)`)
      rx.current += (mx - rx.current) * 0.13
      ry.current += (my - ry.current) * 0.13
      ring.current && (ring.current.style.transform = `translate(${rx.current-22}px,${ry.current-22}px)`)
      requestAnimationFrame(tick)
    }
    tick()

    const over  = () => ring.current?.classList.add('big')
    const out   = () => ring.current?.classList.remove('big')
    document.querySelectorAll('a,button,[data-hover]').forEach(el => {
      el.addEventListener('mouseenter', over)
      el.addEventListener('mouseleave', out)
    })

    return () => document.removeEventListener('mousemove', move)
  }, [])

  return <>
    <div className="c-dot" ref={dot} />
    <div className="c-ring" ref={ring} />
  </>
}
