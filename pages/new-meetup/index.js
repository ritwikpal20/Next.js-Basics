import NewMeetupForm from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
    const onAddMeetupHandler = (meetupData) => {
        console.log(meetupData);
    };
    return <NewMeetupForm onAddMeetup={onAddMeetupHandler} />;
};

export default NewMeetupPage;
