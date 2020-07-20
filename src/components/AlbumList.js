import React, { useEffect, useState } from "react";
import { StyleSheet, ScrollView } from "react-native";
import axios from "axios";
import AlbumDetails from "./AlbumDetails";

const AlbumList = () => {
  const [albums, setAlbums] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const response = await axios.get(
        "https://rallycoding.herokuapp.com/api/music_albums"
      );
      if (typeof response.message === "undefined") {
        setAlbums(response.data);
      }
    };
    fetch();
  }, []);

  const renderAlbums = () => {
    return albums.map((obj, id) => <AlbumDetails key={id} album={obj} />);
  };
  return (
    <ScrollView>
      {renderAlbums()}
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default AlbumList;
