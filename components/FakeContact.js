"use client"
import { useEffect, useState } from "react"
import { generateFakeUsers } from ".././utils/generateFakeUsers"
import Image from "next/image"
import styles from '../styles/FeedContact.module.css';


export default function FakeContactdata() {
    const [data, setData] = useState([])

    useEffect(() => {
        const loadData = generateFakeUsers(20)
        setData(loadData)
    }, [])

    return (
        <>
            {
                data.map((item, idx) => {
                    return (
                        <>
                            <div key={idx}>
                                <div className={styles.fake_data} >
                                    <Image alt="" src={item.avatar} height={35} width={35} style={{ borderRadius: "50%" }} />
                                    <p style={{ marginLeft: "10px", fontSize: '14px' }}>{item.fullName}</p>
                                </div>
                            </div>
                        </>
                    )
                })}
        </>
    )
}
