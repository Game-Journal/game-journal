import Link from "next/link";
import HeroBanner from "./components/HeroBanner/HeroBanner";
import Button from "./components/Button/Button";
import InformationSection from "./components/InformationSection/InformationSection";
import GameCard from "./components/GameCard/GameCard";

export default function Home() {
  return (
    <>
      <HeroBanner imageData={{ source: '/snes.jpg', alt: 'SNES console' }} logo='/game-journal-logo.webp' />
      <div className='flex flex-col-reverse md:flex-row gap-8 items-center px-8 mb-8 md:mb-32'>
        <div className='flex flex-col w-1/2 items-center gap-8 md:gap-16'>
          <Link className='w-fit' href='/signup'>
            <Button label='Sign Up' type='primary' />
          </Link>
          <Link className='w-fit' href='/login'>
            <Button label='Log in' type='secondary' />
          </Link>
        </div>
        <div className='w-full md:w-1/2 text-center md:text-left text-xl md:text-4xl whitespace-pre-wrap'>
          {`Welcome to Game Journal!
Here you can keep track of your gaming library, plan what you’re next going to play and share your thoughts on your favourite games.`}
        </div>
      </div>
      <InformationSection imageData={{ source: '/bird.jpg', alt: 'a bird' }} title='Scott the Best' text='Here is details on what the website is
Lorem Ipsum dwsodkjfaoipsdf aiosdf oiasdfhj asoidfj asdifjaios
fsuidf asdif
fauoisdfhoiasd f
sadfuashduf 
asdf ausdfaiosjdfoias'/>
      <InformationSection imageData={{ source: '/gb.jpg', alt: 'a bird' }} title='Scott the Best' text='Here is details on what the website is
Lorem Ipsum dwsodkjfaoipsdf aiosdf oiasdfhj asoidfj asdifjaios
fsuidf asdif
fauoisdfhoiasd f
sadfuashduf 
asdf ausdfaiosjdfoias' isImageOnRight={true}/>
      <InformationSection imageData={{ source: '/snes.jpg', alt: 'a bird' }} title='Scott the Best' text='Here is details on what the website is
Lorem Ipsum dwsodkjfaoipsdf aiosdf oiasdfhj asoidfj asdifjaios
fsuidf asdif
fauoisdfhoiasd f
sadfuashduf 
asdf ausdfaiosjdfoias'/>
    </>
  )
}
