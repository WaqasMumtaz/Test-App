
/*This is an Example of React Native Rotate Image View Using Animation*/
import React, {useRef, useState, useEffect} from 'react';
// import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
 import styles from './css/style';
//  import styles from './css/style.scss';

import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
  Animated,

} from 'react-native';

const imagesArr = [
  {
    title:'image-1',
    url:"https://i.imgur.com/UYiroysl.jpg"
  },
  {
    title:'image-2',
    url:"https://i.imgur.com/UPrs1EWl.jpg"
  },
  {
    title:'image-3',
    url:"https://i.imgur.com/MABUbpDl.jpg"
  },
  {
    title:'image-4',
    url:"https://i.imgur.com/KZsmUi2l.jpg"
  },
  {
    title:'image-5',
    url:"https://i.imgur.com/2nCt3Sbl.jpg"
  }
]



const imgsShow =  imagesArr.map((items , index)=>{
  // console.log('Images Arr >>', items)
  return (
    <Image 
     source={{uri:items.url}}
     style={styles.imagesStyle}
     resizeMode='cover'
     index={index}
    />
  )
})

const formula=()=>{
    console.log('Formula ***>', 200 / (2 * tan(3.14/5)));
}
formula();


 const MyCarousel = props => {
//   const [entries, setEntries] = useState({});

return(
    <View style={styles.container}>
         <View style={styles.imageContainer}>
          {imgsShow}
         </View>
    </View>

)
}

export default MyCarousel;

