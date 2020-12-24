import React from 'react';
import {StyleSheet, View,Dimensions ,Image, ScrollView} from "react-native";
import { TouchableOpacity } from 'react-native-gesture-handler';
import WavyHeader from '../components/WavyHeader';
import {globalStyles} from '../styles/globalStyles';

export default function Category(props){
    return(
      <ScrollView style = {globalStyles.scrollView}>
    <View style = {styles.container}>
        <WavyHeader/>
       
        <View style = {styles.categoryView}>
        <TouchableOpacity>
        <Image  source ={require('../assets/logo1.png')} style = {styles.image}/>
        </TouchableOpacity>
       
        <TouchableOpacity onPress = {() => { props.navigation.push("Products")}}>
        <Image source ={require('../assets/logo1.png')} style = {styles.image}/>
        </TouchableOpacity>
        </View>
        
    </View>
    </ScrollView>
    );
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  categoryView : {
      flexDirection : "row",
      justifyContent: "center",
  },
  image:{
      backgroundColor : "black",
      padding : 20,
      margin : 20,
      width : 150,
      height : 150,
      borderRadius : 200,
      

  }
});