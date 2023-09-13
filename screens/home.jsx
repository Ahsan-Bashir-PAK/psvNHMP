
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

const search_psv = [
{
  "PSV": "BSA-2019-5351", 
"seating_capacity":"45",
"company":"Faisal Movers",
"Route Permit":"15-09-2023",
"fitness":"20-11-2023",
"emergency exit":"yes"
},
{
  "PSV": "BSA-2019-1515", 
"seating_capacity":"45",
"company":"Faisal Movers",
"Route Permit":"15-09-2023",
"fitness":"20-11-2023",
"emergency exit":"yes"
},


];

// Driver Search 

const driver_data =[
  {
     "SrNo":"13",
     "CNIC":"12344578910",
     "DriverName":"Shaban",
     "FatherName":"Iqbal",
     "Age":"2023-08-08T00:00:00.000Z",
     "Address":"Gujranwala",
     "EyeSight":"glasses",
     "Disability":"nill",
     "Company":"Faisal Mover",
     "CellNo":"12345678",
     "LicenseType":"HTV",
     "LicenseNo":"456",
     "IssueAuth":"Punjab",
     "IssueDate":"2022-10-10T00:00:00.000Z",
     "LicenseVerify":true,
     "DriverPic":null,
     "AddedBY":"0",
     "AddedON":null,
     "LicenseExpiry":"2024-06-09T00:00:00.000Z",
     "Status":"Active",
     "KM":0,
     "Side":"NORTH",
     "EditedBy":null,
     "EditedOn":null,
     "EditedLat":null,
     "EditedLon":null,
     "BanReason":"",
     "AddedZone":"",
     "AddedSector":"North 3",
     "AddedBeat":""
  },
]



function Home() {
  const navigation = useNavigation();
  
  const [reg, setReg] = useState(null);
  const [year, setYear] = useState(null);
  const [number, setNumber] = useState(null);
  
  function searchPSV (){
  
     const psv = reg + "-"+ year + "-"+ number;
         if ( psv == search_psv[0].PSV) {
             navigation.navigate('TripReport');
       } else {
         console.log(psv, search_psv[0].PSV);
       }  
    }
      
    function searchDriver (){
  
      const psv = reg + "-"+ year + "-"+ number;
          if ( psv == search_psv[0].PSV) {
              navigation.navigate('TripReport');
        } else {
          console.log(psv, search_psv[0].PSV);
        }  
     }

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
            onChangeText={text=>setReg(text)}
            className='border border-r-0 border-l-0 justify-center pl-4 bg-white border-black  rounded-md w-4/12  text-lg text-black' />

          <TextInput
            placeholderTextColor={'grey'}
            placeholder='Year'
            keyboardType='Numeric'
            maxLength={4}
            onChangeText={text=>setYear(text)}
            className=' border border-r-0 border-l-0 bg-white border-black text-black  rounded-md w-4/12 text-lg' />
          <TextInput
            placeholderTextColor={'grey'}
            placeholder='[0000]'
            maxLength={4}
            keyboardType='Numeric'
            onChangeText={text=>setNumber(text)}
            className='  border border-r-0 border-l-0 bg-white border-black text-black rounded-md w-4/12 text-lg' />
        </View>
        {/* View SearchBox Button */}
        {/* <View  className=' flex-row p-1 justify-center  w-full '>
          <TouchableOpacity onPress={()=>searchPSV()} className='bg-[#29378a]  justify-center  flex-row w-full rounded-md items-center p-3 '>
            <Search stroke="white" size={25} />
            <Text className=' text-center font-bold font-white  text-lg text-white'>Search PSV</Text>
          </TouchableOpacity>
        </View> */}

        <View className=' flex-row p-1 justify-center  w-full '>
          <TextInput
            style={{ backgroundColor: 'white' }}

            placeholderTextColor={'grey'}
            autoCapitalize={'characters'}
            placeholder='0000000000000 [CNIC without Dashes]'
            maxLength={13}
            keyboardType='Numeric'
            className='border justify-center pl-4 bg-white border-black m-1 rounded-md w-full  text-lg text-black' />
        </View>
        <View className=' flex-row p-1 justify-center  w-full '>
          <TouchableOpacity onPress={()=>searchPSV()} className='bg-[#29378a]  justify-center  flex-row w-full rounded-md items-center p-3 '>
            <BookCopy stroke="white" size={25} />
            <Text className=' text-center font-bold font-white  text-lg text-white'>Generate Inspection Report</Text>
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
        <TouchableOpacity  onPress={()=>navigation.navigate('Login')} className='w-full   h-10 rounded-lg  justify-center items-center bg-[#a32d37] '>
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