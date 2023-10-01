
import type { NextPage } from "next";
import Image from "next/image";
import React from "react";
import { useState } from "react";
import style from '.././styles/FeedCenter.module.css';
import { TiVideo } from "react-icons/Ti";
import { IoMdPhotos } from "react-icons/Io";
import { CiFaceSmile } from "react-icons/Ci";
import { useRouter } from "next/navigation";


const Upload: NextPage = () => {
    // State to store the file
    const [file, setFile] = useState<File | null>(null);
    const [name, setName] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [date, setDate] = useState(new Date().toLocaleDateString())

    const router = useRouter()


    // State to store the base64
    const [base64, setBase64] = useState<string | null>(null);

    // When the file is selected, set the file state
    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files) {
            return;
        }

        setFile(e.target.files[0]);
    };

    // On click, clear the input value
    const onClick = (e: React.MouseEvent<HTMLInputElement>) => {
        e.currentTarget.value = "";
    };

    // On submit, upload the file
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!file && name) {
            return;
        }

        // Convert the file to base64
        const base64 = await toBase64(file as File);

        setBase64(base64 as string);

        // You can upload the base64 to your server here
        if (file) {
            try {
                let response = await fetch("http://localhost:3000/api/addPost", {
                    method: "POST",
                    body: JSON.stringify({ base64, file, name, date }),
                    headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                    },
                })
                response = await response.json();
                setMessage(`${alert("Post added successfully")}`);

                router.refresh()
            } catch (error) {
                console.log('Error:', error);
            }
        } else {
            return setError("All fields are required");
        }
    };

    return (
        <>
            <form method="POST" encType="multipart/form-data" onSubmit={handleSubmit}>
                {error ? <div className="alert-error">{error}</div> : null}
                <div className={style.outer_div} style={{ marginTop: "10px", paddingBottom: "10px" }}>

                    {/* Search Bar Container Start */}
                    <div style={{ padding: "10px 15px", display: "flex", alignItems: "center" }}>
                        {/* <Image src={session.user.image} alt='' height={40} width={40} style={{borderRadius:"50%",cursor:"pointer"}} /> */}
                        <input type="text" className={style.searchBar} name="text" onChange={(e) => { setName(e.target.value) }} onClick={onClick} placeholder='Write a Caption...' />
                        {/* placeholder={`What's on your mind, ${session.user.name}`} */}
                        <button type="submit" className={style.post_button}>Post</button>
                    </div>
                    {/* Search Bar Container End */}

                    <hr style={{ color: "gainsboro", margin: "20px 25px" }} />

                    {/* Upload Container Start */}
                    <div className={style.post_icon_outer_div}>

                        <div className={style.post_inner_icon_div}>
                            <TiVideo style={{ color: "red", fontSize: "28px" }} />
                            <p className={style.post_icon_name}>Live Video</p>
                        </div>

                        <label><div className={style.post_inner_icon_div}>
                            <IoMdPhotos style={{ color: "green", fontSize: "28px" }} />
                            <p className={style.post_icon_name}>photo/video</p>

                            <input
                                type="file"
                                name="avatar"
                                accept="image/*"
                                onChange={onFileChange}
                                onClick={onClick}
                                id="open"
                                style={{ display: "none" }}
                            />

                        </div></label>

                        <div className={style.post_inner_icon_div}>
                            <CiFaceSmile style={{ color: " goldenrod", fontSize: "28px" }} />
                            <p className={style.post_icon_name}>Feeling/activity</p>
                        </div>
                    </div>
                    {/* Upload Container End */}
                </div>
            </form>
        </>
    );
};

// Convert a file to base64 string
const toBase64 = (file: File) => {
    return new Promise((resolve, reject) => {
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        };

        fileReader.onerror = (error) => {
            reject(error);
        };
    });
};

export default Upload;