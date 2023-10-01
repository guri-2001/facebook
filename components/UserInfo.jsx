"use client"
import React from 'react'
import { signOut } from 'next-auth/react'
import { useSession } from 'next-auth/react'

const UserInfo = () => {

  const { data: session } = useSession();

  console.log(session);

  return (
    <div>
        <div>
            <h1>NAME : {session?.user?.name}</h1>
            <h2>Email : {session?.user?.email} </h2>
        </div>
        <div>
            <button onClick={() => signOut()}>Log Out</button>
        </div>
    </div>
  )
}

export default UserInfo