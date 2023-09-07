import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';
import DatePicker from 'react-native-date-picker';
import { BusFront, Scroll, User } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import DropDownPicker from 'react-native-dropdown-picker';
import { Bus } from 'lucide-react-native';




const TripReport = () => {
 



  return (
  <ScrollView className=" border">
    <View className="bg-slate-100  flex flex-col  border p-2 ">
      <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>
        {/* Vehicle Information Design Tab */}
        <View className=" mt-1 w-full  ">
          
         <View className=" bg-yellow-400  rounded-md p-1 m-1 w-fit items-center justify-center flex-row-reverse ">
            <Text className="text-black text-lg rounded-md font-bold ">Vehicle Trip Report </Text>
            <BusFront stroke="black" size={40}></BusFront>
        </View> 

            {/*  Route Permit Date */}
            <View className={styles.outerview} >
                    <View className={styles.labelstyle}><Text className="text-black  font-bold">Route Permit</Text></View>
                    <View className=" w-4/6  items-center">
                        
                        
                    </View>
              </View>

              
              {/*  Fitness */}
              <View className={styles.outerview} >
                    <View className={styles.labelstyle}><Text className="text-black  font-bold">Fitness</Text></View>
                    <View className=" w-4/6  items-center">
                        <TextInput
                          placeholderTextColor={'grey'}
                          placeholder='Fitness'
                          maxLength={50}
                    
                          className=' border-black text-black rounded-md  text-lg' />
                        
                    </View>
              </View>
              {/* Tyre Condition */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Tyre Condition</Text></View>
                    <View className="w-4/6 items-center">
                        <TextInput
                          placeholderTextColor={'grey'}
                          placeholder='Tyre Condition'
                          maxLength={50}
                          className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />
                        
                    </View>
              </View>
              {/* Tracker Installed */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Tracker Installed</Text></View>
                    <View className="w-4/6 items-center">
                        <TextInput
                          placeholderTextColor={'grey'}
                          placeholder='Tracker Installed'
                          maxLength={50}
                          
                          className='   w-8/12 bg-white border-black text-black rounded-md  text-lg' />
                        
                    </View>
              </View>
              {/* Emergecny Exit */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Emergency Exit</Text></View>
                    <View className="w-4/6 items-center">
                        <TextInput
                          placeholderTextColor={'grey'}
                          placeholder='Vehicle Color'
                          maxLength={70}
                          
                          className='  w-8/12 bg-white border-black text-black rounded-md  text-lg' />
                        
                    </View>
              </View>
              {/* Fire Extinguisher*/}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Fire Extinguihser</Text></View>
                    <View className="w-4/6 items-center">
                    
                 
                    </View>
              </View>

              {/* Number Plate Status */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Number Plate Status</Text></View>
                    <View className="w-4/6 items-center">
                    <TextInput
                              placeholderTextColor={'grey'}
                              placeholder='Seating Capacity'
                              maxLength={3}
                              className=' border-black text-black rounded-md  text-lg' />
                    </View>
              </View>

               {/* Vehicle Trip Count */}
               <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Vehicle Trip Count(24 Hrs)</Text></View>
                    <View className="w-4/6 items-center">
                    
                    </View>
              </View>

              {/* Seating Capacity */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Seating Capacity</Text></View>
                    <View className="w-4/6 items-center">
                   
                    </View>
              </View>

              {/* Road Worthy */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Road Worthy</Text></View>
                    <View className="w-4/6 items-center">
                      <TextInput
                            placeholderTextColor={'grey'}
                            placeholder='[eg 2019]'
                            maxLength={4}
                            className=' border-black text-black rounded-md  text-lg' />
                      </View>
              </View>

              {/* Warning */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Warning</Text></View>
                    <View className="w-4/6 items-center">
                      <TextInput
                              placeholderTextColor={'grey'}
                              placeholder='company Name'
                              maxLength={20}
                              className=' border-black text-black rounded-md  text-lg' />
                      </View>
                </View>

                {/* Enforced */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Enforced</Text></View>
                    <View className="w-4/6 items-center">
                      <TextInput
                              placeholderTextColor={'grey'}
                              placeholder='company Name'
                              maxLength={20}
                              className=' border-black text-black rounded-md  text-lg' />
                      </View>
                </View>

                 {/* Returned */}
              <View className={styles.outerview}>
                    <View className={styles.labelstyle}><Text className="text-black font-bold">Returned</Text></View>
                    <View className="w-4/6 items-center">
                      <TextInput
                              placeholderTextColor={'grey'}
                              placeholder='company Name'
                              maxLength={20}
                              className=' border-black text-black rounded-md  text-lg' />
                      </View>
                </View>
              

            {/* Buttons Save - Clear -Update */}
            <View className="flex-row items-center justify-center  w-fit">
                    <View className="  items-center w-full  ">
                      <TouchableOpacity className="bg-[#227935]  w-full rounded-md m-2 p-1">
                        <Text className="text-white  text-lg">Save</Text>
                      </TouchableOpacity>
                      </View>

                      
                    
              </View>
        </View>
       
          

      </KeyboardAvoidingView>
    </View>
  </ScrollView>
);
};

export default TripReport;

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