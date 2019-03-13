import React, { Component } from "react";
import {
  View,
  Dimensions,
  FlatList,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import flowers from "./config";

class List extends Component {
  constructor() {
    super();
    this.state = {
      sqareActive: true,
      flower: [],
      count: 1,
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState(
      {
        isLoading: true
      },
      this.getData(this.state.count)
    );
  }

  getData = count => {
    const sliceFlower = flowers.slice((count - 1) * 5, (count - 1) * 5 + 4);
    this.setState({
      flower: this.state.flower.concat(sliceFlower),
      isLoading: false
    });
  };

  handleLoad = () => {
    if ((this.state.count - 1) * 5 + 4 < flowers.length) {
      setTimeout(() => {
        this.setState(
          {
            count: this.state.count + 1,
            isLoading: true
          },
          this.getData(this.state.count)
        );
      }, 1500);
    } else {
      this.setState({
        isLoading: false
      });
    }
  };

  footRender = () => {
    return this.state.isLoading ? (
      <View style={styles.scrollActive}>
        <ActivityIndicator size="large" />
      </View>
    ) : null;
  };

  renderRow = ({ item }) => {
    return (
      <View style={styles.renderViewContainer}>
        <View style={{ flex: 7 }}>
          <Image
            source={item.url}
            style={styles.renderViewImage}
            resizeMode="stretch"
          />
        </View>
        <View style={{ height: 50 }}>
          <Text>aa</Text>
        </View>
      </View>
    );
  };

  renderRowBlock = ({ item }) => {
    return (
      <View style={styles.blockRenderView}>
        <View style={{ flex: 7 }}>
          <Image
            source={item.url}
            style={styles.blockImage}
            resizeMode="stretch"
          />
        </View>
        <View style={{ height: 50 }}>
          <Text>aa</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.headerContainer}>
          <View style={styles.headerView}>
            <Text style={{ fontWeight: "bold" }}>총 {flowers.length}개</Text>
          </View>
          <View style={styles.headerIcon}>
            {this.state.sqareActive ? (
              <>
                <TouchableOpacity
                  onPress={() => this.setState({ sqareActive: true })}
                >
                  <Icon name="folder" size={35} style={styles.activeColor} />
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  onPress={() => this.setState({ sqareActive: false })}
                >
                  <Icon name="apps" size={35} style={styles.inActiveColor} />
                </TouchableOpacity>
              </>
            ) : (
              <>
                <TouchableOpacity
                  onPress={() => this.setState({ sqareActive: true })}
                >
                  <Icon name="folder" size={35} style={styles.inActiveColor} />
                </TouchableOpacity>
                <Text> </Text>
                <TouchableOpacity
                  onPress={() => this.setState({ sqareActive: false })}
                >
                  <Icon name="apps" size={35} style={styles.activeColor} />
                </TouchableOpacity>
              </>
            )}
          </View>
          <View style={styles.headerSortView}>
            <Text style={styles.headerSortText}>인기순 정렬</Text>
          </View>
        </View>
        <View style={{ flex: 1 }}>
          {this.state.sqareActive ? (
            <FlatList
              style={{ flex: 1 }}
              data={this.state.flower}
              renderItem={this.renderRow}
              keyExtractor={(item, index) => index.toString()}
              onEndReached={this.handleLoad}
              onEndReachedThreshold={0}
              ListFooterComponent={this.footRender}
            />
          ) : (
            <FlatList
              style={{ flex: 1 }}
              data={this.state.flower}
              numColumns={2}
              renderItem={this.renderRowBlock}
              keyExtractor={(item, index) => {
                return index;
              }}
              onEndReached={this.handleLoad}
              onEndReachedThreshold={0}
              ListFooterComponent={this.footRender}
              horizontal={false}
              key={this.state.sqareActive}
            />
          )}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  activeColor: {
    color: "blue",
    shadowOffset: { width: 0, height: 2 },
    shadowColor: "blue",
    shadowOpacity: 1,
    elevation: 5
  },
  inActiveColor: {
    color: "grey"
  },
  scrollActive: { marginTop: 10, alignItems: "center" },
  renderViewContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  renderViewImage: {
    width: Dimensions.get("window").width,
    height: 430
  },
  headerContainer: {
    height: 50,
    width: Dimensions.get("window").width,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  headerView: {
    flex: 1,
    alignItems: "center"
  },
  headerIcon: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  headerSortView: {
    flex: 1,
    alignItems: "center"
  },

  headerSortText: { color: "blue", fontWeight: "bold" },
  blockRenderView: {
    justifyContent: "center",
    alignItems: "center",
    width: Dimensions.get("window") / 2,
    flexWrap: "wrap",
    marginHorizontal: 5
  },
  blockImage: {
    width: Dimensions.get("window").width / 2 - 10,
    height: 200
  }
});

export default List;
