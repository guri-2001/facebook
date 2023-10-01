"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Layout from '../app/login/layout'
import Image from 'next/image'
import style from '../styles/Login.module.css'


const RegisterForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!name || !email || !password) {
            setError("All field are required");
            return;
        }


        try {

            const resUserExists = await fetch("api/userExists", {
                method: "POST",
                headers: {
                    "Content_type": "application/json",
                },
                body: JSON.stringify({ email })
            });

            const { user } = await resUserExists.json();

            if (user) {
                setError("User already Exists");
                return;
            }


            const res = await fetch("api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    name, email, password
                })
            })

            if (res.ok) {
                setEmail("");
                setName("");
                setPassword("");

                router.push("/login")
            } else {
                console.log("User registeration failed");
            }




            console.log("response", res);
            // console.log("res", resUserExists);

        } catch (error) {
            console.log("Error during registeration", error);
        }

    }
    return (
        <>
            {/* <div>
                <div><Link href="/login">Go to login Page </Link></div>
                <h1>Register</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <button type="submit">Register</button>
                    </div>

                    {error && (<div>
                        {error}
                    </div>
                    )}
                </form>
            </div> */}
            <Layout>
                <div style={{ background: "skyblue", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", fontFamily: "arial" }}>
                    <div style={{ background: "#fff", borderRadius: "10px", display: "grid", gridTemplateColumns: "300px 400px" }}>
                        <div style={{ padding: "50px" }}>
                            <Image alt='' src="/facebook.png" height={250} width={250} />
                            <h1 style={{ color: "rgb(31, 138, 220)", margin: "15px 0 0 35px" }}>FACEBOOK</h1>
                        </div>
                        <div>

                            <div className={style.outer_div}>
                                <h2 className={style.heading}>Signup Page</h2>
                            </div>
                            <div className={style.input_div}>

                                <form onSubmit={handleSubmit}>
                                    <div className={style.input_inner_div}>
                                        <input
                                            value={name}
                                            type='text'
                                            placeholder='Username'
                                            className={style.input}
                                            onChange={(e) => { setName(e.target.value) }}
                                        />
                                    </div>

                                    <div className={style.input_inner_div}>
                                        <input
                                            value={email}
                                            type='email'
                                            placeholder='Email'
                                            className={style.input}
                                            onChange={(e) => { setEmail(e.target.value) }}
                                        />
                                    </div>

                                    <div className={style.input_inner_div}>
                                        <input
                                            value={password}
                                            type='password'
                                            placeholder='Password'
                                            className={style.input}
                                            onChange={(e) => { setPassword(e.target.value) }}
                                        />
                                    </div>

                                    <div>
                                        {error && (<div>
                                            {error}
                                        </div>
                                        )}
                                    </div>

                                    <div className={style.input_inner_div}>
                                        <button className={style.button}>Login</button>
                                    </div>

                                    {/* <div className={style.signIn_div} onClick={() => { signIn('google') }}>
                                        <p>Sign in with Google</p>
                                        <Image alt='' src="/g.jpg" width={25} height={25} />
                                    </div>

                                    <div className={style.signIn_div} onClick={() => { signIn('github') }}>
                                        <p>Sign in with Github</p>
                                        <Image alt='' src="/github.png" width={25} height={25} />
                                    </div> */}

                                    <div className={style.register_div}>
                                        <p>Dont have an account?<Link href='/login' className={style.Link}>Login.</Link></p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default RegisterForm