import {Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Result = () => {
  return (
    <View>
      <View>
        <Text>Result</Text>
      </View>
      <View style={styles.bannerContainer}>
      <Image 
          source={{uri:'https://storyset.com/illustration/customer-survey/rafiki'}} 
          style={styles.banner}
          resizeMode='contain'
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Result

const styles = StyleSheet.create({
  banner:{
    height: 300,
    width: 300
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center,'
  }
})