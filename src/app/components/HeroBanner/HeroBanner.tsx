import Image from "next/image";

const HeroBanner = ({ imageData, logo }: { imageData: { source: string, alt: string }, logo: string}) => {
  return (
    <div className="relative w-full h-[50svh] mb-8 md:mb-32">
      <Image
        src={imageData.source}
        alt={imageData.alt}
        fill={true}
        style={{ objectFit: 'cover' }}
      />
      <div className="w-2/5 md:w-1/6 h-full relative mx-auto">
        <Image
          src={logo}
          alt={'logo'}
          fill={true}
          style={{ objectFit: 'contain' }}
        />
      </div>
    </div>
  )
}

export default HeroBanner;