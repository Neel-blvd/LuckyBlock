import Image from 'next/image'
import React from 'react'
import logo from '../../public/icons8-ether.svg'
import Link from 'next/link'
import ProfileModal from './ProfileModal'

function NavBar() {
  return (
    <nav className='bg-zinc-600 pt-5'>
        <ul className='flex justify-center space-x-5'>
            <li>
                <Link href="/">
                    <Image src={logo} alt='Website Logo' width={80}></Image>
                </Link>
            </li>
            <li className='pt-4'>
                <ProfileModal />
            </li>
        </ul>
    </nav>
  )
}

export default NavBar