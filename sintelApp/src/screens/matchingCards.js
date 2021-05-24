import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Animated, FlatList, Alert} from 'react-native';
import ScreenContainer from '../components/Containers/ScreenContainer';
import ScreenLayout from '../components/Layouts/ScreenLayout';
import HeaderLayout from '../components/Layouts/HeaderLayout';
import HeaderButton from '../components/Buttons/HeaderButton';
import Typography from '../components/Texts/Typography';
import AnimatedCard from '../components/Cards/AnimatedCard';
import {WHITE, BLACK, BLUE, GRAY, ANOTHER_ROUND} from '../Constants/Colors';
import {RESTART, COUNT, CONGRATS} from '../Constants/Strings';
import styles from './matchingCardsStyle';

const matchingCards = () => {
  const [randomNumbers, setNumbers] = useState([]);
  const [count, setCount] = useState(0);
  const [totalCount, setTotalCount] = useState(0);
  const [index, setIndex] = useState(null);
  const [isRestart, setRestart] = useState(false);
  const [seletedNumbers, setSeletedNumbers] = useState([]);

  let animatedValue = new Animated.Value(0);
  let currentValue = 0;
  animatedValue.addListener(({value}) => {
    currentValue = value;
  });

  useEffect(() => {
    async function fetchData() {
      const numbers = generateNumbers();
      setNumbers(numbers);
    }
    fetchData();
  }, []);

  const restartNumbers = () => {
    const numbers = generateNumbers();
    setNumbers(numbers);
    setSeletedNumbers([]);
    setCount(0);
    setTotalCount(0);
    setIndex(numbers);
    setRestart(true);
  };

  const generateNumbers = () => {
    const arr = Array.from(Array(6), (_, i) =>
      Math.floor(Math.random() * Math.floor(100)),
    );
    const data = [...arr, ...arr]
      .sort(() => 0.5 - Math.random())
      .map((val, index) => {
        return (number = {
          index: index,
          number: val,
          status: false,
          matched: false,
        });
      });

    return data;
  };

  useEffect(() => {
    if (count == 2) {
      setCount(0);
      const [num1, num2] = seletedNumbers;
      setSeletedNumbers([]);
      const cards = randomNumbers;
      if (num1.number !== num2.number) {
        cards[num1.index].status = !cards[num1.index].status;
        cards[num2.index].status = !cards[num2.index].status;
      } else {
        cards[num1.index].matched = true;
        cards[num2.index].matched = true;
      }
      setNumbers([...cards]);
    }
  }, [count]);

  useEffect(() => {
    Animated.spring(animatedValue, {
      toValue: currentValue >= 90 ? 0 : 180,
      tension: 10,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }, [isRestart]);

  useEffect(() => {
    let isGameComplete = randomNumbers.every(item => item.status == true);
    if (randomNumbers.length && isGameComplete) {
      setRestart(false);
      Alert.alert(CONGRATS, `you win the game by ${totalCount} steps!`, [
        {
          text: ANOTHER_ROUND,
          onPress: () => {
            restartNumbers();
            setRestart(true);
          },
        },
      ]);
      return;
    }
    Animated.spring(animatedValue, {
      toValue: currentValue >= 90 ? 0 : 180,
      tension: 10,
      friction: 8,
      useNativeDriver: false,
    }).start();
  }, [index, randomNumbers]);

  const flipAnimation = data => {
    let counter = totalCount + 1;
    const cards = randomNumbers;
    cards[data.item.index].status = !cards[data.item.index].status;
    const seletedValues = [...seletedNumbers, data.item];
    if (data.item.index !== index) {
      let counter = count + 1;
      setCount(counter);
    }
    setTotalCount(counter);
    setIndex(data.item.index);
    setSeletedNumbers(seletedValues);
    setNumbers([...cards]);
    setRestart(false);
  };

  const setInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['0deg', '180deg'],
  });

  const backInterpolate = animatedValue.interpolate({
    inputRange: [0, 180],
    outputRange: ['180deg', '360deg'],
  });

  const rotateYAnimatedStyle = {
    transform: [
      {rotateY: currentValue >= 90 ? setInterpolate : backInterpolate},
    ],
  };

  const renderData = data => {
    return (
      <AnimatedCard
        data={data}
        imageStyle={styles.imageStyle}
        animationStyle={rotateYAnimatedStyle}
        indexValue={index}
        isRestart={isRestart}
        onPress={() => {
          if (!data.item.matched) {
            flipAnimation(data);
            return;
          }
        }}
      />
    );
  };

  return (
    <ScreenContainer backgroundColor={GRAY}>
      <ScreenLayout
        paddingBottom={0}
        paddingTop={0}
        paddingHorizontal={0}
        header={
          <HeaderLayout
            headerLeftElement={
              <HeaderButton text={RESTART} onPress={restartNumbers} />
            }
            headerRightElement={
              <HeaderButton text={COUNT + ' ' + totalCount?.toString()} />
            }
          />
        }
        useSafeArea>
        <View style={styles.container}>
          <FlatList
            data={randomNumbers}
            renderItem={item => renderData(item)}
            numColumns={3}
            keyExtractor={(item, index) => index}
          />
        </View>
      </ScreenLayout>
    </ScreenContainer>
  );
};

export default matchingCards;
