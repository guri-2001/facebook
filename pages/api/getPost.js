import clientPromise from "../../config/mongoDB";

export default async function getPost (req, res) {
    try {
        const client = await clientPromise;
        const db = client.db("facebook");

        const mflix = await db
            .collection("data")
            .find({})
            .sort({ _id: -1 })
            // .limit(10)
            .toArray();

        res.json(mflix);
    } catch (e) {
        console.error(e);
    }
};

// export default getPost




