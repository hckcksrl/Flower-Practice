import React, { Component } from "react";
import {
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Text,
  Dimensions,
  StyleSheet
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import flowers from "./config";

class Library extends Component {
  render() {
    console.log(Dimensions.get("window"));
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Text style={styles.headerLeftText}>최근 내가 본 꽃</Text>
          </View>
          <View style={styles.headerRight}>
            <Text style={styles.headerRightText}>모두 보기</Text>
          </View>
        </View>
        <ScrollView
          contentContainerStyle={{
            justifyContent: "center",
            alignItems: "flex-start"
          }}
          style={styles.scrollView}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        >
          {flowers.map((flower, key) => {
            return (
              <View style={{ marginRight: 20 }} key={key}>
                <View>
                  <Image
                    source={flower.url}
                    style={styles.scrollImage}
                    resizeMode="stretch"
                  />
                </View>
                <View style={{ height: 30 }}>
                  <Text style={{ fontSize: 15, color: "black" }}>
                    {flower.smallname}
                  </Text>
                  <Text style={{ fontSize: 15, color: "#c9c7c7" }}>
                    {flower.bigname}
                  </Text>
                </View>
              </View>
            );
          })}
        </ScrollView>

        <View style={styles.bottomTouchContainer}>
          <TouchableOpacity>
            <View style={styles.bottomSmall}>
              <View style={{ flex: 6 }}>
                <Text style={styles.bottomFont}>좋아요 표시한 꽃</Text>
              </View>
              <View style={styles.bottomIcon}>
                <Icon name={"arrow-forward"} color="#25b3f9" size={25} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bottomSmall}>
              <View style={{ flex: 6 }}>
                <Text style={styles.bottomFont}>재생 목록</Text>
              </View>
              <View style={styles.bottomIcon}>
                <Icon name={"arrow-forward"} color="#25b3f9" size={25} />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.bottomSmall}>
              <View style={{ flex: 6 }}>
                <Text style={styles.bottomFont}>로그아웃</Text>
              </View>
              <View style={styles.bottomIcon}>
                <Icon name={"arrow-forward"} color="#25b3f9" size={25} />
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 10
  },
  header: {
    display: "flex",
    height: 50,
    justifyContent: "center",
    flexDirection: "row"
  },
  headerLeft: {
    flex: 5,
    justifyContent: "flex-end"
  },
  headerLeftText: {
    fontSize: 30,
    fontWeight: "bold"
  },
  headerRight: {
    flex: 1.5,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  headerRightText: {
    fontSize: 20,
    color: "blue",
    fontWeight: "500"
  },
  scrollView: {
    height: 350,
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ededed"
  },
  scrollImage: {
    width: 240,
    height: 330,
    borderRadius: 10
  },
  bottomTouchContainer: {
    height: 150,
    display: "flex"
  },
  bottomSmall: {
    height: 50,
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ededed",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  bottomFont: {
    color: "#25b3f9",
    fontSize: 25,
    fontWeight: "bold"
  },
  bottomIcon: {
    flex: 1,
    alignItems: "flex-end"
  }
});

export default Library;
