import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ImageBackground, Pressable } from 'react-native';
import Slider from '@react-native-community/slider';
import { Audio } from 'expo-av';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const playlist = [
  require('@/assets/songs/song1.mp3'), // Thay bằng các tệp âm thanh của bạn
  require('@/assets/songs/song1.mp3'),
  require('@/assets/songs/song1.mp3')
];

const MusicPlayer = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const [position, setPosition] = useState(0);
  const [duration, setDuration] = useState(0);

  // Tải và phát nhạc
  const playSound = async () => {
    if (!sound) {  // Chỉ tạo nhạc mới nếu chưa có sound
      const { sound: newSound } = await Audio.Sound.createAsync(playlist[currentSong]);
      setSound(newSound);
      await newSound.playAsync();
      newSound.setOnPlaybackStatusUpdate(onPlaybackStatusUpdate);
    } else {
      // Tiếp tục phát từ vị trí hiện tại nếu đã có sound
      await sound.playAsync();
      setIsPlaying(true);
    }
  };

  // Tạm dừng nhạc
  const pauseSound = async () => {
    if (sound) {
      await sound.pauseAsync();
      setIsPlaying(false);
    }
  };

  // Dừng nhạc
  const stopSound = async () => {
    if (sound) {
      await sound.stopAsync();
      setIsPlaying(false);
      setPosition(0); // Đặt lại thanh tiến trình
    }
  };

  // Phát bài tiếp theo
  const nextSong = () => {
    setCurrentSong((prev) => (prev + 1) % playlist.length);
  };

  // Phát bài trước
  const previousSong = () => {
    setCurrentSong((prev) => (prev - 1 + playlist.length) % playlist.length);
  };

  // Cập nhật trạng thái phát nhạc
  const onPlaybackStatusUpdate = (status: any) => {
    if (status.isLoaded) {
      setPosition(status.positionMillis || 0);
      setDuration(status.durationMillis || 0);
      if (status.didJustFinish) {
        nextSong(); // Tự động phát bài tiếp theo khi bài hiện tại kết thúc
      }
    }
  };

  // Xử lý việc chọn vị trí phát nhạc bằng thanh tiến trình
  const onSeekSliderValueChange = async (value: number) => {
    if (sound) {
      const seekPosition = value * duration;
      await sound.setPositionAsync(seekPosition);
      setPosition(seekPosition);
    }
  };

  // Giải phóng tài nguyên khi component bị hủy
  useEffect(() => {
    playSound(); // Phát bài khi bắt đầu hoặc khi thay đổi bài
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [currentSong]);

  return (
    <ImageBackground
      source={require("@/assets/images/Image29.png")} // Đường dẫn tới ảnh
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.title}>Shape of You</Text>
        <Text style={styles.subtitle}>Athony Taylor</Text>

        {/* Thanh thời lượng phát */}
        <Slider
          style={styles.slider}
          value={position / duration || 0}
          onValueChange={onSeekSliderValueChange}
          minimumTrackTintColor="#1DB954"
          maximumTrackTintColor="#ccc"
          thumbTintColor="#1DB954"
        />

        {/* Thời gian hiện tại và tổng thời gian */}
        <View style={styles.timeContainer}>
          <Text style={{ color: 'white' }}>{Math.floor(position / 1000)}s</Text>
          <Text style={{ color: 'white' }}>{Math.floor(duration / 1000)}s</Text>
        </View>

        {/* Các nút điều khiển */}
        <View style={styles.controls}>
          <Pressable onPress={previousSong}>
            <MaterialCommunityIcons name="skip-previous" size={50} color="white" />
          </Pressable>
          {isPlaying ? (
            <Pressable onPress={pauseSound}>
              <FontAwesome6 name="circle-pause" size={50} color="white" />
            </Pressable>
          ) : (
            <Pressable onPress={playSound}>
              <FontAwesome6 name="circle-play" size={50} color="white" />
            </Pressable>
          )}
          <Pressable onPress={nextSong}>
            <MaterialCommunityIcons name="skip-next-outline" size={50} color="white" />
          </Pressable>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MusicPlayer;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 400,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  subtitle: {
    fontSize: 14,
    color: 'white',
    marginBottom: 20,
  },
  slider: {
    width: 300,
    height: 40,
    marginTop: 20,
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 10,
  },
  controls: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
    marginTop: 20,
  },
});
