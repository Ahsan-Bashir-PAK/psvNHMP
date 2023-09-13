import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Switch } from 'react-native';

import { BusFront, Scroll, User } from 'lucide-react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { Bus } from 'lucide-react-native';
import DocumentPicker from 'react-native-document-picker';



const TestPage = () => {
 
      const selectDocument = async ()=> {
            try {
            const doc = await DocumentPicker.pick({
                  type:[DocumentPicker.types.images, DocumentPicker.types.pdf],
                  allowMultiSelection:false
                  
            });
            console.log(doc);

            } catch (err) {
                  
            }      
      }



  return (
  <ScrollView className=" border">
    <View className="bg-slate-100  flex flex-col h-screen border p-2 justify-center">
      <KeyboardAvoidingView style={{ backgroundColor: 'white' }}>
        {/* Vehicle Information Design Tab */}
        <View className=" mt-1 w-full  ">
          
         <View className=" bg-yellow-400  rounded-md p-1  w-fit items-center justify-center flex-row-reverse ">
            <Text className="text-black text-lg rounded-md font-bold ">Vehicle Trip Report </Text>
            <BusFront stroke="black" size={40}></BusFront>
        </View>

            <View className="border h-40 bg-slate-200">
                        
            </View>


            {/* Buttons Save - Clear -Update */}
            <View className="flex-row items-center justify-center  w-fit">
                    <View className="  justify center items-center w-full  ">
                      <TouchableOpacity  onPress={()=>selectDocument()} className="bg-[#227935] items-center  w-full rounded-md m-2 p-1">
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

export default TestPage;

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