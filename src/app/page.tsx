import Image from "next/image";
import InformationSection from "./components/InformationSection/InformationSection";

export default function Home() {
  return (
    <>
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
