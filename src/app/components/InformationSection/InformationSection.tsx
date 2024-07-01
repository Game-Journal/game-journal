import Image from "next/image";

type InformationSectionType = {
  imageData: {
    source: string,
    alt: string,
  },
  title?: string,
  text: string,
  isImageOnRight?: boolean,
}

const InformationSection = ({ imageData, title, text, isImageOnRight = false } : InformationSectionType) => {
  return (
    <div className={`w-full flex flex-col ${isImageOnRight ? 'md:flex-row-reverse' : 'md:flex-row'} justify-center gap-8 px-8 sm:px-8 mb-8`}>
      <div className='relative w-full lg:w-3/5 h-[60vh]'>
        <Image
          className='h-auto max-w-full rounded-xl'
          src={ imageData.source }
          alt={ imageData.alt }
          fill={true}
          style={{objectFit: 'cover'}}
        />
      </div>
      <div className='w-full md:w-2/5 flex flex-col justify-center'>
        <h1 className='text-5xl mb-4'>{title}</h1>
        <p className='text-xl whitespace-pre-wrap'>{text}</p>
      </div>
    </div>
  )
}

export default InformationSection;