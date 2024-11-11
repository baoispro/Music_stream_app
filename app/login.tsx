import { TextInput, Checkbox } from "react-native-paper";
import { Text, View, StyleSheet, ImageBackground,Image,Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as React from 'react';

export default function Index() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/login');  // Chuyển đến trang details
  };
  const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaProvider>
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ImageBackground source={require('@/assets/images/background.png')} resizeMode="cover" style={{flex:1,width:'100%',justifyContent:'space-around',alignItems:'center'}}>
          <Image source={require('@/assets/images/logoBackground.png')} style={{width:'27%', height:'8%'}}/>
          <View style={{alignItems:'center'}}>
            <Text style={{color:'white', fontWeight:'bold',fontSize:40}}>Welcome back</Text>
            <Text style={{color:'white', fontWeight:'bold',fontSize:10}}>Login to your account</Text>
          </View>
          <View style={{alignItems:'center',justifyContent:'center', width:'90%', height:'30%', gap: 10}}>
            <TextInput mode="outlined" placeholder="Username"outlineStyle={{borderRadius: 15}} left={<TextInput.Icon icon='account'/>} style={{width:'100%',}}/>
            <TextInput mode="outlined" placeholder="Password"outlineStyle={{borderRadius: 15}} left={<TextInput.Icon icon='lock'/>} style={{width:'100%',}}/>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked);}}/>
                    <Text style={{color:'white'}}>Remember me</Text>
                </View>
                <Text style={{color:'white', fontWeight:'bold'}}>Forgot Password?</Text>
            </View>
          </View>
          <View style={{width:'90%', height:'12%', gap: 10, alignItems:'center'}}>
            <Pressable style={{backgroundColor:'#171A1F',borderRadius: 26, width: '100%',height:'50%', alignItems:'center', justifyContent:'center'}}>
              <Text style={{color:'white', fontSize: 18, fontWeight:'bold'}}>LOGIN</Text>
            </Pressable>
            <View style={{flexDirection:'row', gap: 10}}>
                <Text style={{color:'white'}}>Don't have an account?</Text>
                <Text style={{color:'white', fontWeight:'bold',textDecorationLine:'underline'}}>Sign up</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});