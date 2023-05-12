import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, SegmentedButtons, Text, TextInput } from 'react-native-paper';

import Subtitle from '../components/Subtitle';
import Title from '../components/Title';
import Screen from '../components/layout/Screen';
import { Colors } from '../constants';
import { Routes } from '../routes/routes';
import { RouteParams } from '../routes/types';

type RoutePropType = StackNavigationProp<RouteParams, Routes.UserGoalsScreen>;

const UserGoalsScreen: React.FC = () => {
  const navigation = useNavigation<RoutePropType>();
  const [value, setValue] = useState('');

  return (
    <Screen>
      <ScrollView bounces={false}>
        <View style={styles.scrollViewContainer}>
          <View style={styles.titleContainer}>
            <Title title={'What is your goal?'} />
          </View>
          <View style={styles.inputFieldsContainer}>
            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              style={styles.selectable}
              buttons={[
                {
                  value: 'lose',
                  label: 'Lose Weight',
                  style: {
                    backgroundColor:
                      value === 'lose' ? Colors.selectedButton : Colors.inputBackground,
                    borderWidth: 0,
                    justifyContent: 'center',
                  },
                },
              ]}
            />
            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              style={styles.selectable}
              buttons={[
                {
                  value: 'mantain',
                  label: 'Maintain Weight',
                  style: {
                    backgroundColor:
                      value === 'mantain' ? Colors.selectedButton : Colors.inputBackground,
                    borderWidth: 0,
                    justifyContent: 'center',
                  },
                },
              ]}
            />
            <SegmentedButtons
              value={value}
              onValueChange={setValue}
              style={styles.selectable}
              buttons={[
                {
                  value: 'gain',
                  label: 'Gain Weight',
                  style: {
                    backgroundColor:
                      value === 'gain' ? Colors.selectedButton : Colors.inputBackground,
                    borderWidth: 0,
                    justifyContent: 'center',
                  },
                },
              ]}
            />
          </View>

          <Button
            mode="contained"
            style={styles.bottomButton}
            onPress={() => {
              navigation.navigate(Routes.UserActivityScreen);
            }}
          >
            Next
          </Button>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  titleContainer: {
    flex: 1,
    marginVertical: 20,
    marginHorizontal: 24,
  },
  subtitle: {
    marginTop: 10,
    marginHorizontal: 70,
  },
  inputFieldsContainer: {
    flex: 4,
  },
  inputLabel: {
    fontSize: 15,
    marginHorizontal: 40,
    marginTop: 10,
    textAlign: 'center',
    color: Colors.textLabel,
  },
  selectable: {
    height: 48,
    marginTop: 10,
  },
  inputField: {
    borderRadius: 5,
    backgroundColor: Colors.inputBackground,
    borderWidth: 0,
  },
  input: {
    textAlign: 'center',
    height: 48,
    marginBottom: 20,
    marginTop: 5,
  },
  bottomButton: {
    bottom: 0,
    width: '100%',
    marginVertical: 20,
    marginTop: 30,
  },
});

export default UserGoalsScreen;
