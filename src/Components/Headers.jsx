import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../Global/Colors'

const Headers = () => {
  return (
    <View style = {styles.containerHeader}>
      <Text style = {styles.text}>Headers</Text>
    </View>
  )
}

export default Headers

const styles = StyleSheet.create({
    containerHeader:{
        height: '10%',
        backgroundColor: colors.lightblue,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text:{
        fontSize:25,
    }
})