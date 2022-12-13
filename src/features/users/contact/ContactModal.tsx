import {
  Linking,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import UserAvatar from 'react-native-user-avatar';
import { User } from '../../../types';
import { styles } from './ContactModal.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicon from 'react-native-vector-icons/Ionicons';
import openMaps from 'react-native-open-maps';

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
  const mutatedTextStyle = {
    ...styles.text,
    ...{ marginBottom: 5 },
  };

  const getPadding = (amount: number) => {
    return { paddingBottom: amount };
  };

  const handlePhonePress = async () => {
    try {
      const response = await Linking.openURL(`tel:${user.phone}`);
      console.debug(response);
    } catch (error: any) {
      console.debug(error.message);
    }
  };

  const handleMapPress = () => {
    try {
      openMaps({
        latitude: parseFloat(user.address.geo.lat),
        longitude: parseFloat(user.address.geo.lng),
      });
    } catch (error: any) {
      console.debug(error.message);
    }
  };

  const handleEmailPress = async () => {
    try {
      const response = await Linking.openURL(`mailto:${user.email}`);
      console.debug(response);
    } catch (error: any) {
      console.debug(error.message);
    }
  };

  const handleWebPress = async () => {
    try {
      const response = await Linking.openURL(`https://${user.website}`);
      console.log(response);
    } catch (error: any) {
      console.debug(error.message);
    }
  };

  return (
    <Modal animationType={'slide'} visible={showModal} onRequestClose={onClose}>
      <SafeAreaView>
        <View style={styles.mainContainer}>
          <UserAvatar size={100} style={styles.avatar} name={user.name} />
          <View style={styles.nameBox}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.subText}>{user.company?.name}</Text>
          </View>
          <View style={styles.infoBlock}>
            <Text style={styles.sectionHeader}>{'Contact Information'}</Text>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={handleEmailPress}>
              <View style={styles.infoText}>
                <Text style={mutatedTextStyle}>{`${user.email}`}</Text>
              </View>
              <View style={styles.infoIcon}>
                <Icon name={'email'} size={25} style={getPadding(5)} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={handleMapPress}>
              <View style={styles.infoText}>
                <Text
                  style={styles.addressText}>{`${user.address.street}`}</Text>
                <Text
                  style={styles.addressText}>{`${user.address.suite}`}</Text>
                <Text
                  style={
                    styles.addressText
                  }>{`${user.address.city} ${user.address.zipcode}`}</Text>
              </View>
              <View style={styles.infoIcon}>
                <Icon name={'map-marker'} size={25} style={getPadding(20)} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={handlePhonePress}>
              <View style={styles.infoText}>
                <Text style={styles.text}>{`${user.phone}`}</Text>
              </View>
              <View style={styles.infoIcon}>
                <Icon name={'phone'} size={25} style={getPadding(5)} />
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={styles.sectionHeader}>{'Other Information'}</Text>
            <Text style={styles.text}>{`Username: ${user.username}`}</Text>
            <TouchableOpacity
              style={styles.touchableInfo}
              onPress={handleWebPress}>
              <View style={styles.infoText}>
                <Text
                  style={
                    styles.text
                  }>{`Personal Website: ${user.website}`}</Text>
              </View>
              <View style={styles.infoIcon}>
                <Ionicon name={'ios-globe-outline'} size={25} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onClose} style={styles.button}>
            <Text style={styles.buttonText}>{'Done'}</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </Modal>
  );
};
