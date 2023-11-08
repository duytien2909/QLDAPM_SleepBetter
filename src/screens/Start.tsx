import { StyleSheet,Image, Text, View, SafeAreaView, TouchableHighlight, StatusBar, ImageBackground } from "react-native";


const StartScreen = () => {
  const bedImg = require('../../assets/Start/bed.png')
  const backgroundImg = require('../../assets/Start/wall.jpg')

  return (
    <ImageBackground
      style={styles.backgroundImg}
      source={backgroundImg}
      resizeMode="stretch">

      <StatusBar barStyle='light-content' />

      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 2}}></View>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={bedImg}/>
        </View>
        <View style={styles.startContainer}>
          <TouchableHighlight
            style={styles.start}
            underlayColor={'#a60101'}
            onPress={() => alert('Pressed!')}>
            <Text style={styles.startText}>START</Text>
          </TouchableHighlight>
        </View>
      </SafeAreaView>

    </ImageBackground>

  );
};

const styles = StyleSheet.create({
    backgroundImg: {
      width: '100%',
      height: '100%'
    },
    imageContainer:{
      flex: 2,
      alignItems: 'center',
    },
    image: {
      width: 200,
      height: 200,
      resizeMode: 'stretch'
    },
    startContainer: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
    },
    start: {
      width: 200,
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
      backgroundColor: '#bc0000',
      shadowColor: 'black',
      shadowOpacity: 0.26,
      shadowOffset: { width: 0, height: 2},
      shadowRadius: 10,
      elevation: 3,
    },
    startText: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold',
    },
  });

export default StartScreen;
