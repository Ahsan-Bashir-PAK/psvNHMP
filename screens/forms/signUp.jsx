import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';

import { BusFront, Scroll, User } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { Bus } from 'lucide-react-native';
import DocumentPicker from 'react-native-document-picker';



const SignUp = () => {
 

  return (
    <ScrollView className=" ">
    <View className=" flex flex-col   ">
      <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>

        {/* Sing Up page */}
        <View className="  mt-1 w-full  ">

          <View className=" bg-yellow-400  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
            <Text className="text-black text-lg rounded-md font-bold ">User SignUp</Text>
            <User stroke="black" size={30}></User>
          </View>
        </View>

        {/*  FIND */}
        <View className={`${styles.outerview} `} style={{}} >
          
          <View className=" w-4/6  border border-gray-200 items-center ">
              <TextInput 
              placeholderTextColor={'grey'}
              placeholder='Search User CNIC'
              maxLength={13}
              keyboardType='numeric'

              className=' text-black rounded-md  text-lg' />
              
          </View>
          <View className="flex flex-row-reverse  bg-orange-2200  justify-center items-center w-2/6"><Text className="text-black text-lg  font-bold">Search</Text>
          
          {/* <Search stroke='black' /> */}
          </View>
        </View>
        
        {/*   Name */}
        <View className={styles.outerview} >
          <View className={styles.labelstyle}><Text className="text-black  font-bold">User Name</Text></View>
          <View className=" w-4/6  items-center">
            <TextInput
              placeholderTextColor={'grey'}
              placeholder='User Name'
              maxLength={60}

              className=' border-black text-black rounded-md  text-lg' />

          </View>
        </View>

        {/* Password */}
        <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">User Password</Text></View>
          <View className="w-4/6 items-center">
            <TextInput
              placeholderTextColor={'grey'}
              placeholder='Password'
              maxLength={70}
              secureTextEntry={true}
              className='   w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />

          </View>
        </View>

        {/* Designation*/}
        <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Designation</Text></View>
          <View className="w-4/6 items-center ">
          <TextInput
              placeholderTextColor={'grey'}
              placeholder='User Name'
              maxLength={60}

              className=' border-black text-black rounded-md  text-lg' />

          </View>
        </View>

        {/* Belt No. */}
        <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Belt No.</Text></View>
          <View className="w-4/6 items-center">
            <TextInput
              placeholderTextColor={'grey'}
              placeholder='Belt No'
              maxLength={10}

              className='  w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />

          </View>
        </View>

        {/* Zone */}
        <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Zone</Text></View>
          <View className="w-4/6 items-center">
          <TextInput
              placeholderTextColor={'grey'}
              placeholder='Zone'
              maxLength={20}

              className='  w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />


          </View>
        </View>

        {/* Beat */}
        <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Beat</Text></View>
          <View className="w-4/6 items-center">
            <TextInput
              placeholderTextColor={'grey'}
              placeholder='Beat'
              keyboardType='numeric'
              maxLength={11}
              className=' border-black text-black rounded-md  text-lg' />
          </View>
        </View>

        {/* Status */}
        <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Status</Text></View>
          <View className="w-4/6 items-center">
          <TextInput
              placeholderTextColor={'grey'}
              placeholder='Enter Disiability'
              maxLength={70}

              className='  w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />

          </View>
        </View>

         {/* Role */}
         <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Role</Text></View>
          <View className="w-4/6 items-center">
          <TextInput
              placeholderTextColor={'grey'}
              placeholder='Company Name'
              maxLength={70}

              className='  w-8/12 bg-white border-black text-black rounded-md  text-lg tex text-center' />

          </View>
        </View>

         {/* Web Access */}
         <View className={styles.outerview}>
          <View className={styles.labelstyle}><Text className="text-black font-bold">Web Access</Text></View>
          <View className="w-4/6 items-center">
            <TextInput
              placeholderTextColor={'grey'}
              placeholder='Web Access'
              maxLength={4}
              minLength={2}
              keyboardType='numeric'
              className=' border-black text-black rounded-md  text-lg' />
          </View>
        </View>

         {/* Buttons Save - Clear -Update */}
         <View className="flex-row items-center justify-center ">
              <View className=" ">
                <TouchableOpacity className="bg-[#227935]  px-8 py-2 rounded-md m-2">
                  <Text className="text-white  text-lg">Save</Text>
                </TouchableOpacity>
              </View>


              <View className="">
                <TouchableOpacity className="bg-[#29378a] px-7 py-2 rounded-md m-2">
                  <Text className="text-white  text-lg">Update</Text>
                </TouchableOpacity>
              </View>
              <View className="">
                <TouchableOpacity className="bg-[#a54932] px-8 py-2 rounded-md m-2">
                  <Text className="text-white text-lg">Clear</Text>
                </TouchableOpacity>
              </View>


            </View>


      </KeyboardAvoidingView>
    </View>
  </ScrollView>
  );
};

export default SignUp;

const styles = {
  inputViolet:
    'w-full  border border-1 border-violet-400 rounded-md m-1 font-bold px-3 py-1 text-black',
  inputVioletSmall:
    'w-6/12  border border-1 border-violet-400 rounded-md mx-1 font-bold px-3 py-1 text-black',
    labelstyle:
    'text-center items-center justify-center w-2/6  border-r  border-slate-400  ',
     outerview:
    'flex flex-row mb-1 mx-2 border border-gray-300 p-1 rounded-md bg-white shadow-md  shadow-blue-900'
};