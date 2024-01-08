const gallery = [ // Gallery image list
require('./Image/gallery/1.jpeg'),
  require('./Image/gallery/r1.jpeg'),
  require('./Image/gallery/a1.jpg'),
  require('./Image/gallery/r1a1.jpg'),
  require('./Image/gallery/f2.jpg'),
  require('./Image/gallery/r2.jpeg'),
  require('./Image/gallery/a2.jpg'),
  require('./Image/gallery/r2a2.jpeg'),
];

export default {
  global: {
    googleMapAPIKey: 'AIzaSyDSjYdBUN_NDRJQShxs0ugvMBV2goZvT2o',
    comment: {
      livere: {
        enable: false, // If false, Livere comment component won't render
        service: 'city',
        uid: 'MTAyMC8yNTYzNi8yMjMy',
      },
      facebook: {
        enable: false, // If false, Facebook comment component won't render
        appId: '1535680996513864',
      },
    },
  },
  title: 'Engagement Invitation', // Recommended in English
  wedding: {
    place: {
      name: 'Beautiful Engagement Hall - The Gharonda Hotel',
      address: '4th Floor, Sukhwani Fortune Bldg, Next to Poona Motors, Morwadi Chowk, Morewadi, Pimpri Colony, Pimpri-Chinchwad, Maharashtra 411018',
      latitude: 18.632832814944813,
      longitude: 73.80356937986551,
    },
    at: '2024-02-04 15:00',
  },
  bridal: {
    name: 'Aachal',
    image: require('./Image/aachal.jpeg'),
    phone: '+821011111111',
    facebook: false, // If false, Facebook icon won't show
    father: 'Ajay',
    mother: 'Mamta',
    position: 'Eldest Daughter',
  },
  groom: {
    name: 'Ratnesh',
    image: require('./Image/ratnesh.jpeg'),
    phone: '+821022222222',
    facebook: 'https://www.facebook.com/luckyyowu',
    father: 'Rakeshchandra',
    mother: 'Reena',
    position: 'Eldest Son',
  },
  image: {
    header: require('./Image/header.jpg'),
    hotel: require('./Image/gallery/hotel.jpg'),
    gallery: gallery.map(item => ({
      original: item,
      thumbnail: item,
    })),
  },
};
