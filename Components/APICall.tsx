import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function APICall() {
  const [data, setData] = useState<Post[]>([]);

  const getData = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const json = await res.json();
    setData(json);
  };

  useEffect(() => {
    getData();
  }, []);

  const renderItem = ({ item }: { item: Post }) => (
    <View style={styles.box}>
      <Text>ID: {item.id}</Text>
      <Text>{item.title}</Text>
      <Text>{item.body}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList<Post>
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
  box: {
    padding: 15,
    backgroundColor: "#eee",
    marginBottom: 10,
    borderRadius: 8,
  },
});
