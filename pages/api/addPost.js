import clientPromise from "../../config/mongoDB";

async function addPost (req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("facebook");
        const { file, base64, name, comment, date } = req.body;
    
        const post = await db.collection("data").insertOne({
            file,
            base64,
            name,
            date,
            comment,
        });
    
        res.json(post);
        } catch (e) {
        console.error(e);
        throw new Error(e).message;
        }
    };


    export default addPost;
