// import React, {useState, useEffect} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   View,
//   Text,
//   TouchableOpacity,
//   Animated,
//   FlatList,
// } from 'react-native';

// const App = () => {
//   const [randomNumbers, setNumbers] = useState([]);
//   const [count, setCount] = useState(0);
//   const [totalCount, setTotalCount] = useState(0);
//   const [index, setIndex] = useState(null);
//   const [seletedNumbers, setSeletedNumbers] = useState([]);

//   let counter = 0;

//   let animatedValue = new Animated.Value(0);
//   let currentValue = 0;
//   animatedValue.addListener(({value}) => {
//     currentValue = value;
//   });

//   useEffect(() => {
//     async function fetchData() {
//       const numbers = generateNumbers();
//       setNumbers(numbers);
//     }
//     fetchData();
//   }, []);

//   const restartNumbers = () => {
//     const numbers = generateNumbers();
//     setNumbers(numbers);
//     setSeletedNumbers([]);
//     setCount(0);
//     setTotalCount(0);
//     setIndex(null);
//   };

//   const generateNumbers = () => {
//     const arr = Array.from(Array(6), (_, i) =>
//       Math.floor(Math.random() * Math.floor(100)),
//     );
//     const data = [...arr, ...arr]
//       .sort(() => 0.5 - Math.random())
//       .map((val, index) => {
//         return (number = {
//           index: index,
//           number: val,
//           status: false,
//           matched: false,
//         });
//       });

//     return data;
//   };
//   useEffect(() => {
//     if (count == 2) {
//       setCount(0);
//       const [num1, num2] = seletedNumbers;
//       setSeletedNumbers([]);
//       const cards = randomNumbers;
//       if (num1.number !== num2.number) {
//         cards[num1.index].status = !cards[num1.index].status;
//         cards[num2.index].status = !cards[num2.index].status;
//       } else {
//         cards[num1.index].matched = true;
//         cards[num2.index].matched = true;
//       }
//       setNumbers([...cards]);
//     }
//   }, [count]);

//   useEffect(() => {
//     Animated.spring(animatedValue, {
//       toValue: currentValue >= 90 ? 0 : 180,
//       tension: 10,
//       friction: 8,
//       useNativeDriver: false,
//     }).start();
//   }, [index, randomNumbers]);

//   const flipAnimation = data => {
//     // let count = counter + 1;
//     // let count = counter?counter:0 + 1;
//     let counter = totalCount + 1;
//     const cards = randomNumbers;
//     cards[data.item.index].status = !cards[data.item.index].status;
//     const seletedValues = [...seletedNumbers, data.item];
//     if (data.item.index !== index) {
//       let counter = count + 1;
//       setCount(counter);
//     }
//     setTotalCount(counter);
//     setIndex(data.item.index);
//     setSeletedNumbers(seletedValues);
//     setNumbers([...cards]);
//   };

//   const setInterpolate = animatedValue.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['0deg', '180deg'],
//   });

//   const backInterpolate = animatedValue.interpolate({
//     inputRange: [0, 180],
//     outputRange: ['180deg', '360deg'],
//   });

//   const rotateYAnimatedStyle = {
//     transform: [
//       {rotateY: currentValue >= 90 ? setInterpolate : backInterpolate},
//     ],
//   };

//   const renderData = data => {
//     return (
//       <TouchableOpacity
//         onPress={() => {
//           if (!data.item.matched) {
//             flipAnimation(data);
//             return;
//           }
//         }}>
//         <Animated.View
//           style={[
//             data.item.index == index ? rotateYAnimatedStyle : {},
//             !data.item.status
//               ? [styles.imageStyle, {backgroundColor: '#1CA2F4'}]
//               : [styles.imageStyle, {backgroundColor: 'white'}],
//           ]}>
//           <Text
//             style={
//               !data.item.status
//                 ? [styles.flipText, {color: 'white'}]
//                 : [styles.flipText, {color: 'black'}]
//             }>
//             {data.item.number}
//           </Text>
//         </Animated.View>
//       </TouchableOpacity>
//     );
//   };

//   return (
//     <SafeAreaView style={{flex: 1, backgroundColor: '#403E43'}}>
//       <View style={styles.header}>
//         <TouchableOpacity onPress={() => restartNumbers()}>
//           <Text style={styles.flipText}>{'Restart'}</Text>
//         </TouchableOpacity>
//         <Text style={styles.flipText}>{'Count' + ' ' + totalCount}</Text>
//       </View>
//       <View style={styles.container}>
//         <FlatList
//           data={randomNumbers}
//           renderItem={item => renderData(item)}
//           numColumns={3}
//           keyExtractor={(item, index) => index}
//         />
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   header: {
//     height: 40,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     marginHorizontal: 20,
//     marginTop: 20,
//   },
//   imageStyle: {
//     flex: 1,
//     width: 100,
//     height: 130,
//     flexDirection: 'column',
//     margin: 10,
//     alignItems: 'center',
//     justifyContent: 'center',
//     borderColor: 'white',
//     borderWidth: 3,
//   },
//   flipText: {
//     fontSize: 20,
//     color: 'white',
//     fontWeight: 'bold',
//   },
// });

// export default App;

import * as React from 'react';
import Routes from './src/navigation/routes';
import {NavigationContainer} from '@react-navigation/native';

function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}

export default App;
