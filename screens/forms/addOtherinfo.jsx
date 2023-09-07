import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { Calendar, CheckSquare, Disc2, Square, Info } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';








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


const AddOtherInfo = () => {


  // Tyre Manufacturing Date
  const [date, setDate] = useState(new Date())
  const [open, setOpen] = useState(false)

  // Tyre expiry Date
  const [tyredate, settyreDate] = useState(new Date())
  const [tyreopen, settyreOpen] = useState(false)
''

  const [tyrecondition, SettyreCondition] = useState("");
  const [conditionstate, setConditionState] = useState("");


  //----------------LIGHTS----------------------
  const [headlight, SetheadLight] =useState("");
  const [backlight, SetbackLight] =useState("");
  const [hazardlight, SethazardLight] =useState("");
  const [foglight, SetfogLight] =useState("");
  const [emergencylight, SetemergencyLight] =useState("");

  //---------------------------------
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  //------------------------------------select vehicle type 
//-------------------------------------------dob



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
      <View className="bg-slate-100  flex flex-col  border  ">
        <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>
          {/* Other Information Tab */}
          <View className=" w-full h-screen mt-5 p-5">

            <View className=" bg-[#facc15]  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
              <Text className="text-black text-lg rounded-md font-bold "> Other Information</Text>
              {/* <Navigation stroke="black" size={40}></Navigation> */}
              <Info   stroke="#29378a" size={30} fill="#facc15" />
            </View>


            


            {/* *******************Vehicle Lights************************* */}

            <View className=" mt-1 w-full  ">

             

              {/* Head - Back- Fog Lights*/}
              <View className=" flex  justify-around  p-1">
              
              <View className=' flex flex-row border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'>
                <TouchableOpacity onPress={()=>headlight==""?SetheadLight('HeadLights'):SetheadLight("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${headlight == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${headlight == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">Registeration Number Plate</Text></TouchableOpacity>

                </View>
              
              <View className=' flex flex-row border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'>
                <TouchableOpacity onPress={()=>headlight==""?SetheadLight('HeadLights'):SetheadLight("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${headlight == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${headlight == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">Side View Mirros</Text></TouchableOpacity>

                </View>

              <View className='justify-around flex  border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'>
              <TouchableOpacity onPress={()=>backlight==""?SetbackLight('BackLights'):SetbackLight("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${backlight == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${backlight == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">Front Side Wipers</Text></TouchableOpacity>

              </View>

              <View className='justify-around flex   border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'>
              <TouchableOpacity onPress={()=>foglight==""?SetfogLight('FogLights'):SetfogLight("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${foglight == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${foglight == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">Fire Extinguisher</Text></TouchableOpacity>

              </View>
              </View>

            {/*Date Of Expiry Fire Extinguisher*/}
            <View className={styles.outerview}>
              <View className={styles.labelstyle}><Text className="text-black font-bold"> Expiry Date</Text></View>
              <View className="w-4/6 items-center">
              <View className="flex flex-row gap-1">
            
            <DatePicker
              modal
              mode="date"
              open={tyreopen}
              date={tyredate}
              onConfirm={value => {
                settyreOpen(false);
                settyreDate(value);
              }}
              onCancel={() => {
                settyreOpen(false);
              }}
            />

            <Text className="rounded-md  w-4/6   text-black text-center font-bold p-2">
              {tyredate.toLocaleDateString()}
            </Text>
            <TouchableOpacity onPress={() => settyreOpen(true)}>
              <Calendar stroke="black" fill="white" size={30}></Calendar>
            </TouchableOpacity>
          </View>
              

              </View>
            </View>



              {/* Hazard & Emergency Lights */}
              <View className=" flex ">
              <View className=' flex   border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'>
              <TouchableOpacity onPress={()=>hazardlight==""?SethazardLight('HazardLights'):SethazardLight("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${hazardlight == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${hazardlight == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">First Aid Box</Text></TouchableOpacity>

              </View>

            
              </View>
              
                 {/* Hazard & Emergency Lights */}
              <View className=" flex ">
              <View className=' flex   border border-gray-300  rounded-md bg-white shadow-md  shadow-blue-900'>
              <TouchableOpacity onPress={()=>hazardlight==""?SethazardLight('HazardLights'):SethazardLight("")}
                 className={`p-2 flex-row gap-1 text-center items-center`}>
                <Square stroke="black" className={`${hazardlight == ""? "block":"hidden"}`} />
                <CheckSquare stroke="black" className={`${hazardlight == ""? "hidden":"block"}`}></CheckSquare>
                <Text className="text-black font-bold">Zero Seat</Text></TouchableOpacity>

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

export default AddOtherInfo;

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