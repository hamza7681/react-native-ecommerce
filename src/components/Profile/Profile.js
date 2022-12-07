import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import pic from '../../assets/pic.jpeg';
import Icon from 'react-native-vector-icons/AntDesign';

const Profile = () => {
  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={pic}
          style={styles.backgroundImage}
          resizeMode="cover"
          blurRadius={5}
        />
      </View>
      <View style={styles.profileContainer}>
        <Image source={pic} style={styles.dp} />
        <View style={styles.info}>
          <Text style={styles.name}>Hamza Siddique</Text>
          <Text style={styles.address}>Lahore, Pakistan</Text>
          <Text style={styles.bio}>Swàg😎 sè krengen sb kå Swâgàt🙏🏻😎</Text>
        </View>
        <View style={styles.followContainer}>
          <View style={styles.messageContainer}>
            <Icon name="message1" size={20} style={styles.message} />
          </View>
          <View>
            <TouchableOpacity style={styles.follow}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.messageContainer}>
            <Icon name="sharealt" size={20} style={styles.message} />
          </View>
        </View>
        <View style={styles.counterContainer}>
          <View style={styles.postCounter}>
            <Text style={styles.posts}>877</Text>
            <Text>Posts</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.postCounter}>
            <Text style={styles.posts}>24K</Text>
            <Text>Followers</Text>
          </View>
          <View style={styles.line}></View>
          <View style={styles.postCounter}>
            <Text style={styles.posts}>24K</Text>
            <Text>Following</Text>
          </View>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{height: 790}}>
          <View style={styles.followerContainer}>
            <View style={styles.headings}>
              <Text style={styles.follower}>Follower</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <ScrollView
              horizontal={true}
              contentContainerStyle={{padding: 10}}
              showsHorizontalScrollIndicator={false}>
              <View style={styles.scrollContainer}>
                <Image source={pic} style={styles.scrollImages} />
                <Text style={styles.scrollText}>Hamza</Text>
              </View>
              <View style={styles.scrollContainer}>
                <Image source={pic} style={styles.scrollImages} />
                <Text style={styles.scrollText}>Hamza</Text>
              </View>
              <View style={styles.scrollContainer}>
                <Image source={pic} style={styles.scrollImages} />
                <Text style={styles.scrollText}>Hamza</Text>
              </View>
              <View style={styles.scrollContainer}>
                <Image source={pic} style={styles.scrollImages} />
                <Text style={styles.scrollText}>Hamza</Text>
              </View>
              <View style={styles.scrollContainer}>
                <Image source={pic} style={styles.scrollImages} />
                <Text style={styles.scrollText}>Hamza</Text>
              </View>
            </ScrollView>
          </View>
          <View style={styles.postCotainer}>
            <View style={styles.headings}>
              <Text style={styles.follower}>Posts</Text>
              <TouchableOpacity>
                <Text style={styles.viewAll}>View All</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.postImagesContainer}>
              <View style={styles.picOneContainer}>
                <Image source={pic} style={styles.pic1} />
                <Image source={pic} style={styles.pic1} />
              </View>
              <View style={styles.picTwoContainer}>
                <Image source={pic} style={styles.pic3} />
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  imageContainer: {
    position: 'absolute',
    top: 0,
  },
  backgroundImage: {
    width: width,
    height: height - 300,
  },
  profileContainer: {
    position: 'relative',
    top: 120,
    alignItems: 'center',
    backgroundColor: 'white',
    height: height,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
  dp: {
    width: 120,
    height: 120,
    borderRadius: 400 / 2,
    position: 'absolute',
    top: -60,
  },
  info: {
    marginTop: 63,
    alignItems: 'center',
  },
  name: {
    fontSize: 25,
    color: '#4B4B4B',
  },
  address: {
    color: '#272727',
    marginTop: 5,
  },
  bio: {
    color: '#272727',
    marginTop: 6,
    marginBottom: 6,
    fontSize: 16,
  },
  messageContainer: {
    borderWidth: 2,
    borderRadius: 400 / 2,
    borderColor: '#AAAAAA',
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  follow: {
    backgroundColor: '#7C12A1',
    width: 100,
    paddingTop: 10,
    paddingBottom: 10,
    alignItems: 'center',
    borderRadius: 25,
  },
  followText: {
    color: 'white',
    fontWeight: 'bold',
  },
  followContainer: {
    width: width - 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    marginBottom: 15,
  },
  counterContainer: {
    width: width - 150,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  postCounter: {
    alignItems: 'center',
  },
  posts: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  line: {
    borderWidth: 1,
    borderColor: '#D3D3D3',
  },
  followerContainer: {
    backgroundColor: '#F6F6F6',
    width: width,
    marginTop: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
  headings: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
  },
  follower: {
    color: '#7C12A1',
    fontWeight: 'bold',
  },
  viewAll: {
    color: '#7C12A1',
    fontWeight: 'bold',
  },
  postCotainer: {
    backgroundColor: '#F6F6F6',
    width: width,
    marginTop: 15,
    paddingTop: 7,
    paddingBottom: 7,
  },
  scrollContainer: {
    alignItems: 'center',
    marginRight: 15,
  },
  scrollImages: {
    width: 80,
    height: 80,
    borderRadius: 400 / 2,
  },
  scrollText: {
    color: '#272727',
    marginTop: 10,
    marginBottom: 10,
  },
  postImagesContainer: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  picOneContainer: {
    width: '40%',
  },
  pic1: {
    width: '100%',
    height: 170,
  },
  picTwoContainer: {
    width: '60%',
  },
  pic3: {
    width: '100%',
    height: 340,
  },
});

export default Profile;
