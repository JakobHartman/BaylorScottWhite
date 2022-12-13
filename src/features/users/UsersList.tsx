import React, { useEffect, useState } from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  useAppDispatch,
  useAppSelector,
  useViewportUnits,
} from '../../app/hooks';
import { fetchUsers, selectUsers, Status } from './redux';
import { styles } from './UsersList.styles';
import { User } from '../../types';
import { ContactModal } from '../../components';

const initialUser: User = {
  name: '',
  id: '',
  email: '',
  phone: '',
  website: '',
  address: {
    city: '',
    street: '',
    zipcode: '',
  },
  companyName: '',
  username: '',
};
export const UsersList = () => {
  const [selectedUser, setSelectedUser] = useState<User>(initialUser);
  const [showModal, setShowModal] = useState<boolean>(false);

  const users = useAppSelector(selectUsers);
  const status = useAppSelector(state => state.userState.status);
  const error = useAppSelector(state => state.userState.error);
  const screen = useViewportUnits();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const onPressUser = (index: number) => () => {
    setSelectedUser(users[index]);
    setShowModal(true);
  };

  // @ts-ignore correct way to handle it, adding a type will break it
  const renderUser = ({ item, index }) => (
    <View key={item.id}>
      <TouchableOpacity style={styles.userCard} onPress={onPressUser(index)}>
        <Text style={styles.name}>{`${item.name}`}</Text>
        <Text style={styles.email}>{`${item.email}`}</Text>
      </TouchableOpacity>
    </View>
  );

  const onClose = () => {
    setShowModal(false);
  };

  return (
    <View>
      <ContactModal
        user={selectedUser}
        showModal={showModal}
        onClose={onClose}
      />
      {status === Status.FAILED && (
        <View style={styles.row}>
          <Text style={styles.errorText}>
            {'Unable to connect to the server...'}
          </Text>
          {error && <Text>{error.message}</Text>}
        </View>
      )}
      {status === Status.LOADING && (
        <ActivityIndicator style={{ top: screen.vh * 30 }} size="large" />
      )}
      {status === Status.IDLE && users.length > 0 && (
        <View style={styles.userList}>
          <FlatList
            renderItem={renderUser}
            data={users}
            keyExtractor={user => user.id}
          />
        </View>
      )}
    </View>
  );
};
