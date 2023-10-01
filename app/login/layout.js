import Image from 'next/image'
import React from 'react'

const Layout = ({children}) => {
  return (
    <div style={{background:"skyblue",display:"flex",justifyContent:"center",alignItems:"center",minHeight:"100vh",fontFamily:"arial"}}>
            <div style={{borderRadius:"10px",display:"grid",gridTemplateColumns:"50px 400px"}}>
                <div style={{padding:"50px"}}>
                    {/* <Image alt='' src="/facebook.png" height={250} width={250} /> */}
                    {/* <h1 style={{color:"rgb(31, 138, 220)",margin:"15px 0 0 35px"}}>FACEBOOK</h1> */}
                </div>
                <div>
                    {children }
                </div>
            </div>
        </div>
  )
}

export default Layout