import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
import { Fragment } from "react";

const HomePage = (props) => {
    return (
        <Fragment>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="A place to organise all your meetups"
                />
            </Head>
            <MeetupList meetups={props.meetups} />
        </Fragment>
    );
};

export async function getStaticProps() {
    // call api here
    const client = await MongoClient.connect(
        "mongodb+srv://ritwikpal20:8kfCG8bnS8KOsfks@todos.q04du.mongodb.net/meetups?retryWrites=true&w=majority",
        { useUnifiedTopology: true }
    );
    const db = client.db();
    const meetupCollection = db.collection("meetups");

    const meetups = await meetupCollection.find().toArray();
    return {
        props: {
            meetups: meetups.map((meetup) => ({
                title: meetup.title,
                image: meetup.image,
                address: meetup.address,
                id: meetup._id.toString(),
            })),
        },
        revalidate: 3600,
    };
}

// export async function getServerSideProps() {
//     // fetch Api
//     // gaurented to run for every request
//     return {
//         props: { meetups: MEETUPS },
//     };
// }

export default HomePage;
