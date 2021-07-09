import { MongoClient } from "mongodb";

async function handler(req, res) {
    if (req.method === "POST") {
        const data = req.body.meetupData;
        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@todos.q04du.mongodb.net/meetups?retryWrites=true&w=majority`,
            { useUnifiedTopology: true }
        );
        const db = client.db();
        const meetupCollection = db.collection("meetups");
        const result = await meetupCollection.insertOne(data);
        client.close();
        res.status(201).json({ message: "meetup inserted" });
    }
}

export default handler;
