import React from "react";
import { StyleSheet, Text, Image, View, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";

const AlbumDetails = ({ album }) => {
  const { title, artist, thumbnail_image,image,url } = album;
  const {imageStyle,textContainer,thumbnailContainer,headerTextStyle,bannerStyle} = styles;
  return (
    <Card>
      <CardSection>
        <View style={thumbnailContainer}>
          <Image source={{ uri: thumbnail_image }} style={imageStyle} />
        </View>
        <View style={textContainer}>
          <Text style={headerTextStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>
      <CardSection>
        <Image source={{ uri: image }} style={bannerStyle} />
      </CardSection>
      <CardSection>
        <Button title="Buy Now" onPress={() => Linking.openURL(url)}/>
      </CardSection>
    </Card>
  );
};

const styles = StyleSheet.create({
  imageStyle: { width: 50, height: 50, borderRadius: 2 },
  thumbnailContainer:{
    marginHorizontal:10,
    justifyContent:'center',
    alignItems:'center'
  },
  headerTextStyle: {
    fontSize:18
  },
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around",
  },
  bannerStyle: { width: null, height: 300, borderRadius: 2,flex:1 },
});

export default AlbumDetails;
