import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { BusFront, Scroll, User, Square, CheckSquare } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { Bus } from 'lucide-react-native';



const provices = [
  { label: 'NHMP', value: 'NHMP' },
  { label: 'Punjab', value: 'punjab' },
  { label: 'Sindh', value: 'sindh' },
  { label: 'KPK', value: 'kpk' },
  { label: 'Blochistan', value: 'Blochistan' },
  { label: 'Islamabad', value: 'islamabad' },
  { label: 'AJK', value: 'AJK' },
];


const Vehicletype = [
  { label: 'Select Vehicle Type', value: '-' },
  { label: 'BUS', value: 'NHMP' },
  { label: 'VAN', value: 'VAN' },
  { label: 'HIACE', value: 'HIACE' },
  { label: 'HIROOF', value: 'HIROOF' },
  { label: 'COASTER', value: 'COASTER' },
  { label: 'APV', value: 'APV' },
  { label: 'OTHER', value: 'OTHER' },
];

const company_name = [
  { label: 'HTV', value: 'HTV' },
  { label: 'LTV', value: 'LTV' },
  { label: 'PSV', value: 'PSV' },
  { label: 'HTV / PSV', value: 'HTV /PSV' },
  { label: 'LTV / PSV', value: 'LTV /PSV' },
  { label: 'Other', value: 'Others' },

];

const AddVehicle = () => {

  const [provinceOpen, setProvinceOpen] = useState(false);
  const [currentLiceince, setCurrentLiceince,] = useState(null);

  const [tracker, setTracker] = useState(false);
  const [emergencyExit, setEmergencyExit] = useState(false);
  const [ac, setAc] = useState(false);

  //------------------------------------select vehicle type 
  //-------------------------------------------------------

  //----------------------------------------
  const [searchreg, setReg] = useState(null);
  const [setyear, setYear] = useState(null);

  const [acstate, setState] = useState(true);

  const [LcOpen, setLcOpen] = useState(false);
  const [currentProvince, setCurrentProvince] = useState(null)

  function clearall() {

    setReg('')
    setYear('')

  }



  return (
     <ScrollView className=" ">
      <View className=" flex flex-col ">
        <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>

          {/* Vehicle Information Design Tab */}
          <View className="  mt-1 w-full  ">

            <View className=" bg-yellow-400  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
              <Text className="text-black text-lg rounded-md font-bold ">Add Vehicle Information</Text>
              <BusFront stroke="black" size={40}></BusFront>
            </View>
          </View>

          {/*  Select vehcile Type */}
          <View className={`${styles.outerview} `} style={{}} >
            <View className={styles.labelstyle}><Text className="text-black  font-bold">Vehicle Type</Text></View>
            <View className=" w-4/6 items-center ">
              <View className=" m-1  z-50">
              
              <DropDownPicker className=""

              items={provices}
              open={provinceOpen}
              setOpen={() => setProvinceOpen(!provinceOpen)}
              value={currentProvince}
              setValue={val => setCurrentProvince(val)}
              placeholder="Vehicle Type"
              placeholderStyle={{ color: 'darkgray' }}
              dropDownContainerStyle={{
                backgroundColor: "white",
                position:'absolute',
                
              }}

              style={{
                backgroundColor: 'white',
                borderColor: 'grey',
                borderWidth: 1,
                minHeight: 49,
                


              }}
              />
            </View>
            </View>
          </View>

          {/* Enter Bus Reg Number [ABC] [2019] [1234] */}
          <View className={styles.outerview} >

            {/* REG NO */}
            <View className=" w-4/12 items-center border-r ">
              <TextInput
                style={{ backgroundColor: 'white' }}
                value={searchreg}
                onChange={(e) => setReg(e.target.value)}
                placeholderTextColor={'grey'}
                autoCapitalize={'characters'}
                placeholder='CAG'
                maxLength={3}
                className='   bg-white border-black  text-lg text-black' />
            </View>

            {/* YEAR */}
            <View className="w-4/12 items-center border-r ">
              <TextInput
                Value={setyear}
                onChange={(e) => setYear(e.target.value)}
                placeholderTextColor={'grey'}
                placeholder='Year[2019]'
                maxLength={4}
                className='   bg-white border-black text-black    text-lg' />
            </View>

            {/* Number */}
            <View className="w-4/12 items-center ">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='[0000]'
                maxLength={4}
                className='    bg-white border-black text-black   text-lg' />
            </View>
          </View>

          {/*  Add Chaisis No */}
          <View className={styles.outerview} >
            <View className={styles.labelstyle}><Text className="text-black  font-bold">Chassis Number</Text></View>
            <View className=" w-4/6  items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Chassis Number'
                maxLength={50}

                className=' border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* Add Engine Number */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Engine Number</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Engine Number'
                maxLength={70}
                className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* Add Vehicle Make */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Vehicle Make</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='HIGER-YUTONG-DAEWOO'
                maxLength={100}

                className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* Add Vehicle Color */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Vehicle Color</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Vehicle Color'
                maxLength={70}

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* AC or Non- AC */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">AC or Non AC</Text></View>
            <View className="w-4/6 items-center">
            <TouchableOpacity onPress={()=>ac==""?setAc('AC'):setAc("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${ac == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${ac == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">{ac=="" ?"Non-AC":" AC"}</Text></TouchableOpacity>

            </View>
          </View>

          {/* Seating Capapcity */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Seating Capacity</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Seating Capacity'
                keyboardType='numeric'
                maxLength={3}
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

          {/* Tracker Installed (Yes / No) */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Tracker Installed</Text></View>
            <View className="w-4/6 items-center">
            <TouchableOpacity onPress={()=>tracker==""?setTracker('FirstAid'):setTracker("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${tracker == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${tracker == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">{tracker=="" ?"Not Installed":" Tracker Installed"}</Text></TouchableOpacity>
            </View>
          </View>

           {/* Emergency Exit Gate */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Emergency Exit Gate</Text></View>
            <View className="w-4/6 items-center">
              <TouchableOpacity onPress={()=>emergencyExit==""?setEmergencyExit('FirstAid'):setEmergencyExit("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${emergencyExit == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${emergencyExit == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">{emergencyExit=="" ?"Not Installed":"Exit Gate Installed"}</Text></TouchableOpacity>
            </View>
          </View>

           {/* Manufacturing Year */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Manufacturing Year</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='[2021]'
                maxLength={4}
                minLength={2}
                keyboardType='numeric'
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

          {/* Company Name */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Company Name</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='[Faisal Mover, Daewoo, Kohistan]'
                maxLength={30}
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

export default AddVehicle;

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