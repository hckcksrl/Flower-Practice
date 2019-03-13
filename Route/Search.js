import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

class Search extends Component {
  render() {
    return (
      <View style={{ flex: 1, marginHorizontal: 20 }}>
        <View
          style={{
            borderTopWidth: 1,
            borderTopColor: "#ededed"
          }}
        >
          <Text
            style={{ fontSize: 30, fontWeight: "bold", marginVertical: 10 }}
          >
            필터를 선택해 주세요
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: "#5aa3fc",
              width: "100%",
              borderRadius: 7,
              height: 35,
              justifyContent: "center",
              alignItems: "center",
              marginBottom: 10
            }}
            onPress={() => this.props.navigation.navigate("List")}
          >
            <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
              필터로 검색하기
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{ borderTopWidth: 1, borderTopColor: "#ededed" }}>
          <Text>aa</Text>
        </View>

        <View style={{ borderTopWidth: 1, borderTopColor: "#ededed" }}>
          <Text>aa</Text>
        </View>
      </View>
    );
  }
}

export default Search;
