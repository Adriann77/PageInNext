import Image from 'next/image';
import Link from 'next/link';

export default function Nav() {
  return (
    <nav className='flex justify-center items-center h-20 mb-16 lg:mb-32'>
      <Link href='/'>
        <Image
          className='w-40'
          src='/Logo.svg'
          width={160}
          height={40}
          alt='logo'
        ></Image>
      </Link>
    </nav>
  );
}
