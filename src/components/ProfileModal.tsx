import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image';
import profileImage from '../../public/icons8-male-user-48.png'
import logOut from '../../public/icons8-log-out-32.png'
import copy from '../../public/icons8-copy-48.png'
import ToolTip from './ToolTip';
import CopyToClipboard from './CopyToClipboard';
  

function ProfileModal() {
  return (
    <div>
        <Dialog>
            <DialogTrigger>
                <Image src={profileImage} alt='profile image'
                    className='grayscale hover:filter-none'></Image>
            </DialogTrigger>
            <DialogContent className='bg-zinc-600 border-zinc-600'>
                <DialogHeader>
                    <DialogTitle className='text-green-500 font-bold text-2xl text-center'>
                        Profile
                    </DialogTitle>
                </DialogHeader>
                <p className='text-green-500 font-bold'>
                    Your public key:
                </p>
                <div className='text-white -mt-2 flex justify-center'>
                    <CopyToClipboard content='0xab32ebacd2babc323ff41ee1a34910cdfaa10'>
                    </CopyToClipboard>
                </div>
                <div className='flex flex-row justify-between items-center border-t pt-4'>
                    <p className='text-white font-bold'>
                        Total Bets: <p className='md:inline text-center text-green-500 font-bold'>11</p>
                    </p>
                    <p className='text-white font-bold'>
                        Net Profit or Loss: <p className='md:inline text-center text-green-500 font-bold'>0.17 ETH</p>
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-white font-bold'>
                        Total Winnings: <p className='md:inline text-center text-green-500 font-bold'>0.45 ETH</p>
                    </p>
                    <p className='text-white font-bold'>
                        Win Percentage: <p className='md:inline text-center text-green-500 font-bold'>74%</p>
                    </p>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <p className='text-white font-bold'>
                        Total Loss: <p className='md:inline text-center text-red-500 font-bold'>0.28 ETH</p>
                    </p>
                    <p className='text-white font-bold'>
                        Biggest Win: <p className='md:inline text-center text-green-500 font-bold'>0.31 ETH</p>
                    </p>
                </div>
                <div className='flex md:flex-row md:justify-between flex-col items-center border-t pt-4'>
                    <p className='text-white font-bold'>
                        Total Playtime: <p className='md:inline text-center text-green-500 font-bold'>36 days, 4 hours</p>
                    </p>
                    <p className='text-white font-bold'>
                        Last Active: <p className='md:inline text-center text-green-500 font-bold'>14 Apr 2024</p>
                    </p>
                </div>
                <p className='text-white font-bold'>
                    Gambling Since: <p className='md:inline text-center text-green-500 font-bold'>23 Sep 2023</p>
                </p>
                
                <DialogFooter>
                    <button className='grayscale hover:filter-none'>
                        <ToolTip content='Log Out'>
                            <Image src={logOut} alt='Log Out'></Image>
                        </ToolTip>
                    </button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    </div>
  );
}

export default ProfileModal
