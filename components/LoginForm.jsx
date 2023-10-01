"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import style from '../styles/Login.module.css'
import Image from 'next/image'
// import Layout from '../app/layout'

const LoginForm = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await signIn("credentials", {
                email, password, redirect: false,
            });

            if (res.error) {
                setError("Invalid credentials");
                return;
            }

            router.replace("alldata");

        } catch (error) {
            console.log(error);
        }
    }

    const googleSignin = () => {
        signIn("google")
    }

    return (
        // <div>
        //     <h1>Sign In</h1>
        //     <form onSubmit={handleSubmit}>
        //         <div>
        //             <label htmlFor="email">Email</label>
        //             <input
        //                 type="email"
        //                 id="email"
        //                 name="email"
        //                 value={email}
        //                 onChange={e => setEmail(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <label htmlFor="password">Password</label>
        //             <input
        //                 type="password"
        //                 id="password"
        //                 name="password"
        //                 value={password}
        //                 onChange={e => setPassword(e.target.value)}
        //             />
        //         </div>
        //         <div>
        //             <button type="submit">Sign In</button>
        //         </div>
        //         <div>
        //             <button onClick={googleSignin} >Signin with Google</button>
        //         </div>
        //         {error && (
        //             <div>
        //                 {error}
        //             </div>
        //         )}
        //     </form>
        // </div>
        // <Layout>
        <div style={{ background: "skyblue", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", fontFamily: "arial" }}>
            <div style={{ background: "#fff", borderRadius: "10px", display: "grid", gridTemplateColumns: "300px 400px" }}>
                <div style={{ padding: "50px" }}>
                    <Image alt='' src="/facebook.png" height={250} width={250} />
                    <h1 style={{ color: "rgb(31, 138, 220)", margin: "15px 0 0 35px" }}>FACEBOOK</h1>
                </div>
                <div>

                    <div className={style.outer_div}>
                        <h2 className={style.heading}>Login Page</h2>
                    </div>
                    <div className={style.input_div}>

                        <form onSubmit={handleSubmit}>
                            <div className={style.input_inner_div}>
                                <input
                                    type='email'
                                    placeholder='Email'
                                    className={style.input}
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>

                            <div className={style.input_inner_div}>
                                <input
                                    type='password'
                                    placeholder='Password'
                                    className={style.input}
                                    value={password}
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div>
                                {error && (
                                    <div>
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
                                <p>Dont have an account?<Link href='/register' className={style.Link}>Signup.</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        // </Layout>
    )
}

export default LoginForm