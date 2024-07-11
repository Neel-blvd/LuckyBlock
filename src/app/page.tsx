import Image from 'next/image';
import play from '../../public/icons8-play-button-96.png'
import questionMark from '../../public/icons8-question-mark-100.png'
import ToolTip from '@/components/ToolTip';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen pt-10 bg-zinc-600">
      <div className='md:flex-row flex flex-col md:justify-evenly items-center justify-evenly
        h-96'>
        <Link href='/play'>
          <ToolTip content='Play'>
            <Image src={play} alt='play' className='hover:scale-105'></Image>
          </ToolTip>
        </Link>
        <Link href='/help'>
          <ToolTip content='Help'>
            <Image src={questionMark} alt='question mark' className='hover:scale-105'></Image>
          </ToolTip>
        </Link>

      </div>
    </main>
  );
}
