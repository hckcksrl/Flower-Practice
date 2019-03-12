import React, { Component } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  TouchableWithoutFeedback
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";

class Header extends Component {
  render() {
    return (
      <View
        style={{
          height: 70,
          backgroundColor: "white"
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 20
          }}
        >
          <View
            style={{
              height: 35,
              flexDirection: "row",
              width: "100%",
              shadowOffset: { width: 0, height: 1 },
              shadowColor: "black",
              shadowOpacity: 0.2,
              elevation: 5
            }}
          >
            <View
              style={{
                flexDirection: "row",
                height: 35,
                backgroundColor: "white",
                width: "100%",
                borderRadius: 5,
                justifyContent: "flex-start",
                alignItems: "center"
              }}
            >
              <View
                style={{
                  flex: 1.5,
                  alignItems: "center"
                }}
              >
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.goBack(null)}
                >
                  <Icon name="arrow-back" size={25} />
                </TouchableWithoutFeedback>
              </View>
              <View
                style={{
                  flex: 10,
                  justifyContent: "flex-start"
                }}
              >
                <TextInput placeholder="직접입력" style={{ paddingLeft: 5 }} />
              </View>

              <View
                style={{
                  flex: 1.5,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Icon name="search" size={25} color={"grey"} />
              </View>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Header;
