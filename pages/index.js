import MeetupList from "../components/meetups/MeetupList";

const MEETUPS = [
    {
        id: "m1",
        image:
            "https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
        title: "First Meetup",
        address: "1street",
    },
    {
        id: "m2",
        image:
            "https://images.unsplash.com/photo-1619937812459-bf054619c8f8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1868&q=80",
        title: "Second Meetup",
        address: "Downtown",
    },
];

const HomePage = (props) => {
    return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
    // call api here
    return {
        props: { meetups: MEETUPS },
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
