import React, { useEffect, useCallback, useState } from 'react'

type Item = { id: string; src: string; alt?: string }

export default function Lightbox({
  items,
  startIndex,
  onClose,
  onGoto
}: {
  items: Item[]
  startIndex: number
  onClose: () => void
  onGoto: (index: number) => void
}) {
  const [index, setIndex] = useState(startIndex)

  useEffect(() => {
    setIndex(startIndex)
  }, [startIndex])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowLeft') prev()
      if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, index]) // eslint-disable-line

  useEffect(() => {
    // preload next and previous images
    const preload = (src?: string) => {
      if (!src) return
      const img = new Image()
      img.src = src
    }
    const nextIndex = (index + 1) % items.length
    const prevIndex = (index - 1 + items.length) % items.length
    preload(items[nextIndex]?.src)
    preload(items[prevIndex]?.src)
  }, [index, items])

  const prev = useCallback(() => {
    const i = (index - 1 + items.length) % items.length
    setIndex(i)
    onGoto(i)
  }, [index, items.length, onGoto])

  const next = useCallback(() => {
    const i = (index + 1) % items.length
    setIndex(i)
    onGoto(i)
  }, [index, items.length, onGoto])

  const onBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) onClose()
  }

  const item = items[index]

  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={`Image ${index + 1} of ${items.length}`} onClick={onBackgroundClick}>
      <div className="lightbox-inner">
        <button className="close" onClick={onClose} aria-label="Close (Esc)">✕</button>

        <div className="lightbox-media">
          <button className="nav left" onClick={prev} aria-label="Previous (Left)">‹</button>
          <img src={item.src + '&auto=format&fit=max&w=1600'} alt={item.alt} />
          <button className="nav right" onClick={next} aria-label="Next (Right)">›</button>
        </div>

        <div className="lightbox-caption">
          <span>{item.alt}</span>
          <span>{index + 1} / {items.length}</span>
        </div>
      </div>
    </div>
  )
}
