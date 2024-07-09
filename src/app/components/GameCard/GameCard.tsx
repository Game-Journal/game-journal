import Image from 'next/image';
import { MouseEventHandler } from 'react';

const GameCard = ({ imageData, onClick } : { imageData: { source: string, alt: string }, onClick?: MouseEventHandler }) => {
  return (
    <div className='relative h-full aspect-[0.75/1]' onClick={onClick}>
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