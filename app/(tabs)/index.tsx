import React from 'react';
import { ScrollView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

const HomeScreen: React.FC = () => {
  const suggestions = [
    { id: 1, title: 'Reflection', artist: 'Christina Aguilera', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJKwTKFxzOR44FLNruInYrQgWFwFoPkCJRrLb81a1dmF3rH8O7' },
    { id: 2, title: 'In The Stars', artist: 'Benson Boone', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQX4vnHEwyU8VQN0YFN3Rd2RJHXF2c4jylP4vSz1hapD4TRLaYf' },
    { id: 3, title: 'In The Stars', artist: 'Benson Boone', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQX4vnHEwyU8VQN0YFN3Rd2RJHXF2c4jylP4vSz1hapD4TRLaYf' }
  ];

  const charts = [
    { id: 1, title: 'Top 50 Canada' },
    { id: 2, title: 'Top 50 Global' },
    { id: 3, title: 'Top 50 Global' }
  ];

  const albums = [
    { id: 1, title: 'ME', artist: 'Jessica Gonzalez', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngKiAhSrnWh-PLQwvsQGmCFSzpaavS2OY7w&s' },
    { id: 2, title: 'Magna Nost', artist: 'Brian Thomas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngKiAhSrnWh-PLQwvsQGmCFSzpaavS2OY7w&s' },
    { id: 3, title: 'Magna Nost', artist: 'Brian Thomas', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRngKiAhSrnWh-PLQwvsQGmCFSzpaavS2OY7w&s' }
  ];

  const artists = [
    { id: 1, name: 'Jennifer Wilson', image: 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSdKRUaWKtYvB87jC6mRagzHoW0px0hMQWDmY7Z2-WuTuFKvHSZ' },
    { id: 2, name: 'Elizabeth Hall', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4-Agpn_XFGMcBW6OjcdT7vD01nvRSl7bCxwvCdU50fm5lrBAh' },
    { id: 3, name: 'Elizabeth Hall', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4-Agpn_XFGMcBW6OjcdT7vD01nvRSl7bCxwvCdU50fm5lrBAh' },
    { id: 4, name: 'Elizabeth Hall', image: 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcT4-Agpn_XFGMcBW6OjcdT7vD01nvRSl7bCxwvCdU50fm5lrBAh' },
  ];

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    
    <ScrollView>
      <View style={styles.container}>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',marginBottom: 20}}>
          <Image source={require("@/assets/images/smallLogo.png")}/>
          <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',gap: 10}}>
            <FontAwesome5 name="bell" size={24} color="black" />
            <Image source={require("@/assets/images/account.jpg")} style={styles.roundImage}/>
          </View>
        </View>
        <Text style={styles.heading}>Good morning,</Text>
        <Text style={{fontSize: 20, fontWeight: 700}}>Ashley Scott</Text>

        {/* Suggestions */}
        <Text style={styles.subheading}>Suggestions for you</Text>
        <ScrollView horizontal>
          {suggestions.map(item => (
            <TouchableOpacity key={item.id}>
              <Image source={{ uri: item.image }} style={styles.imageLarge} />
              <Text>{item.title}</Text>
              <Text>{item.artist}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Charts */}
        <Text style={styles.subheading}>Charts</Text>
        <ScrollView horizontal>
          {charts.map(chart => (
            <TouchableOpacity key={chart.id}>
              <View style={[styles.chartContainer, { backgroundColor: getRandomColor() }]}>
                <Text style={{color:'white'}}>{chart.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Trending Albums */}
        <Text style={styles.subheading}>Trending albums</Text>
        <ScrollView horizontal>
          {albums.map(album => (
            <TouchableOpacity key={album.id}>
              <Image source={{ uri: album.image }} style={styles.imageLarge} />
              <Text>{album.title}</Text>
              <Text>{album.artist}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Popular Artists */}
        <Text style={styles.subheading}>Popular artists</Text>
        <ScrollView horizontal>
          {artists.map(artist => (
            <TouchableOpacity key={artist.id} style={{justifyContent:'center',alignItems:'center'}}>
              <Image source={{ uri: artist.image }} style={styles.artistImage} />
              <Text style={{fontSize: 10}}>{artist.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor:'white' },
  heading: { fontSize: 10 },
  subheading: { fontSize: 18, marginTop: 20, fontWeight: '700', },
  imageLarge: { width: 150, height: 150, marginRight: 10 },
  chartContainer: { width: 150, height: 100, backgroundColor: '#ccc', marginRight: 10, justifyContent: 'center', alignItems: 'center' },
  artistImage: { width: 100, height: 100, borderRadius: 50, marginRight: 10 },
  roundImage: {
    width: 30,  // Chiều rộng của hình ảnh
    height: 30, // Chiều cao của hình ảnh (cần bằng chiều rộng để hình ảnh là hình tròn)
    borderRadius: 50,  // Bán kính để tạo hình tròn (1/2 của chiều rộng hoặc chiều cao)
  },
});

export default HomeScreen;
