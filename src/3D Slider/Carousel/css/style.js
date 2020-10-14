import { Alert, StyleSheet,Dimensions,Platform} from 'react-native';
import { transformer } from '../../../../metro.config';
const screenWidth = Dimensions.get('window').width;
const screenHight = Dimensions.get('window').height;

const numberOfImgs = 5;
const viewImgsDistance = 500;

const styles = StyleSheet.create({
    
    // Carousel Code 
    container: {
      flex: 1,
      backgroundColor:'gray',
      justifyContent:'center',
      alignItems:'center',
    },
    imageContainer: {
     padding:5,
     transform: [
      { perspective: 850 },
      { translateX: - screenWidth * 0.24 },
      { rotateY: '90deg'},

    ],
    },
    imagesStyle:{
      height:150,
      width:220,
      marginTop:20,
      // perspective:500
    },
    hexagon:{
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    },
  

  });

export default styles;