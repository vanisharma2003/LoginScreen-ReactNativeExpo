import { View, Text, ScrollView } from 'react-native'
import React from 'react'

const Methods = () => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
    {/* {[1,2,3,4,5,6,7,8,9,10].map((item)=>(
        <View style={{width:100,height:100,margin:10,backgroundColor:'yellow'}} key={item}></View>
    ))} */}
    {[1,2,3,4,5,6,7,8,9,10].map((item)=>{
        return <View style={{width:100,height:100,margin:10,backgroundColor:'blue'}} key={item}></View>
    })}
    </ScrollView>
  )
}

export default Methods