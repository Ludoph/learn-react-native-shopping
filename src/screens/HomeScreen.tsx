import { View, Text, ScrollView, Image } from 'react-native'
import * as React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const AVATAR = "https://ih1.redbubble.net/image.1671944269.9239/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg";

const HomeScreen = () => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <SafeAreaView>
        <View style={{paddingHorizontal: 24, flexDirection: 'row', alignItems:'center', gap: 8,}}>
            <Image source={{
                uri: AVATAR,
            }} style={{ width: 60, aspectRatio: 1, borderRadius: 52}}
             resizeMode='cover' />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

export default HomeScreen