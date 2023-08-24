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
} from 'react-native';

function Login() {
    const [user, setUser] = useState("")
    const [userpwd, setPwd] = useState("")
    const navigation = useNavigation();
    return (
        <View className='px-5 flex justify-start items-center h-screen  bg-gray-900 pt-10 '>
            <View className="w-full p-0 h-2/5 bg-blue-900 flex justify-center items-center ">
                <Image source={require('../img/logo.png')} className='w-2/5 h-2/4' />
                <Text className='font-extrabold text-2xl  text-white'>PSVs MIS</Text>
                <Text className='font-extrabold text-1xl text-yellow-500'>National Highways & Motorway Police</Text>
            </View>
            <View className='w-full  flex justify-center items-center h-fit bg-slate-600 py-10 '>
                <Text className='text-white font-extrabold '>LOGIN HERE</Text>
                <TextInput
                    placeholder='User Name'
                    value={user}
                    onChange={(e) => setUser(e.target.value)}
                    className=' p-2 border border-white text-black m-3 rounded-md w-10/12' />

                <TextInput
                    secureTextEntry={true}
                    placeholder='password'
                    value={userpwd}
                    onChange={(e) => setPwd(e.target.value)}
                    className=' p-2 border border-white text-white m-3 rounded-md w-10/12' />

                <TouchableOpacity onPress={() => navigation.navigate('Home')}
                    className='p-3 bg-slate-200 text-center rounded-md w-6/12 mt-10' >
                    <Text className='text-blue-500 text-center font-bold'>Login</Text>

                </TouchableOpacity>
            </View>
            <View className='text-white p-2 w-full flex justify-center  items-center bg-slate-500 border-y  border-yellow-500'>
                <Text>Copyrights reserved by</Text>
                <Text>NHMP Training  College, IT Wing</Text>
            </View>
        </View>

    );
}



export default Login;
