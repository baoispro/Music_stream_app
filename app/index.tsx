import { Text, View, StyleSheet, ImageBackground,Image,Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';

export default function Index() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/login');  // Chuyển đến trang details
  };
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ImageBackground source={require('@/assets/images/background.png')} resizeMode="cover" style={{flex:1,width:'100%',justifyContent:'space-evenly',alignItems:'center'}}>
          <Image source={require('@/assets/images/logoBackground.png')} style={{width:'27%', height:'8%', marginBottom:200}}/>
          <View>
            <Text style={{color:'white', fontWeight:'bold',fontSize:40}}>Your music</Text>
            <Text style={{color:'white', fontWeight:'bold',fontSize:40}}>Your artists</Text>
          </View>
          <View style={{width:'90%', height:'12%', gap: 30}}>
            <Pressable style={{backgroundColor:'#171A1F',borderRadius: 26, width: '100%',height:'50%', alignItems:'center', justifyContent:'center'}} onPress={()=>{router.push('/register');}}>
              <Text style={{color:'white', fontSize: 18}}>Create an account</Text>
            </Pressable>
            <Pressable style={{backgroundColor:'#F7F1FE',borderRadius: 26, width: '100%',height:'50%', alignItems:'center', justifyContent:'center'}} onPress={handlePress}>
              <Text style={{color:'#9D45EF', fontSize: 18}}>I already have an account</Text>
            </Pressable>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});