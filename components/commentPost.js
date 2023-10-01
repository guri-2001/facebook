"use client"
import React, { useState } from 'react';
import style from '.././styles/Comment.module.css'
import { TfiComment } from 'react-icons/tfi';
import { TbShare3 } from 'react-icons/Tb';
import Image from 'next/image';

const CommentPost = () => {

    const [comment, setComment] = useState("")
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [show , setShow] = useState(false);
    const [like, setLike] = useState(true)



    const handleSubmit = async (e) => {
        e.preventDefault();
            if (comment) {
                try {
                    let response = await fetch("http://localhost:3000/api/addComment", {
                        method: "POST",
                        body: JSON.stringify({
                        comment,
                        }),
                        headers: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": "application/json",
                        },
                    });
                    response = await response.json();
                    setMessage("Post added successfully");
                    } catch (errorMessage) {
                    setError("problem");
                    }
                } else {
                    return setError("All fields are required");
                }
            }

            function showDiv(e) {
                e.preventDefault()
                setShow(!show)
                setLike(!like)
            }
    return (
    <>
        <form style={{padding:"5px"}} onSubmit={handleSubmit}>
            <div>
                {
                    show? <div style={{display:"flex",alignItems:"center",gap:'5px', margin:"3px 10px"}}>
                        <Image alt='' src="/like.png" width={20} height={20}/>
                        <p>You Liked</p>
                    </div> : null
                }
            </div>
            <hr style={{margin:"5px 15px"}}/>
            <div className={style.main_div}>
                <div className={style.icon_div}onClick={showDiv}>
                    {/* <BiLike/> */}
                    {
                        like ? 
                        <div style={{display:"flex",gap:"5px"}}><Image alt='' src="/like1.png" width={15} height={15}/><p>Like</p></div>
                        :<div style={{display:"flex",gap:"5px"}}><Image alt='' src="/like2.png" width={15} height={15}/><p style={{color:"#1f8adc"}}>Like</p></div>
                    }
                    
                    {/* <p>Like</p> */}
                </div>

                <div className={style.icon_div}>
                    <TfiComment/>
                    <p>Comment</p>
                </div>
                <div className={style.icon_div}>
                    <TbShare3 />
                    <p>Share</p>
                </div>
            </div>
            {/* <div style={{position:"relative"}}>
                <input
                    type= "text"
                    placeholder= "Write a Comment"
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                    className={style.input}
                />
                <Tooltip title="Comment">
                    <button type="submit" className={style.Submit_btn}>s</button>
                </Tooltip>
            </div> */}
        </form>
    </>
    )
}

export default CommentPost;


// export default function AddPost() {
//   const [name, setName] = useState("");
//   const [age, setAge] = useState("");
//   const [image, setImage] = useState("");
//   const [error, setError] = useState("");
//   const [message, setMessage] = useState("");

//   console.log(image);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    // if (name && age && image) {
    //   try {
    //     let response = await fetch("http://localhost:3000/api/movies", {
    //       method: "POST",
    //       body: JSON.stringify({
    //         name,
    //         age,
    //         image,
    //       }),
    //       headers: {
    //         Accept: "application/json, text/plain, */*",
    //         "Content-Type": "application/json",
    //       },
    //     });
    //     response = await response.json();
    //     setName("");
    //     setAge("");
    //     setError("");
    //     setImage("")
    //     setMessage("Post added successfully");
    //   } catch (errorMessage) {
    //     setError(errorMessage);
    //   }
    // } else {
    //   return setError("All fields are required");
    // }
//   };
//   return(
//     <>
//       <form onSubmit={handleSubmit}>
//       {error ? <div className="alert-error">{error}</div> : null}
//       {message ? <div className="alert-message">{message}</div> : null}
//       <div className="form-group">
//         <label>Username</label>
//         <input
//           type= "text"
//           placeholder= "Username"
//           onChange={(e) => setName(e.target.value)}
//           value={name}
//         />
//       </div>
//       <div className="form-group">
//         <label>Age</label>
//         <input
//           placeholder= "Enter your age"
//           value={age}
//           onChange={(e) => setAge(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <label>Add Image</label>
//         <input
//           type="file"
//           // accept="image/png, image/gif, image/jpeg"
//           value={image}
//           onChange={(e) => setImage(e.target.value)}
//         />
//       </div>
//       <div className="form-group">
//         <button type="submit" className="submit_btn">
//           Add Post
//         </button>
//         <Link href="/top">
//           <button>All Posts</button>
//         </Link>
//       </div>
//     </form>
//     </>
//   )
// }




// <i data-visualcompletion="css-img" class="x1b0d499 x1d69dk1" style="background-image: url(&quot;https://static.xx.fbcdn.net/rsrc.php/v3/yk/r/KCKVAv_h8PT.png&quot;); background-position: 0px -180px; background-size: 26px 516px; width: 18px; height: 18px; background-repeat: no-repeat; display: inline-block;"></i>