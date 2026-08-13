import React, { useState, useCallback } from 'react'
import Lightbox from './Lightbox'

type Item = { id: string; src: string; alt?: string }

export default function Gallery({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const open = useCallback((index: number) => {
    setOpenIndex(index)
  }, [])

  const close = useCallback(() => setOpenIndex(null), [])

  const goto = useCallback((index: number) => {
    setOpenIndex((current) => {
      if (index < 0) return items.length - 1
      if (index >= items.length) return 0
      return index
    })
  }, [items.length])

  return (
    <div>
      <div className="gallery-grid" role="list">
        {items.map((item, i) => (
          <button
            key={item.id}
            className="thumb"
            onClick={() => open(i)}
            aria-label={`Open image ${i + 1}: ${item.alt ?? ''}`}
          >
            <img src={item.src + '&auto=format&fit=crop&w=600'} alt={item.alt} loading="lazy" />
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          items={items}
          startIndex={openIndex}
          onClose={close}
          onGoto={goto}
        />
      )}
    </div>
  )
}
