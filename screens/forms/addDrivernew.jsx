import React, { useState, useRef } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { BusFront, Scroll, User, Square, CheckSquare, Search, Calendar, CameraIcon } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


import SelectDropdown from 'react-native-select-dropdown'
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';




const countries = ["Punjab", "KPK", "Sindh", "Balochistan", "NHMP", "Islamabad", "AJK", "GB"]
const License_type = ["LTV", "HTV", "LTV / PSV" , "HTV / PSV", "Other" ]

const url = process.env.BASE_URL
const AddDrivernew = () => {

// expiry Date
  const [expirydate, setexpiryDate] = useState(new Date())
  const [expiryopen, setexpiryOpen] = useState(false)

// Issue Date
const [issuedate, setissueDate] = useState(new Date())
const [issueopen, setissueOpen] = useState(false)

// DOB
const [dobdate, setdobDate] = useState(new Date())
const [dobopen, setdobOpen] = useState(false)

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

  
      <ScrollView>
      <View className=" flex flex-col   ">
        <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>

          {/* Vehicle Information Design Tab */}
          <View className="  mt-1 w-full  ">

            <View className=" bg-yellow-400  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
              <Text className="text-black text-lg rounded-md font-bold ">Add Driver Information</Text>
              <User stroke="black" size={30}></User>
            </View>
          </View>

          {/*  Take Picture */}
          <View className={`${styles.outerview} `} style={{}} >
            
            <View className=" w-4/6  h-[100] border border-gray-500 items-center ">
            
            </View>
            <TouchableOpacity onPress={()=>launchsCamera()} className="justify-center w-full">
            <View className=" p-2 gap-2 flex flex-row  bg-orange-2200  justify-center items-center w-2/6">
              <CameraIcon stroke="black" />
              <Text className="text-black text-lg  font-bold">Take Picture</Text>
            </View>
            </TouchableOpacity>
          </View>
          
          {/* Enter CNIC */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">CNIC</Text></View>
            <View className="w-4/6 items-center">
            <TextInput
                placeholderTextColor={'grey'}
                placeholder='CNIC #'
                maxLength={13}
                value ={cnic}
                onChangeText={txt=>setCnic(txt)}
                onBlur={()=>checkDvr}
                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />


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
                className='   w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />

            </View>
          </View>

          {/* DOB*/}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">D.O.B</Text></View>
            <View className="w-4/6 items-center ">
            <View className="flex flex-row gap-1">
            
            <DatePicker
              modal
              mode="date"
              open={dobopen}
              date={dobdate}
              onConfirm={value => {
                setdobOpen(false);
                setdobDate(value);
              }}
              onCancel={() => {
                setdobOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {dobdate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => setdobOpen(true)}>
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

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />

            </View>
          </View>

          
          {/* Cell No. */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Cell No.</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='Cell Number'
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

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg text-center' />

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

                className='  w-8/12 bg-white border-black text-black rounded-md  text-lg tex text-center' />

            </View>
          </View>

           {/* License Number */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">License Number</Text></View>
            <View className="w-4/6 items-center">
              <TextInput
                placeholderTextColor={'grey'}
                placeholder='LES-15-1234'
                maxLength={15}
                className=' border-black text-black rounded-md  text-lg' />
            </View>
          </View>

          {/* License Type */}
          <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">License Type</Text></View>
            <View className="w-4/6 items-center">
            <SelectDropdown
                data= {License_type}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }}
                defaultButtonText='Select License type'
                buttonStyle={{
                  backgroundColor:'white',
              }}
                />
            </View>
          </View>

           {/* Issuing Authority */}
           <View className={styles.outerview}>
            <View className={styles.labelstyle}><Text className="text-black font-bold">Issuing Authority</Text></View>
            <View className="w-4/6 items-center">
              <SelectDropdown
                data= {countries}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index)
                }
                
                } 
                defaultButtonText='Select Authority'
                buttonStyle={{
                    backgroundColor:'white',
                }}
                />
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
              open={issueopen}
              date={issuedate}
              onConfirm={value => {
                setissueOpen(false);
                setissueDate(value);
              }}
              onCancel={() => {
                setissueOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {issuedate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => setissueOpen(true)}>
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
              open={expiryopen}
              date={expirydate}
              onConfirm={value => {
                setexpiryOpen(false);
                setexpiryDate(value);
              }}
              onCancel={() => {
                setexpiryOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {expirydate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => setexpiryOpen(true)}>
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