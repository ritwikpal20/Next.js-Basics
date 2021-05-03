import MeetupDetail from "../../components/meetups/MeetupDetail";

const DetailPage = () => {
    return (
        <MeetupDetail
            image="https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80"
            title="First Meetup"
            address="1street"
        />
    );
};

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;
    return {
        props: {
            meetupData: {
                id: meetupId,
                image:
                    "https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
                title: "First Meetup",
                address: "1street",
            },
        },
    };
}

export default DetailPage;
