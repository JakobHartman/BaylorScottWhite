import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchUsers, selectUsers } from './redux';
import { styles } from './Users.styles';

export const Users = () => {
  const users = useAppSelector(selectUsers);
  const status = useAppSelector(state => state.userState.status);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <View>
      <View style={styles.row}>
        <Text style={styles.value}>{users.length}</Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Text style={styles.buttonText}>{status}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
