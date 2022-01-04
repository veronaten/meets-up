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

export default MeetupDetails;