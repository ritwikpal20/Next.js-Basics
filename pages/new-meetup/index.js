import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";

const NewMeetupPage = () => {
    const router = useRouter();
    const onAddMeetupHandler = async (meetupData) => {
        const response = await axios.post("/api/new-meetup", { meetupData });
        router.replace("/");
    };
    return (
        <>
            <Head>
                <title>Add New Meetup</title>
                <meta
                    name="description"
                    content="add your new meetups to view them"
                />
            </Head>
            <NewMeetupForm onAddMeetup={onAddMeetupHandler} />
        </>
    );
};

export default NewMeetupPage;
