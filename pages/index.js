//our-domain/
import { MongoClient } from 'mongodb';

import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {

  return (
    <MeetupList meetups={props.meetups}/>
  )
};

// export async function getServerSideProps(context) {

//   const req = context.req;
//   const res = context.res;

//   // fetch any data from API
//   return {
//     props: {
//       meetups: DUMMY_DATA
//     }
//   }
// }

export async function getStaticProps() {
  //fetching data from API

  const client = await MongoClient.connect('mongodb+srv://veronaten:73330442929@cluster0.p9t2g.mongodb.net/meetups?retryWrites=true&w=majority');

  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        image: meetup.image,
        address: meetup.address,
        id: meetup._id.toString(),
      }))
    },
    revalidate: 1
  }
};

export default HomePage;