import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useState } from 'react';

export default function Header(props) {
  

  return (
    <View>
      <Text>Open up App.js to start working on your {props.appName}!</Text>

      <Text>                                               </Text>
      

    </View>
  )
}

// another way is that destructuring
// export default function Header(appName) {
//     return (
//       <View>
//         <Text>Open up App.js to start working on your {appName}!</Text>
//       </View>
//     )
// }

// export default function Header = () {
//     return 
// }