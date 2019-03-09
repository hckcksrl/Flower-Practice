import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Animated,
  PanResponder,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { Platform } from "expo-core";

const collections = [
  {
    id: 1,
    text: "인기 있는 꽃",
    image: {
      id: 1,
      url: require("../assets/1.jpg"),
      smallname: "데이토나",
      bigname: "튤립"
    }
  },
  {
    id: 1,
    text: "꽃피는 봄이 오면",
    image: {
      id: 1,
      url: require("../assets/2.jpg"),
      bigname: "몽블랑",
      smallname: "아네모네"
    }
  }
];

class Home extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);
    this.startHeight = 60;
    this.endHeight = 0;
    this.statusHeight = 0;
    this.touchHeight = 35;
    if (Platform.OS === "android") {
      this.statusHeight = StatusBar.currentHeight;
    }

    this.animatestatusHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.statusHeight, this.endHeight]
    });

    this.animateTouchHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.touchHeight, this.endHeight]
    });

    this.animateHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeight, this.endHeight]
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            height: this.animateHeight,
            width: Dimensions.get("window").width - 40,
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <TouchableOpacity
            style={{
              flexDirection: "row",
              justifyContent: "flex-end",
              alignItems: "center",
              backgroundColor: "white",
              borderRadius: 5,
              height: 35,
              shadowOffset: { width: 0, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 5,
              width: Dimensions.get("window").width - 60,
              zIndex: 2
            }}
            activeOpacity={0.5}
            onPress={() => this.props.navigation.navigate("Flowers")}
          >
            <Icon
              name="search"
              size={25}
              style={{ paddingRight: 5 }}
              color="#a5a5a5"
            />
          </TouchableOpacity>
        </Animated.View>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "center"
          }}
          showsVerticalScrollIndicator={false}
          style={{ paddingTop: 0 }}
          scrollEventThrottle={1}
          onScroll={Animated.event([
            { nativeEvent: { contentOffset: { y: this.scrollY } } }
          ])}
        >
          {collections.map((collection, key) => {
            return (
              <View style={styles.section} key={key}>
                <View style={styles.sectionHeader}>
                  <View style={{ flex: 5 }}>
                    <Text
                      style={{
                        fontSize: 30,
                        color: "black",
                        fontWeight: "900"
                      }}
                    >
                      {collection.text}
                    </Text>
                  </View>
                  <View
                    style={{
                      flex: 1.2,
                      justifyContent: "flex-end",
                      alignItems: "flex-end"
                    }}
                  >
                    <Text style={{ fontSize: 15, color: "blue" }}>
                      모두 보기
                    </Text>
                  </View>
                </View>
                <View style={styles.sectionImage}>
                  <Image
                    source={collection.image.url}
                    style={{
                      width: Dimensions.get("window").width - 40,
                      height: 430,
                      borderRadius: 10
                    }}
                    resizeMode="stretch"
                  />
                </View>
                <View style={styles.sectionName}>
                  <Text style={{ fontSize: 15, color: "black" }}>
                    {collection.image.smallname}
                  </Text>
                  <Text style={{ fontSize: 15, color: "#c9c7c7" }}>
                    {collection.image.bigname}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  section: {
    flex: 1,
    width: Dimensions.get("window").width - 40,
    marginBottom: 20
  },
  sectionHeader: {
    flex: 2,
    flexDirection: "row",
    marginBottom: 5
  },
  sectionImage: {
    flex: 10
  },
  sectionName: {
    flex: 1
  }
});

export default Home;

//  {/* <View
//           style={{
//             height: 35,
//             width: Dimensions.get("window").width - 40,
//             marginTop: 20
//           }}
//         > */}
//         <TouchableOpacity
//           style={{
//             flexDirection: "row",
//             justifyContent: "flex-end",
//             alignItems: "center",
//             backgroundColor: "white",
//             borderRadius: 5,
//             height: 35,
//             shadowOffset: { width: 0, height: 1 },
//             shadowColor: "black",
//             shadowOpacity: 0.2,
//             elevation: 5,
//             width: Dimensions.get("window").width - 60,
//             top: 20,
//             position: "absolute",
//             zIndex: 2
//           }}
//           activeOpacity={0.5}
//         >
//           <Icon
//             name="search"
//             size={25}
//             style={{ paddingRight: 5 }}
//             color="#a5a5a5"
//           />
//         </TouchableOpacity>
//         {/* </View> */}
//         <ScrollView
//           contentContainerStyle={{
//             justifyContent: "center",
//             alignItems: "center"
//           }}
//           showsVerticalScrollIndicator={false}
//           style={{ paddingTop: 75, zIndex: 1 }}
//         ></ScrollView>
