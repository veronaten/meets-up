import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

function MeetupDetails() {
  return (
    <Fragment>
      <MeetupDetail 
        image='https://upload.wikimedia.org/wikipedia/commons/3/37/Ibergeregg_sea_of_fog.jpg' 
        title='The First meetup' 
        adress='Some street 5, 12345 Some City' 
        description='The meetup description'
      />
    </Fragment>
  )
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
    
  }
}

export async function getStaticProps(context) {
  //fetch data for a single meetaup
  
  const meetupId = context.params.meetupId;
  console.log(meetupId);

  return {
    props: {
      meetupData: {
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Ibergeregg_sea_of_fog.jpg',
        id: meetupId,
        title: 'The First meetup',
        adress: 'Some street 5, 12345 Some City',
        description: 'The meetup description'
      }
    }
  }
}

export default MeetupDetails;