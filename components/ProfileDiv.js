// import Link from 'next/link';
// import React from 'react'
// import { signOut, useSession } from 'next-auth/react'
// import Image from 'next/image';
// import style from '../../styles/ProfileDiv.module.css'
// import { AiFillSetting } from 'react-icons/Ai';
// import { IoIosHelpCircle } from 'react-icons/Io';
// import { BsFillMoonFill } from 'react-icons/Bs';
// import { MdFeedback } from 'react-icons/md';
// import { RiLogoutBoxRFill } from 'react-icons/Ri';
// import { FaAngleRight } from 'react-icons/Fa';


// const ProfileDiv = () => {
//     const {data: session} = useSession();

//     return (
//         <>
//             <div id='profile' className={style.outer_div}>
//                 <div className={style.inner_profile_div}>
//                     <Link href="/Profile" className={style.user_image}>
//                     {/* <Image src={session.user.image} alt='' height={35} width={35} style={{borderRadius:"50%",cursor:"pointer"}} /> */}
//                     {/* <h3 style={{color:"black",marginLeft:"10px",fontWeight:"500"}}>{session.user.name}</h3> */}
//                     </Link>
//                     <hr style={{margin:"10px 0"}}/>
//                     <p className={style.profile}>See all Profile</p>
//                 </div>

//                 <div className={style.icon_outer_div}>
//                     <div className={style.icon_div}>
//                         <div className={style.icon_back}>
//                             <AiFillSetting style={{fontSize:"22px"}}/>
//                         </div>
//                         <p style={{marginLeft:"10px"}}>Settings & privacy</p>
//                             <FaAngleRight style={{fontSize:"22px",marginLeft:"100px"}} />
//                     </div>
//                     <div className={style.icon_div}>
//                         <div className={style.icon_back}>
//                             <IoIosHelpCircle style={{fontSize:"22px"}} />
//                         </div>
//                         <p style={{marginLeft:"10px"}}>Help & Support</p>
//                         <FaAngleRight style={{fontSize:"22px",marginLeft:"120px"}} />
//                     </div>
//                     <div className={style.icon_div}>
//                         <div className={style.icon_back}>
//                             <BsFillMoonFill style={{fontSize:"22px"}} />
//                         </div>
//                         <p style={{marginLeft:"10px"}}>Display & accessibility</p>
//                         <FaAngleRight style={{fontSize:"22px",position:"relative",left:"70px"}} />
//                     </div>
//                     <div className={style.icon_div}>
//                         <div className={style.icon_back}>
//                             <MdFeedback style={{fontSize:"22px"}} />
//                         </div>
//                         <p style={{marginLeft:"10px"}}>Give feedback</p>
//                     </div>
//                     <div className={style.icon_div} onClick={()=> signOut()}>
//                         <div className={style.icon_back}>
//                             <RiLogoutBoxRFill style={{fontSize:"22px"}}/>
//                         </div>
//                         <Link href="" style={{textDecoration:"none",color:"black"}}>
//                             <p style={{marginLeft:"10px"}}>Log Out</p>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )
// }

// export default ProfileDiv;





import Link from 'next/link';
import React from 'react'
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image';
import style from '.././styles/ProfileDiv.module.css'
import { AiFillSetting } from 'react-icons/Ai';
import { IoIosHelpCircle } from 'react-icons/Io';
import { BsFillMoonFill } from 'react-icons/Bs';
import { MdFeedback } from 'react-icons/md';
import { RiLogoutBoxRFill } from 'react-icons/Ri';
import { FaAngleRight } from 'react-icons/Fa';


const ProfileDiv = () => {
    const {data: session} = useSession();

    return (
        <>
            <div id='profile' className={style.outer_div}>
                <div className={style.inner_profile_div}>
                    <Link href="/Profile" className={style.user_image}>
                    {/* <Image src={session.user.image} alt='' height={35} width={35} style={{borderRadius:"50%",cursor:"pointer"}} /> */}
                    {/* <h3 style={{color:"black",marginLeft:"10px",fontWeight:"500"}}>{session.user.name}</h3> */}
                    </Link>
                    <hr style={{margin:"10px 0"}}/>
                    <p className={style.profile}>See all Profile</p>
                </div>

                <div className={style.icon_outer_div}>
                    <div className={style.icon_div}>
                        <div className={style.icon_back}>
                            <AiFillSetting style={{fontSize:"22px"}}/>
                        </div>
                        <p style={{marginLeft:"10px"}}>Settings & privacy</p>
                            <FaAngleRight style={{fontSize:"22px",marginLeft:"100px"}} />
                    </div>
                    <div className={style.icon_div}>
                        <div className={style.icon_back}>
                            <IoIosHelpCircle style={{fontSize:"22px"}} />
                        </div>
                        <p style={{marginLeft:"10px"}}>Help & Support</p>
                        <FaAngleRight style={{fontSize:"22px",marginLeft:"120px"}} />
                    </div>
                    <div className={style.icon_div}>
                        <div className={style.icon_back}>
                            <BsFillMoonFill style={{fontSize:"22px"}} />
                        </div>
                        <p style={{marginLeft:"10px"}}>Display & accessibility</p>
                        <FaAngleRight style={{fontSize:"22px",position:"relative",left:"70px"}} />
                    </div>
                    <div className={style.icon_div}>
                        <div className={style.icon_back}>
                            <MdFeedback style={{fontSize:"22px"}} />
                        </div>
                        <p style={{marginLeft:"10px"}}>Give feedback</p>
                    </div>
                    <div className={style.icon_div} onClick={()=> signOut()}>
                        <div className={style.icon_back}>
                            <RiLogoutBoxRFill style={{fontSize:"22px"}}/>
                        </div>
                        <Link href="" style={{textDecoration:"none",color:"black"}}>
                            <p style={{marginLeft:"10px"}}>Log Out</p>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProfileDiv;

