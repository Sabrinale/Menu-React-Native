import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class Detail extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Detail</Text>
        <TouchableOpacity
          onPress={() => { this.props.navigation.goBack() }}
        >
            <Text>GO TO DETAIL</Text>

        </TouchableOpacity>
        <Text>{this.props.navigation.state.params.para}</Text>
      </View>
    );
  }
}
