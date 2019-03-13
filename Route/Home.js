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
  constructor() {
    super();
    this.animation = new Animated.Value(0);
    this.translate = new Animated.Value(0);
    this.margin = new Animated.Value(50);
  }

  componentWillMount() {
    this.scrollY = new Animated.Value(0);
    this.scrollOffset = 0;
    this._panResponder = PanResponder.create({
      onMoveShouldSetPanResponderCapture: (e, gestureState) => true,
      onStartShouldSetPanResponderCapture: (e, gestureState) => true,
      onPanResponderGrant: (e, gestureState) => {
        true;
      },
      onPanResponderMove: (e, gestureState) => {
        if (gestureState.dy < -20) {
          Animated.timing(this.animation, {
            toValue: 1
          }).start();
        } else if (gestureState.dy > 20) {
          Animated.timing(this.animation, {
            toValue: 0
          }).start();
        }
      },
      onPanResponderRelease: (e, gestureState) => {
        this.animation.flattenOffset();
      }
    });
  }

  getTransform() {
    return {
      transform: [
        {
          translateY: this.animation.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
          })
        }
      ]
    };
  }

  getMargin() {
    return {
      marginTop: this.animation.interpolate({
        inputRange: [0, 1],
        outputRange: [50, 0]
      })
    };
  }

  render() {
    return (
      <Animated.View style={[styles.container]}>
        <Animated.View style={{ position: "absolute" }}>
          <Animated.View style={[styles.animateHeader, this.getTransform()]}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => this.props.navigation.navigate("Search")}
            >
              <Animated.View style={styles.animateSearch}>
                <Icon
                  name="search"
                  size={25}
                  style={[{ paddingRight: 5, fontSize: 25 }]}
                  color="#a5a5a5"
                />
              </Animated.View>
            </TouchableOpacity>
          </Animated.View>
        </Animated.View>
        <Animated.View style={[styles.animatedHome, this.getMargin()]}>
          <Animated.ScrollView
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center"
            }}
            showsVerticalScrollIndicator={false}
            scrollEventThrottle={16}
            onScroll={Animated.event([
              { nativeEvent: { contentOffset: { y: this.scrollY } } }
            ])}
            {...this._panResponder.panHandlers}
          >
            {collections.map((collection, key) => {
              return (
                <View style={styles.section} key={key}>
                  <View style={styles.sectionHeader}>
                    <View style={{ flex: 5 }}>
                      <Text style={styles.mainHeaderLeft}>
                        {collection.text}
                      </Text>
                    </View>
                    <View style={styles.mainHeaderRight}>
                      <Text style={styles.mainHeaderRightText}>모두 보기</Text>
                    </View>
                  </View>
                  <View style={styles.sectionImage}>
                    <Image
                      source={collection.image.url}
                      style={styles.mainImage}
                      resizeMode="stretch"
                    />
                  </View>
                  <View style={styles.sectionName}>
                    <Text style={styles.mainSmallName}>
                      {collection.image.smallname}
                    </Text>
                    <Text style={styles.mainBigName}>
                      {collection.image.bigname}
                    </Text>
                  </View>
                </View>
              );
            })}
          </Animated.ScrollView>
        </Animated.View>
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
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
  },
  headerButton: {
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
    opacity: 1
  },
  animateHeader: {
    height: 50,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 30
  },
  animateSearch: {
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
    width: Dimensions.get("window").width - 60
  },
  animatedHome: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  mainHeaderLeft: {
    fontSize: 30,
    color: "black",
    fontWeight: "900"
  },
  mainHeaderRight: {
    flex: 1.2,
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  mainHeaderRightText: { fontSize: 15, color: "blue" },
  mainImage: {
    width: Dimensions.get("window").width - 40,
    height: 430,
    borderRadius: 10
  },
  mainSmallName: { fontSize: 15, color: "black" },
  mainBigName: { fontSize: 15, color: "#c9c7c7" }
});

export default Home;
