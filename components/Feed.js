import React from 'react'
import style from '../styles/Feed.module.css';
// import { useSession }  from 'next-auth/react'
import Image from 'next/image';
import FeedLeftPart from '../components/FeedLeftPart';
import FeedContact from '../components/FeedContact';
import FeedCenter from '../components/FeedCenter';

const Feed = () => {
    //   const { data: session } = useSession();
    // console.log(allposts);

    return (
        <>
            <div className={style.outer_div}>
                {/* username Part */}
                <div className={style.inner_div} style={{ height: "600px", overflowY: "scroll", position: "fixed" }}>

                    <div style={{ display: "flex", alignItems: "center", marginTop: "10px" }}>
                        {/* <Image src={session.user.image} alt="" height={35} width={35} style={{borderRadius:"50%"}}/> */}
                        {/* <h3 style={{fontFamily:"arial",fontWeight:"600",marginLeft:"10px"}}>{session.user.name}</h3> */}
                    </div>

                    {/* Icons Part */}
                    <FeedLeftPart />
                </div>

                {/* Center Part */}
                <div style={{ gridColumnStart: "2", gridColumnEnd: "3" }} className={style.center_div}>
                    <FeedCenter />
                </div>

                {/* Right Part */}

                <div style={{ gridColumnStart: "3", gridColumnEnd: "-1" }}>
                    <FeedContact/>
                </div>
            </div>
        </>
    );
}

export default Feed;