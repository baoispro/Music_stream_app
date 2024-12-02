import { TextInput, Checkbox } from "react-native-paper";
import { Text, View, StyleSheet, ImageBackground,Image,Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import * as React from 'react';
import { FIREBASE_AUTH } from "@/FireBaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Index() {
  const router = useRouter();
  const handlePress = () => {
    router.push('/register');  // Chuyển đến trang details
  };
  const [userName,setUserName] = React.useState('');
  const [password,setPassword] = React.useState('');
  const auth = FIREBASE_AUTH;
  const [checked, setChecked] = React.useState(false);
  const signIn = async ()=>{
    try{
      const response = await signInWithEmailAndPassword(auth,userName,password)
      router.push('/(tabs)')
      alert("Bạn đã đăng nhập thành công")
    }catch (error: any){
      alert("Sign in failed: "+error.message);
    }
  }
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
            <TextInput mode="outlined" placeholder="Username"outlineStyle={{borderRadius: 15}} left={<TextInput.Icon icon='account'/>} style={{width:'100%',}} onChangeText={(text)=>setUserName(text)} value={userName}/>
            <TextInput mode="outlined" placeholder="Password"outlineStyle={{borderRadius: 15}} left={<TextInput.Icon icon='lock'/>} style={{width:'100%',}} onChangeText={(text)=>setPassword(text)} value={password}/>
            <View style={{flexDirection:'row', justifyContent:'space-between',alignItems:'center',width:'100%'}}>
                <View style={{flexDirection:'row', alignItems:'center'}}>
                    <Checkbox status={checked ? 'checked' : 'unchecked'} onPress={() => {setChecked(!checked);}}/>
                    <Text style={{color:'white'}}>Remember me</Text>
                </View>
                <Text style={{color:'white', fontWeight:'bold'}}>Forgot Password?</Text>
            </View>
          </View>
          <View style={{width:'90%', height:'12%', gap: 10, alignItems:'center'}}>
            <Pressable style={{backgroundColor:'#171A1F',borderRadius: 26, width: '100%',height:'50%', alignItems:'center', justifyContent:'center'}} onPress={()=>signIn()}>
              <Text style={{color:'white', fontSize: 18, fontWeight:'bold'}}>LOGIN</Text>
            </Pressable>
            <View style={{flexDirection:'row', gap: 10}}>
                <Text style={{color:'white'}}>Don't have an account?</Text>
                <Text style={{color:'white', fontWeight:'bold',textDecorationLine:'underline'}} onPress={handlePress}>Sign up</Text>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({

});