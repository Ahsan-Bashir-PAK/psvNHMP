import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { BusFront, Scroll, User, Square, CheckSquare, Search, Calendar } from 'lucide-react-native';
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

const AddDrivernew = () => {

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

     // Fire Ext Date
     const [fireextdate, setDate] = useState(new Date())
     const [fireextopen, setOpen] = useState(false)

  function clearall() {

    setReg('')
    setYear('')

  }



  return (
     <ScrollView className=" ">
      <View className=" flex flex-col   ">
        <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>

          {/* Vehicle Information Design Tab */}
          <View className="  mt-1 w-full  ">

            <View className=" bg-yellow-400  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
              <Text className="text-black text-lg rounded-md font-bold ">Add Driver Information</Text>
              <User stroke="black" size={30}></User>
            </View>
          </View>

          {/*  Search CNIC */}
          <View className={`${styles.outerview} `} style={{}} >
            
            <View className=" w-4/6  border border-gray-200 items-center ">
                <TextInput 
                placeholderTextColor={'grey'}
                placeholder='Enter Driver CNIC'
                maxLength={13}
                keyboardType='numeric'

                className=' text-black rounded-md  text-lg' />
                
            </View>
            <View className="flex flex-row-reverse  bg-orange-2200  justify-center items-center w-2/6"><Text className="text-black text-lg  font-bold">Search</Text>
            
            {/* <Search stroke='black' /> */}
            </View>
          </View>
          
          {/*  Driver Name */}
          <View className={styles.outerview} >
            <View className={styles.labelstyle}><Text className="text-black  font-bold">Driver Name</Text></View>
            <View className=" w-4/6  items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Driver Name'
                maxLength={50}

                className=' border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* Add Father Name */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Father Name</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='
                Father Name'
                maxLength={70}
                className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* DOB*/}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">D.O.B</Text></View>
            <View className="w-4/6 items-center">
            <View className="flex flex-row gap-1">
            
            <DatePicker
              modal
              mode="date"
              open={fireextopen}
              date={fireextdate}
              onConfirm={value => {
                setOpen(false);
                setDate(value);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {fireextdate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => settyreOpen(true)}>
              <Calendar stroke="black" fill="white" size={30}></Calendar>
            </TouchableOpacity>
          </View>
            </View>
          </View>

          {/* Enter Address */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Address</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Address'
                maxLength={70}

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

          {/* Enter CNIC */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">CNIC</Text></View>
            <View className="w-4/6 items-center">
            <TextInput
                placeholderTextColor={'grey'}
                placeholder='CNIC #'
                maxLength={13}

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />


            </View>
          </View>

          {/* Cell No. */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Cell No.</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Seating Capacity'
                keyboardType='numeric'
                maxLength={11}
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

          {/* Disability */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Disability</Text></View>
            <View className="w-4/6 items-center">
            <TextInput
                placeholderTextColor={'grey'}
                placeholder='Enter Disiability'
                maxLength={70}

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

           {/* Company Name */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Company Name</Text></View>
            <View className="w-4/6 items-center">
            <TextInput
                placeholderTextColor={'grey'}
                placeholder='Company Name'
                maxLength={70}

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />

            </View>
          </View>

           {/* Manufacturing Year */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">License Number</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='LES-15-1234'
                maxLength={4}
                minLength={2}
                keyboardType='numeric'
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

          {/* License Type */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">License Type</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='[LTV/ HTV/PSV]'
                maxLength={30}
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

           {/* Issuing Authority */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Issuing Authority</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='[NHMP, Punjab etc]'
                maxLength={30}
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

 {/* License Isssue Date */}
 <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Issue Date</Text></View>
            <View className="w-4/6 items-center">
            <View className="flex flex-row gap-1">
            
            <DatePicker
              modal
              mode="date"
              open={fireextopen}
              date={fireextdate}
              onConfirm={value => {
                setOpen(false);
                setDate(value);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {fireextdate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => settyreOpen(true)}>
              <Calendar stroke="black" fill="white" size={30}></Calendar>
            </TouchableOpacity>
          </View>
              </View>
          </View>

           {/* License Expiry Date */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Expiry Date</Text></View>
            <View className="w-4/6 items-center">
            <View className="flex flex-row gap-1">
            
            <DatePicker
              modal
              mode="date"
              open={fireextopen}
              date={fireextdate}
              onConfirm={value => {
                setOpen(false);
                setDate(value);
              }}
              onCancel={() => {
                setOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {fireextdate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => settyreOpen(true)}>
              <Calendar stroke="black" fill="white" size={30}></Calendar>
            </TouchableOpacity>
          </View>

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

export default AddDrivernew;

const styles = {
  inputViolet:
    'w-full  border border-1 border-violet-400 rounded-md m-1 font-bold px-3 py-1 text-black',
  inputVioletSmall:
    'w-6/12  border border-1 border-violet-400 rounded-md mx-1 font-bold px-3 py-1 text-black',
  labelstyle:
    'text-center items-center justify-center w-2/6  border-r  border-slate-400  ',
  outerview:
    'flex flex-row  mx-2 border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'
};