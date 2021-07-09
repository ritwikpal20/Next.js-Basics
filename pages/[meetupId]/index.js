import MeetupDetail from "../../components/meetups/MeetupDetail";
import { MongoClient, ObjectId } from "mongodb";
import Head from "next/head";

const DetailPage = (props) => {
    return (
        <>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta
                    name="description"
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
            />
        </>
    );
};

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@todos.q04du.mongodb.net/meetups?retryWrites=true&w=majority`,
        { useUnifiedTopology: true }
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const meetups = await meetupCollection.find({}, { _id: 1 }).toArray();
    client.close();
    return {
        fallback: "blocking",
        paths: meetups.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    const client = await MongoClient.connect(
        `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@todos.q04du.mongodb.net/meetups?retryWrites=true&w=majority`,
        { useUnifiedTopology: true }
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");
    const selectedMeetup = await meetupCollection.findOne({
        _id: ObjectId(meetupId),
    });
    client.close();
    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                image: selectedMeetup.image,
                title: selectedMeetup.title,
                address: selectedMeetup.address,
            },
        },
    };
}

export default DetailPage;
