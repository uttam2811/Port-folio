import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const rx = useRef(0), ry = useRef(0);

  useEffect(() => {
    let mx = 0, my = 0;
    const move = e => { mx = e.clientX; my = e.clientY; };
    document.addEventListener('mousemove', move);

    const tick = () => {
      if (dotRef.current)
        dotRef.current.style.transform = `translate(${mx - 6}px,${my - 6}px)`;
      rx.current += (mx - rx.current) * 0.12;
      ry.current += (my - ry.current) * 0.12;
      if (ringRef.current)
        ringRef.current.style.transform = `translate(${rx.current - 18}px,${ry.current - 18}px)`;
      requestAnimationFrame(tick);
    };
    tick();
    return () => document.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
}
