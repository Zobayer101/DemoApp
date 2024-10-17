import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Star from 'react-native-vector-icons/AntDesign';
const Profile = (props: {navigation: {navigate: (arg0: string) => void}}) => {
  return (
    <ScrollView contentContainerStyle={style.contuner}>
      <Text
        style={style.Title}
        onPress={() => props.navigation.navigate('Login')}>
        User Profile
      </Text>
      <View style={style.imgBox}>
        <Image style={style.IMG} source={require('../Img/Avater.jpg')} />
      </View>

      <Text style={[style.Title, style.NameText]}>James Robat</Text>
      <Text style={[style.Title]}>20 years old</Text>
      <View style={style.btnBox}>
        <TouchableOpacity>
          <Text style={style.btntext}>Become Friend</Text>
        </TouchableOpacity>
      </View>
      <View style={style.btnBox}>
        <TouchableOpacity>
          <Text style={[style.btntext, style.bigText]}>
            Invite to Team Match
          </Text>
        </TouchableOpacity>
      </View>
      <View style={style.infoBox}>
        <Text style={style.infoText}>User info</Text>
        <View style={style.innerInfo}>
          <Text style={style.infoFild}>Bio</Text>
          <Text style={style.inforData}>Hey there, I'm on Atlatik</Text>
        </View>
        <View style={style.innerInfo}>
          <Text style={style.infoFild}>Age</Text>
          <Text style={style.inforData}>20 Years Old</Text>
        </View>
        <View style={style.innerInfo}>
          <Text style={style.infoFild}>Gender</Text>
          <Text style={style.inforData}>Male</Text>
        </View>
        <View style={style.innerInfo}>
          <Text style={style.infoFild}>Joined</Text>
          <Text style={style.inforData}>March 04, 2023</Text>
        </View>
        <View style={style.innerInfo}>
          <Text style={style.infoFild}>Location</Text>
          <Text style={style.inforData}>Alger, Canada</Text>
        </View>
        <View style={style.innerInfo}>
          <Text style={style.infoFild}>Reviews</Text>
          <View style={style.starBox}>
            <Star name="star" size={25} color="#ffd700" />
            <Star name="star" size={25} color="#ffd700" />
            <Star name="star" size={25} color="#ffd700" />
            <Star name="staro" size={25} color="#ffd700" />
            <Star name="staro" size={25} color="#ffd700" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  contuner: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
  },
  Title: {
    fontSize: 23,
    width: '100%',

    textAlign: 'center',
    fontWeight: '800',
  },
  NameText: {
    fontSize: 30,
    padding: 0,
  },
  imgBox: {
    width: '100%',
    height: 170,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IMG: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  btnBox: {
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btntext: {
    width: 200,
    height: 50,
    color: '#0f5',
    backgroundColor: '#9a7',
    fontSize: 20,
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  bigText: {
    width: 250,
    height: 50,
    backgroundColor: '#0d7',
    color: '#fff',
  },
  infoBox: {
    marginTop: 5,
    backgroundColor: '#eee',
    width: 350,
    height: 300,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      height: 10,
      width: 10,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    elevation: 10,
    padding: 15,
  },
  infoText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#000',
  },
  innerInfo: {
    width: '100%',
    height: 40,

    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoFild: {
    fontSize: 18,
    color: '#312',
  },
  inforData: {
    fontSize: 18,
    color: '#001',
  },
  starBox: {
    width: 150,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Profile;
