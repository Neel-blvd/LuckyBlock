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
import ToolTip from './ToolTip';
  

function ProfileModal() {
  return (
    <div>
        <Dialog>
            <DialogTrigger>
                <Image src={profileImage} alt='profile image'
                    className='grayscale hover:filter-none'></Image>
            </DialogTrigger>
            <DialogContent className='bg-zinc-600'>
                <DialogHeader>
                    <DialogTitle className='text-green-500 font-bold text-2xl text-center'>
                        Profile
                    </DialogTitle>
                    {/* <DialogDescription className='text-white'>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                    </DialogDescription> */}
                </DialogHeader>
                <div className='text-white'>
                    <p>Your wallet ID: </p>
                </div>
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
