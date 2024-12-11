import React, { useState } from 'react';
import { View, Text, Image, TouchableWithoutFeedback } from 'react-native';
import { styled } from 'nativewind';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function App() {
  const [flipped, setFlipped] = useState(false);
  const rotateY = useSharedValue(0);

  const flipCard = () => {
    setFlipped(!flipped);
    rotateY.value = withTiming(flipped ? 0 : 180, { duration: 600 });
  };

  const frontAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotateY.value}deg` }],
    backfaceVisibility: 'hidden',
  }));

  const backAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ rotateY: `${rotateY.value + 180}deg` }],
    backfaceVisibility: 'hidden',
  }));

  return (
    <StyledView className="flex-1 justify-center items-center bg-gray-100">
      <TouchableWithoutFeedback onPress={flipCard}>
        <StyledView className="relative h-64 w-48">
          
          <Animated.View
            style={frontAnimatedStyle}
            className="absolute h-full w-full bg-white rounded-lg shadow-lg"
          >
            <Image
              source={{
                uri: 'https://via.placeholder.com/150',
              }}
              className="h-40 w-full rounded-t-lg"
            />
            <StyledText className="text-center text-lg font-bold mt-2">
              Your Name
            </StyledText>
          </Animated.View>

  
          <Animated.View
            style={backAnimatedStyle}
            className="absolute h-full w-full bg-blue-500 rounded-lg shadow-lg justify-center items-center"
          >
            <StyledText className="text-white text-center text-lg font-bold">
              Information
            </StyledText>
          </Animated.View>
        </StyledView>
      </TouchableWithoutFeedback>
    </StyledView>
  );
}

