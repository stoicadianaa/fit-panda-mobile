import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Screen from '../components/layout/Screen';
import { Colors } from '../constants';
import { Routes } from '../routes/routes';
import { RouteParams } from '../routes/types';

type RoutePropType = StackNavigationProp<RouteParams, Routes.SignupFinish>;

const SignupFinish: React.FC = () => {
  const navigation = useNavigation<RoutePropType>();

  return (
    <Screen>
      <ScrollView>
        <View style={styles.mainContainer}>
          <Title title={'Sign up\n and jump right in'}></Title>
          <Subtitle
            subtitle={'Your custom plan is ready and you’re one step closer to your goal weight \n \n \n Your KCals allowance per day is'}
            style={styles.subtitle}
          />
          <TextInput
          editable={false}
            mode="outlined"
            inputMode="text"
            style={styles.input}
            placeholder="2600"
            outlineStyle={styles.inputField}
          />
          <Button
            mode="contained"
            style={styles.button}
            onPress={() => {

            }}
          >
            Start your journey!
          </Button>
        </View>
      </ScrollView>

    </Screen>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: Colors.background,
  },
  subtitle: {
    marginTop: 15,
    marginBottom: 20,
    marginHorizontal: 15,
  },
  mainContainer: {
    justifyContent: 'center',
    flexGrow: 1,
  },
  inputField: {
    borderRadius: 5,
    backgroundColor: Colors.inputBackground,
    borderWidth: 0,
  },
  input: {
    width: '100%',
    marginVertical: 10,
    textAlign: 'center',
  },
  button: {
    marginVertical: 20,
    width: '100%',
  },
});

export default SignupFinish;
