import Image from 'next/image';
import { MouseEventHandler } from 'react';

const GameCard = ({ imageData, onClick } : { imageData: { source: string, alt: string }, onClick?: MouseEventHandler }) => {
  return (
    <div className='relative min-w-32 aspect-[0.75/1] pointer-events-auto cursor-pointer' onClick={onClick}>
      <Image
        className='rounded-xl'
        src={imageData.source}
        alt={imageData.alt}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
    </div>
  )
}

export default GameCard;