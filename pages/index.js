//our-domain/
import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: 'm1',
    title: 'The First Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Ibergeregg_sea_of_fog.jpg',
    adress: 'Some adress 5, 12345 Some City',
    description: 'This is a First Meetup'
  },
  {
    id: 'm2',
    title: 'The Second Meetup',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Lauterbrunnen_-_Staubbachfall.jpg/1024px-Lauterbrunnen_-_Staubbachfall.jpg',
    adress: 'Some adress 10, 12345 Some City',
    description: 'This is a Second Meetup'
  }
];

function HomePage() {
  return <MeetupList meetups={DUMMY_DATA}/>
};

export default HomePage;