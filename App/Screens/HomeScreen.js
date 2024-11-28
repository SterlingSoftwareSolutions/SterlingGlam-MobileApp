import React, { useContext, useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, ImageBackground, ActivityIndicator, StyleSheet, Dimensions,Image,TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AuthContext from '../auth/context';
import admin , {BASE_URL} from '../api/admin';
import Swiper from 'react-native-swiper';
import authService from '../auth/authService';

const { width } = Dimensions.get('window');

const localProfilePicture = require('../resources/avatar.jpg');
const banner1 = require('../resources/Banner01.png');
const banner2 = require('../resources/BannerNew.png');


const HomeScreen = () => {
  const { user } = useContext(AuthContext);
  const navigation = useNavigation();
  const [categoriesData, setCategoriesData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const api = await admin();
        const response = await api.get('/categories');

        if (response.ok) {
          setCategoriesData(response.data);
        } else {
          setError('Failed to fetch categories');
        }
      } catch (err) {
        setError('Error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryPress = (category) => {
    navigation.navigate('Services', { serviceType: category.id });
  };

  if (loading) {
    return <ActivityIndicator size="large" color="#24150E" style={{ flex: 1, justifyContent: 'center' }} />;
  }

  if (error) {
    return <Text>{error}</Text>;
  }

  const handleUserProfile = () => {
    console.log('User Detailssss', user);
    navigation.navigate('Profile');
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <Text style={styles.greeting}>Hi {user ? user.first_name : 'User'}</Text> 
          <Text style={styles.tagline}>“Stay Sharp, Stay Stylish”</Text>
        </View>
        <TouchableOpacity onPress={handleUserProfile}>
          <Image source={localProfilePicture} style={styles.profileImage}/>
        </TouchableOpacity>
      </View>

      {/* Search Section */}
      <View style={styles.searchContainer}>
        <View style={styles.searchBox}>
          <Icon name="magnify" size={24} color="#24150E" />
          <TextInput style={styles.searchInput} placeholder="Search" />
          <Icon name="tune" size={24} color="#24150E" />
        </View>
      </View>

      {/* Offers Section */}
      <View style={styles.offers}>
      <Swiper
        autoplay
        autoplayTimeout={3}
        showsPagination={false}
        loop
      >
        <Image source={banner1} style={styles.offerImage} />
        <Image source={banner2} style={styles.offerImage} />
      </Swiper>
    </View>

      {/* Categories */}
      <View style={styles.categoriesContainer}>
        {categoriesData.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.categoryContainer}
            onPress={() => handleCategoryPress(item)}
          >
            <ImageBackground 
              source={{ uri: BASE_URL + item.image }}
              style={styles.image}
              imageStyle={styles.imageStyle}
            >
              <View style={styles.overlay}>
                <Text style={styles.categoryText}>{item.name}</Text>
              </View>
            </ImageBackground>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    marginTop:10
  },
  headerLeft: {
    flexDirection: 'column',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  tagline: {
    fontSize: 16,
    color: '#444444',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 24,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
    borderRadius: 25,
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  searchInput: {
    flex: 1,
    marginHorizontal: 8,
  },
  offers: {
    marginTop: 10,
  },
  categoriesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 70,
  },
  categoryContainer: {
    width: (width / 2) - 20,
    marginBottom: 20,
    height: 100,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  imageStyle: {
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  categoryText: {
    color: 'white',
    fontSize: 15,
  },
  offers: {
    height: 165, 
    padding: 15
  },
  offerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:10
  },
});

export default HomeScreen;
