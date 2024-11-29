import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import type {PropsWithChildren} from 'react'

type currency = PropsWithChildren<{
  name:string;
  flag:string;
}>

export default function CurrencyButton(props:currency) {

  return (
    <View style={styles.container}>
      <Text style={styles.flag}>{props.flag}</Text>
      <Text style={styles.name}>{props.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   alignItems:'center', 
  },
  flag:{
    fontSize:24,
    color:'#256765',
    marginBottom:4
  },
  name:{
    fontSize:14,
    color:'#256765'
  }
})