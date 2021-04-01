import React from 'react';
import {View, Image} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Image
          onError={(err) => {
            console.log(err.nativeEvent.error);
          }}
          style={{width: 22, height: 22}}
          source={{
            uri:
              'http://1300865537.vod2.myqcloud.com/96b73a68vodcq1300865537/464668ed5285890814015119948/5285890814015119949.jpeg',
          }}
        />
      </View>
    );
  }
}
