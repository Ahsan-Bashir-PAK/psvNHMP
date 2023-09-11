import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    useColorScheme,
    View,
    Image,
    Alert,
} from 'react-native';

function Login() {
    const [user, setUser] = useState("")
    const [userpwd, setPwd] = useState("")
    const navigation = useNavigation();

function userLogin () {
    if (user=="admin" && userpwd == "a") {
        navigation.navigate('Home');
    } else { console.log( user, userpwd , 'Please enter valid username & password');}
}
    return (
        <View className='px-5 flex justify-center items-center h-screen  bg-gray-900 pt-2 '>
            <View className="w-full p-0 h-3/6 bg-blue-900 flex justify-center items-center ">
                <Image source={require('../img/logo.png')} className='w-[270] h-[300] border ' />
                <Text className='font-extrabold text-3xl  text-white'>PSVs MIS</Text>
                <Text className='font-extrabold sm:text-2xl text-lg text-yellow-500'>National Highways & Motorway Police</Text>
            </View>
            <View className='w-full  flex justify-center items-center h-fit bg-slate-600 py-10 '>
                {/* <Text className='text-white font-extrabold  text-lg text-left '>LOGIN HERE</Text> */}
                <TextInput
                    placeholder='User Name'
                    value={user}
                    onChangeText={text=>setUser(text)}
                    className=' h-[50] p-2 border bg-slate-100 border-white text-black m-3 rounded-md w-10/12' />

                <TextInput
                    secureTextEntry={true}
                    placeholder='Password'
                    value={userpwd}
                    onChangeText={e => setPwd(e)}
                    className='h-[50] p-2 border bg-slate-100 border-white text-black m-3 rounded-md w-10/12' />

                <TouchableOpacity onPress={()=>userLogin()}
                    className='p-3 bg-slate-200 text-center rounded-md w-6/12 mt-10' >
                    <Text className='text-blue-500 text-center font-bold text-lg'>Login</Text>

                </TouchableOpacity>
            </View>
            <View className='text-white p-2 w-full flex justify-center  items-center bg-slate-500 border-y  border-yellow-300'>
                <Text className="text-white">Copyrights reserved by</Text>
                <Text className="text-white">NHMP Training  College, IT Wing</Text>
            </View>
        </View>

    );
}



export default Login;
