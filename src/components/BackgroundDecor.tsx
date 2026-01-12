import { GiFlowerEmblem } from 'react-icons/gi'

export default function BackgroundDecor() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10">
      <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'radial-gradient(1200px 600px at 10% 0%, #F8D0CE 0%, transparent 60%), radial-gradient(800px 400px at 90% 10%, #B6B879 0%, transparent 60%), radial-gradient(600px 300px at 50% 100%, #F8EBD8 0%, transparent 60%)' }} />
      <div className="absolute top-24 left-6 text-[#F297A0] opacity-60">
        <GiFlowerEmblem size={64} />
      </div>
      <div className="absolute bottom-24 right-8 text-[#B6B879] opacity-50">
        <GiFlowerEmblem size={80} />
      </div>
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 text-[#F8D0CE] opacity-50">
        <GiFlowerEmblem size={72} />
      </div>
    </div>
  )
}

