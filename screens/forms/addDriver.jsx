import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import DatePicker from 'react-native-date-picker';
import { Scroll } from 'lucide-react-native';
const provices = [
  {label: 'NHMP', value: 'NHMP'},
  {label: 'Punjab', value: 'punjab'},
  {label: 'Sindh', value: 'sindh'},
  {label: 'KPK', value: 'kpk'},
  {label: 'Blochistan', value: 'Blochistan'},
  {label: 'Islamabad', value: 'islamabad'},
  {label: 'AJK', value: 'AJK'},
];

const licienceType = [
  {label: 'HTV', value: 'HTV'},
  {label: 'LTV', value: 'LTV'},
  {label: 'PSV', value: 'PSV'},
  {label: 'HTV / PSV', value: 'HTV /PSV'},
  {label: 'LTV / PSV', value: 'LTV /PSV'},
  {label: 'Other', value: 'Others'},
  
];

const AddDriver = () => {
  //-------------------------------------------dob
  const [dob, setDob] = useState(new Date());
  const [opendob, setOpenDob] = useState(false);
  //-------------------------------------------licence issue
  const [issue, setIssue] = useState(new Date());
  const [openIssue, setOpenIssue] = useState(false);
  //------------------------------------------- licience expiry
  const [expiry, setExpiry] = useState(new Date());
  const [openExpiry, setOpenExpiry] = useState(false);
  //-------------------------------------------------------
  const [provinceOpen, setProvinceOpen] = useState(false);
  const [currentLiceince, setCurrentLiceince,] = useState(null);

  //-------------------------------------------------------
  const [LcOpen, setLcOpen] = useState(false);
  const [currentProvince, setCurrentProvince] = useState(null);

  return (
    <View className="bg-slate-100  flex flex-col h-screen ">
 
      <View className="bg-slate-100 flex flex-row justify-center items-center rounded-lg shadow-lg shadow-black p-2 m-2">
       
        <TextInput 
        maxLength={13}
        keyboardType='numeric'
        placeholderTextColor={'grey'} 
        placeholder="Enter CNIC #" 
        className=  'w-9/12 py-1 border border-1 border-violet-400 rounded-md m-1 font-bold px-3 text-black'/>
        <TouchableOpacity className="bg-[#29378a] rounded-md w-1/5 py-2 ">
          <Text className="text-center text-white font-extrabold">Search</Text>
        </TouchableOpacity>
      </View>
      {/* </View> */}
      <View className="bg-slate-100 flex flex-col justify-center items-center rounded-lg shadow-lg shadow-black p-2 m-2">
        <TextInput
            keyboardType='email-address'
            placeholderTextColor={'grey'} 
          placeholder="Enter Driver Name"
          className={styles.inputViolet}
        />
        <TextInput
          placeholderTextColor={'grey'}
          placeholder="Enter Father Name"
          className={styles.inputViolet}
        />
{/* ========================================== d.o.b ============ */}
        <View className="flex flex-row ">
          <Text className="p-2 font- text-black">
            D.O.B
          </Text>
          <DatePicker
            modal
            mode="date"
            open={opendob}
            date={dob}
            onConfirm={value => {
              setOpenDob(false);
              setDob(value);
            }}
            onCancel={() => {
              setOpenDob(false);
            }}
          />

          <Text className="rounded-md border w-3/4 border-violet-400  text-black text-center font-bold p-2">
            {dob.toLocaleDateString()}
          </Text>
          <TouchableOpacity onPress={() => setOpenDob(true)}>
            <Text className="p-2 text-md bg-[#29378a] rounded-md ml-1">📅</Text>
          </TouchableOpacity>
        </View>
{/* ====================================================== */}

        <TextInput placeholderTextColor={'grey'} placeholder="Enter Address" className={styles.inputViolet} />
        <TextInput placeholderTextColor={'grey'} keyboardType='numeric'placeholder="Enter CNIC" className={styles.inputViolet} />
        <View className='flex flex-row m-1'>
        <TextInput placeholderTextColor={'grey'} keyboardType='numeric' placeholder="Cell No." className={styles.inputVioletSmall} />
        <TextInput placeholderTextColor={'grey'} placeholder="Disability( if any )" className={styles.inputVioletSmall}/>
        </View>
        <View className='flex flex-row m-1'>
        <TextInput placeholderTextColor={'grey'} placeholder="Company Name" className={styles.inputVioletSmall} />
       
        <TextInput placeholderTextColor={'grey'} placeholder="License No." className={styles.inputVioletSmall} />
        </View>
        <View className='flex flex-row gap-1 z-50'>
<View className='w-2/4 z-40'>
<DropDownPicker
          listMode={'SCROLLVIEW'}
          items={licienceType}
          open={LcOpen}
          setOpen={() => setLcOpen(!LcOpen)}
          value={currentLiceince}
          setValue={val => setCurrentLiceince(val)}
          placeholder="License Type"
          autoScroll={true}
          placeholderStyle={{color: 'darkgray'}}
          style={{
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 1,
            
          }}
          
        />
        </View>
        {/*   */}
       {/* -------------------------------------------------issue date */}
         <View className='w-2/4 '>
        {/* Provinces list */}
    
        <DropDownPicker
    
          items={provices}
          open={provinceOpen}
          setOpen={() => setProvinceOpen(!provinceOpen)}
          value={currentProvince}
          setValue={val => setCurrentProvince(val)}
          placeholder="Issuing Authority"
          placeholderStyle={{color: 'darkgray'}}
          dropDownContainerStyle={{
            backgroundColor: "white"
          }}
        listItemContainerStyle={{
            height:28
                
        }}
       
          style={{
            backgroundColor: 'white',
            borderColor: 'blue',
            borderWidth: 1,
            minHeight: 35,

                
          }}
        />
       
        </View>
        
        </View>
         <View className="flex flex-row m-1">
          <Text className="p-2 font-extrabold text-black">
            Issue Date
          </Text>
          <DatePicker
            modal
            mode="date"
            open={openIssue}
            date={issue}
            onConfirm={value => {
              setOpenIssue(false);
              setIssue(value);
            }}
            onCancel={() => {
              setOpenIssue(false);
            }}
          />

          <Text className="rounded-md border w-8/12 border-violet-400  text-blue-900 text-center font-bold p-2">
            {issue.toLocaleDateString()}
          </Text>
          <TouchableOpacity onPress={() => setOpenIssue(true)}>
            <Text className="p-2 text-md bg-[#29378a] rounded-md ml-1">📅</Text>
          </TouchableOpacity>
        </View>
         <View className="flex flex-row m-1">
          <Text className="p-2 font-extrabold text-black">
            Exp.   Date
          </Text>
          <DatePicker
            modal
            mode="date"
            open={openExpiry}
            date={expiry}
            onConfirm={value => {
              setOpenExpiry(false);
              setExpiry(value);
            }}
            onCancel={() => {
              setOpenExpiry(false);
            }}
          />

          <Text className="rounded-md border w-8/12   text-center text-black font-bold p-2">
            {expiry.toLocaleDateString()}
          </Text>
          <TouchableOpacity onPress={() => setOpenIssue(true)}>
            <Text className="p-2 text-md bg-[#29378a] rounded-md ml-1">📅</Text>
          </TouchableOpacity>
        </View>
      <View className ='flex flex-row mt-3'>
      <TouchableOpacity className='bg-[#29378a] px-5 py-2 rounded-md m-2'><Text className ='text-white font-extrabold'>RESET</Text></TouchableOpacity>
      <TouchableOpacity className='bg-green-500 px-5 py-2 rounded-md m-2'><Text className ='text-white font-extrabold'>SAVE</Text></TouchableOpacity>
      </View>
      </View>

    </View>
  );
};

export default AddDriver;

const styles = {
  inputViolet:
    'w-full  border border-1 border-violet-400 rounded-md m-1 font-bold px-3 py-1 text-black',
    inputVioletSmall:
    'w-6/12  border border-1 border-violet-400 rounded-md mx-1 font-bold px-3 py-1 text-black',
};