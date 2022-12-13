import {
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { User } from '../../types';
import { styles } from './ContactModal.styles';

export interface ContactModalProps {
  user: User;
  showModal: boolean;
  onClose: () => void;
}
export const ContactModal = ({
  user,
  showModal,
  onClose,
}: ContactModalProps) => {
  return (
    <Modal animationType={'slide'} visible={showModal} onRequestClose={onClose}>
      <SafeAreaView>
        <View>
          <Text>{user.name}</Text>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text>{'Close'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
