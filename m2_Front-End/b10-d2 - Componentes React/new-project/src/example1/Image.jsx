import React from 'react';

class Image extends React.Component {
  render() {
    return <img src={this.props.source} alt={this.props.alternativeText} />;
  }
}

export default Image;

// import Album from './example1/Album'
// example 1
// const album01 = {
//   image: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/b0/Coldplay_-_Mylo_Xyloto.JPG/220px-Coldplay_-_Mylo_Xyloto.JPG',
//   title: 'Mylo Xyloto',
//   releaseDate: {
//     year: '2011',
//     month: '10',
//     day: '24',
//   },
//   others: {
//     recordCompany: 'Capitol, Parlophone',
//     formats: 'CD, digital'
//   }
// };

// const album02 = {
//   image: 'https://upload.wikimedia.org/wikipedia/pt/thumb/5/5d/Coldplay_-_Ghost_Stories.jpg/220px-Coldplay_-_Ghost_Stories.jpg',
//   title: 'Ghost Stories',
//   releaseDate: {
//     year: '2014',
//     month: '05',
//     day: '16',
//   },
//   others: {
//     recordCompany: 'Parlophone',
//     formats: 'CD, digital'
//   }
// };
// return  <div>
// <Album album={ album01 } />
// <Album album={ album02 } />
// </div>
// arquivo App.js, criado pelo create-react-app, modificado