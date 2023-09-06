import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { BusFront, Scroll, User, FileText, Navigation,ArrowUpRightSquare  } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { Bus } from 'lucide-react-native';





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

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //------------------------------------select vehicle type 
  //-------------------------------------------------------
  const [provinceOpen, setProvinceOpen] = useState(false);
  const [currentLiceince, setCurrentLiceince,] = useState(null);
  //----------------------------------------
  const [searchreg, setReg] = useState(null);
  const [setyear, setYear] = useState(null);

  const [acstate, setState] = useState(true);


  function clearall() {

    setReg('')
    setYear('')

  }



  return (
    <ScrollView className=" border">
      <View className="bg-slate-100  flex flex-col  border p-2 ">
        <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>
          {/* Vehicle Information Design Tab */}
          <View className=" mt-1 w-full  ">

            <View className=" bg-yellow-400  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
              <Text className="text-black text-lg rounded-md font-bold ">Route- Permit </Text>
              {/* <Navigation stroke="black" size={40}></Navigation> */}
              <ArrowUpRightSquare   stroke="black" size={30}></ArrowUpRightSquare  >
            </View>




            {/*  Route Permit Number */}
            <View className={styles.outerview} >
              <View className={styles.labelstyle}><Text className="text-black  font-bold">Rout Permit No.</Text></View>
              <View className=" w-4/6  items-center">
                <TextInput
                  placeholderTextColor={'grey'}
                  placeholder='Route Permit No.'
                  maxLength={50}

                  className=' border-black text-black rounded-md  text-lg' />

              </View>
            </View>
            {/* Issuing Authority*/}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Issuing Authority</Text></View>
              <View className="w-4/6 items-center">
                <TextInput
                  placeholderTextColor={'grey'}
                  placeholder='Issuing Autority'
                  maxLength={50}
                  className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />

              </View>
            </View>
            {/* Expiry Date */}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Expiry Date</Text></View>
              <View className="w-4/6 items-center">
                <TextInput
                  placeholderTextColor={'grey'}
                  placeholder='Expiry Date'
                  maxLength={50}

                  className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />

              </View>
            </View>
            {/* Route Type */}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Route Type</Text></View>
              <View className="w-4/6 items-center">
                <TextInput
                  placeholderTextColor={'grey'}
                  placeholder='Route Type'
                  maxLength={70}

                  className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />

              </View>
            </View>
            {/* Route From */}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Route From</Text></View>
              <View className="w-4/6 items-center">
              <TextInput
                  placeholderTextColor={'grey'}
                  placeholder='from'
                  maxLength={20}
                  className=' border-black text-black rounded-md  text-lg' />
              </View>
            </View>
            {/* Route To */}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Route To</Text></View>
              <View className="w-4/6 items-center">
                <TextInput
                  placeholderTextColor={'grey'}
                  placeholder='To'
                  maxLength={3}
                  className=' border-black text-black rounded-md  text-lg' />
              </View>
            </View>

            {/* Route Via */}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Route Via</Text></View>
              <View className="w-4/6 items-center">
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}

                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            {/* Upload Route Permit */}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold">Upload Route Permit</Text></View>
              <View className="w-4/6 items-center">
                <Switch
                  trackColor={{ false: '#767577', true: '#81b0ff' }}
                  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}

                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
            </View>

            {/* *******************FITNESS CERTIFICATE************************* */}

            <View className=" mt-1 w-full  ">

              <View className=" bg-yellow-400  p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
                <Text className="text-black text-lg rounded-md font-bold ">Fitness Certificate</Text>
                <FileText  stroke="black" size={30}></FileText >
              </View>

              {/* Fitness Certifcate No */}
              <View className={styles.outerview}>
                <View className={styles.labelstyle}><Text className="text-black font-bold">Fitness Certificate Number</Text></View>
                <View className="w-4/6 items-center">
                  <TextInput
                    placeholderTextColor={'grey'}
                    placeholder='Fitness No.'
                    maxLength={30}
                    className=' border-black text-black rounded-md  text-lg' />
                </View>
              </View>

              {/* Fitness Expiry Date */}
              <View className={styles.outerview}>
                <View className={styles.labelstyle}><Text className="text-black font-bold">Fitness Expiry Date</Text></View>
                <View className="w-4/6 items-center">
                  <TextInput
                    placeholderTextColor={'grey'}
                    placeholder='Expiry'
                    maxLength={20}
                    className=' border-black text-black rounded-md  text-lg' />
                </View>
              </View>

              {/* Fitness Issuing Autority */}
              <View className={styles.outerview}>
                <View className={styles.labelstyle}><Text className="text-black font-bold">Fitness Authority</Text></View>
                <View className="w-4/6 items-center">
                  <TextInput
                    placeholderTextColor={'grey'}
                    placeholder='Authority'
                    maxLength={20}
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
                  <TouchableOpacity className="bg-[#60a532] px-8 py-2 rounded-md m-2">
                    <Text className="text-white text-lg">Clear</Text>
                  </TouchableOpacity>
                </View>

                <View className="">
                  <TouchableOpacity className="bg-[#29378a] px-7 py-2 rounded-md m-2">
                    <Text className="text-white  text-lg">Update</Text>
                  </TouchableOpacity>
                </View>


              </View>
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