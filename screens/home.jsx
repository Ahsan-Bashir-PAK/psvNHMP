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
    Button,
    ImageBackground,
} from 'react-native';

const image = {uri:'C:\react native\psvNHMP\img\bus.jpg'}; 
function Home() {
    return (
            <SafeAreaView>
            <View className=" bg-[#ffffff] flex justify-center item-center h-screen">
             {/* Search PSV Container */}
             <View className ='  mt-20 flex  flex-row gap-1   h-4/4 flex-wrap justify-center item-center'>
             <TextInput
                    autoCapitalize={'characters'}
                    placeholder='ABC'
                    className=' p-2 border bg-grey-300 border-black m-3 rounded-md w-4/12 placeholder-green text-lg text-black' />
            <TextInput
                    placeholder='Year'
                    keyboardType='Numeric'
                    maxLength={4}
                    className=' p-3 border  bg-orange-300 border-black text-black m-3 rounded-md w-2/12 text-lg' />
            <TextInput
                    placeholder='Number (0000)'
                    maxLength={4}
                    keyboardType='Numeric'
                    className=' p-1 border  bg-orange-300 border-black text-black m-3 rounded-md w-4/12 text-lg' />
            
                <TouchableOpacity className=' w-3/4 p-4 border items-center bg-[#4498e6] border-black m-3 text-center rounded-md '>
              <View >
                    <Text className=' font-white font-extrabold text-lg'>Search PSV</Text>
              </View>
                </TouchableOpacity>
              </View>

                {/* TAB FLEX */}
             <View className =' flex  flex-row gap-4 h-5/6 flex-wrap justify-center item-center'>
             

              <TouchableOpacity  className=' bg-[url("../img/bus.jpg")] bg-slate-600 w-2/5   h-1/5   rounded-lg shadow-md flex justify-center items-center '>
               {/* <Image source={require('../img/bus.jpg')} className='w-2/5 h-2/4' />  */}
               <ImageBackground source={image} />
               <View className="  ">
              <Text className=' font-bold font-white  text-lg'>+ Add PSV</Text>
               </View> 
               </TouchableOpacity>
               <TouchableOpacity className='w-2/5   h-1/5 rounded-lg shadow-md flex justify-center items-center  shadow-blue-900  bg-orange-400'>
               <View className=" ">
              <Text className=' font-bold font-white  text-lg'>+ Edit PSVs</Text>
               </View> 
               </TouchableOpacity>
               <TouchableOpacity className='w-2/5   h-1/5 rounded-lg shadow-md flex justify-center items-center  shadow-blue-900  bg-orange-400'>
               <View className=" ">
              <Text className=' font-bold font-white  text-lg'>+ Add Driver</Text>
               </View> 
               </TouchableOpacity>
               <TouchableOpacity className='w-2/5   h-1/5 rounded-lg shadow-md flex justify-center items-center  shadow-blue-900  bg-orange-400'>
               <View className=" ">
              <Text className=' font-bold font-white  text-lg'>Edit Profile</Text>
               </View> 
               </TouchableOpacity>
             </View>
            </View>
            </SafeAreaView>
    );
}

export default Home;