import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { UserPlus, Bus, Camera, UserCog, Pencil, BadgePlus, BusFront, Search, PenIcon, UserCog2, User, BookCopy, KeySquareIcon, LogOutIcon, AlignCenter } from 'lucide-react-native';



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


function Home() {
  const navigation = useNavigation();
  return (
    // <SafeAreaView>
    <View className="p-2 h-screen w-full bg-white">
      <View className='mt-5 rounded-m  h-2/6 w-full text-center'>
        {/* View Input Type */}
        <View className=' flex-row'>
          <TextInput
            style={{ backgroundColor: 'white' }}

            placeholderTextColor={'grey'}
            autoCapitalize={'characters'}
            placeholder='ABC'
            maxLength={3}
            keyboardType='email-address'
            className='border border-r-0 border-l-0 justify-center pl-4 bg-white border-black  rounded-md w-4/12  text-lg text-black' />

          <TextInput
            placeholderTextColor={'grey'}
            placeholder='Year'
            keyboardType='Numeric'
            maxLength={4}
            className=' border border-r-0 border-l-0 bg-white border-black text-black  rounded-md w-4/12 text-lg' />
          <TextInput
            placeholderTextColor={'grey'}
            placeholder='[0000]'
            maxLength={4}
            keyboardType='Numeric'
            className='  border border-r-0 border-l-0 bg-white border-black text-black rounded-md w-4/12 text-lg' />
        </View>
        {/* View SearchBox Button */}
        <View className=' flex-row p-1 justify-center  w-full '>
          <TouchableOpacity className='bg-[#29378a]  justify-center  flex-row w-full rounded-md items-center p-3 '>
            <Search stroke="white" size={25} />
            <Text className=' text-center font-bold font-white  text-lg text-white'>Search PSV</Text>
          </TouchableOpacity>
        </View>

        <View className=' flex-row p-1 justify-center  w-full '>
          <TextInput
            style={{ backgroundColor: 'white' }}

            placeholderTextColor={'grey'}
            autoCapitalize={'characters'}
            placeholder='0000000000000'
            maxLength={13}
            keyboardType='Numeric'
            className='border justify-center pl-4 bg-white border-black m-1 rounded-md w-full  text-lg text-black' />
        </View>
        <View className=' flex-row p-1 justify-center  w-full '>
          <TouchableOpacity className='bg-[#29378a]  justify-center  flex-row w-full rounded-md items-center p-3 '>
            <Search stroke="white" size={25} />
            <Text className=' text-center font-bold font-white  text-lg text-white'>Search Driver's License</Text>
          </TouchableOpacity>
        </View>
      </View>





      {/* PSVs TABS */}
      <View className=' bg-slate-100   rounded-lg h-[30%]  mt-0 p-4 '>
        {/*ADD PSV Button  */}
        <View className='flex-row justify-around'>
          <TouchableOpacity  onPress = {()=>navigation.navigate('AddVehicle')} className='shadow-md shadow-slate-950  w-2/5 flex-row  rounded-lg  flex justify-around items-center border border-slate-400  bg-white'>
            <View className="  items-center gap-1 justify-center mt-2 p-1 ">
              <BusFront stroke="orange" size={40} />
              <View className="flex justify-center items-center flex-row gap-1">
                <BadgePlus stroke="black" size={20} />
                <Text className=' font-bold font-white  text-lg text-black'>Add PSV</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/*Edit PSV Button  */}
          <TouchableOpacity className='w-2/5  shadow-md shadow-slate-950 rounded-lg  flex justify-center items-center   border border-slate-400  bg-white'>
            <View className="  items-center  gap-1 justify-center mt-2 p-1 ">
              <Bus stroke="green" size={40} />
              <View className="flex justify-center items-center flex-row gap-1">
                <Pencil stroke="black" size={20} />
                <Text className=' font-bold font-white  text-lg text-black'>Edit PSV</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View className=' flex-row justify-around mt-4'>
          <TouchableOpacity onPress={() => navigation.navigate('AddVehicle')} 
          className='  w-2/5 flex-row shadow-md shadow-slate-950  rounded-lg  flex justify-around items-center border border-slate-400  bg-white'>
            <View className="  items-center gap-1 justify-center mt-2 ">
              <User stroke="purple" size={40} />
              <View className="flex justify-center items-center flex-row gap-1">
                <BadgePlus stroke="black" size={20} />
                <Text className=' font-bold font-white  text-lg text-black'>Add Driver</Text>
              </View>
            </View>
          </TouchableOpacity>
          {/*Edit PSV Button  */}
          <TouchableOpacity className='w-2/5  shadow-md shadow-slate-950 rounded-lg  flex justify-center items-center   border border-slate-400  bg-white'>
            <View className="  items-center  gap-1 justify-center mt-2 ">
              <UserCog2 stroke="grey" size={40} />
              <View className="flex justify-center items-center flex-row gap-1">
                <Pencil stroke="black" size={20} />
                <Text className=' font-bold font-white  text-lg text-black'>Edit Driver</Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </View>


      {/* Driver Details */}


      {/* Dashboard & Profile TAB */}
      <View className='mt-4 ' >
        <TouchableOpacity className='w-full   h-10 rounded-lg  justify-center items-center bg-[#2e3d94] '>
          <View className="justify-center flex flex-row items-center  w-full gap-2">
            <BookCopy stroke="white" size={25} />
            <Text className=' font-bold font-white  text-lg text-white'>Generate Report</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Update Profile */}

      <View className='mt-2 ' >
        <TouchableOpacity className='w-full   h-10 rounded-lg  justify-center items-center bg-[#2e3d94] '>
          <View className="justify-center flex flex-row items-center  w-full gap-2">
            <UserCog2 stroke="white" size={25} />
            <Text className=' font-bold font-white  text-lg text-white'>Edit Profile</Text>
          </View>
        </TouchableOpacity>
      </View>
      {/* Update Logout */}

      <View className='mt-2 ' >
        <TouchableOpacity className='w-full   h-10 rounded-lg  justify-center items-center bg-[#a32d37] '>
          <View className="justify-center flex flex-row items-center  w-full gap-2">
            <LogOutIcon stroke="white" size={25} />
            <Text className=' font-bold font-white  text-lg text-white'>Logout</Text>
          </View>
        </TouchableOpacity>
      </View>







    </View>

    // </SafeAreaView>
  );
}

export default Home;