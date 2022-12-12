import React, { useEffect } from 'react';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { useAppDispatch } from '../../app/hooks';
import { fetchUsers } from './redux';
import { styles } from './Users.styles';

export const Users = () => {
  //const users = useAppSelector(selectUsers);
  //const status = useAppSelector(state => state.userState.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
        <Text style={styles.value}>{}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>-</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TextInput
          style={styles.textbox}
          value={''}
          keyboardType="numeric"
          onChangeText={() => {}}
        />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => {}}>
            <Text style={styles.buttonText}>Add Amount</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
