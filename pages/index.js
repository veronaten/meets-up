//our-domain/
import Head from 'next/head';
import { Fragment } from 'react';

import { MongoClient } from 'mongodb';
import MeetupList from "../components/meetups/MeetupList";

function HomePage(props) {

  return (
    <Fragment>
      <Head>
        <title>React Meetups</title>
        <meta 
          name='description'
          content='Browse a huge list of highly active React meetups!'
        />
      </Head>
      <MeetupList meetups={props.meetups}/>
    </Fragment>
    
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