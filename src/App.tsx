import React from 'react'
import Gallery from './components/Gallery'

const images = [
  // Unsplash example images - replace with your own if desired
  { id: '1', src: 'https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?w=1200&q=80', alt: 'Mountains at sunset' },
  { id: '2', src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200&q=80', alt: 'Forest path' },
  { id: '3', src: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1200&q=80', alt: 'Sea horizon' },
  { id: '4', src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200&q=80', alt: 'Cactus closeup' },
  { id: '5', src: 'https://images.unsplash.com/photo-1504198453319-5ce911bafcde?w=1200&q=80', alt: 'Desert dunes' },
  { id: '6', src: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?w=1200&q=80', alt: 'City skyline' },
  { id: '7', src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=1200&q=80', alt: 'Snowy mountains' },
  { id: '8', src: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1200&q=80', alt: 'Lush valley' }
]

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>TypeScript Image Gallery Demo</h1>
        <p>Click an image to open the lightbox. Use ← → and Esc for navigation and close.</p>
      </header>

      <main>
        <Gallery items={images} />
      </main>

      <footer>
        <small>Demo — replace images with your own URLs or a dynamic feed.</small>
      </footer>
    </div>
  )
}
