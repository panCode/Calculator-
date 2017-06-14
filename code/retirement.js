'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

// export class Retirement extends React.Component{
//   static navigationOptions = {
//     title: 'Retirement Calculator',
//   };
//   constructor(props){
//     super(props);
//     this.state={
//       pressStatus: false,
//       present_age:4,
//       retirement_age:15,
//       monthly_expenses:100000,
//       monthly_savings:100000,
//       sip_rate:12,
//       inflation_rate:6,
//       pre_retirement_sip:12,
//       post_retirement_sip:7,
//       life_expectancy:75,
//     }
//   }
//   _onHideUnderlay(){
//     this.setState({ pressStatus: false });
//   }
//   _onShowUnderlay(){
//     this.setState({ pressStatus: true });
//   }

//   update_present_age(data){
//     this.setState({
//       present_age:data.label,
//     });
//   }
//   update_retirement_age(data){
//     this.setState({
//       retirement_age:data.label,
//     });
//   }
//   update_inflation_rate(data){
//     this.setState({
//       inflation_rate:data.label,
//     });
//   }
  
//   update_sip_rate(data){
//     this.setState({
//       sip_rate:data,
//     });
//   }
//   update_monthly_expenses(data){
//     this.setState({
//       monthly_expenses:data,
//     });
//   }
//   update_monthly_savings(data){
//     this.setState({
//       monthly_savings:data,
//     });
//   }
//   update_pre_retirement_sip(data){
//     this.setState({
//       pre_retirement_sip:data.label,
//     });
//   }
//   update_post_retirement_sip(data){
//     this.setState({
//       post_retirement_sip:data.label,
//     });
//   }
//   update_life_expectancy(data){
//     this.setState({
//       life_expectancy:data.label,
//     })
//   }
  

//   render (){
//     //Current Age 
//     var data7=[];
//     for(let i=25;i<=45;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data7.push(object);
//     }
//      //Retirement Age
//     var data8=[];
//     for(let i=55;i<=66;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data8.push(object);
//     }
//     //Inflation Rate & Post Retirement 
//     var data9=[];
//     for(let i=1;i<=12;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data9.push(object);
//     }
//     //Pre Retirement
//     var data10=[];
//     for(let i=1;i<=15;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data10.push(object);
//     }
//     //Life expectancy
//     var data11=[];
//     for(let i=70;i<=100;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data11.push(object);
//     }
    
    
    
    
//      const { navigate } = this.props.navigation;
//     return (
//       <ScrollView>
//       <View
//         style={{
//               width:width,
//               height:height-50,
//               flex:1,
//               flexDirection:'column',
//               //backgroundColor:'#87ceeb',
//               // borderStyle:'dashed',
//               // borderColor:'black',
//               // borderWidth:1,
//               padding:10,
//               alignItems:'center',
//         }}
//       >
//       <View
//           style={{
//                     width:width-20,
//                     flex:0.05,
//                     flexDirection:'row',
//                     //backgroundColor:'#FFF8DC',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,


//             }}
//         >
//           <View
//               style={{
//                 flex:0.1700
//               }}
//           >
//           </View>
//           <View
//               style={{
//                 flex:1,

//               }}
//             >
//               <Text
//                 style={{
//                 fontSize:17,
//                 color:'red',

//               }}
//               >
//                 Present Age
//               </Text>
//             </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//               <Text
//                 style={{
//                 fontSize:17,
//                 color:'green'
//               }}
//               >
//                 Retirement Age
//               </Text>
//             </View> 
//             <View
//               style={{
//                 flex:0.170
//               }}
//           >
//           </View>  
//         </View>
//         <View
//           style={{
//                     width:width-20,
//                     flex:0.07,
//                     flexDirection:'row',
//                     //backgroundColor:'#FFF8DC',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,


//             }}
//         >
//           <View
//             style={{
//               flex:0.10
//             }}
//           >
//               <Text>

//               </Text>
//           </View>
//           <View
//             style={{
//               flex:0.5,
//               flexDirection:'column',

//             }}
//           >
            
//             <View
//               style={{
//                 flex:1

//               }}
//             >
//               <ModalPicker
//                 data={data7}
//                 onChange={(option)=>{ this.update_present_age(option)}}>
                        
//                 <TextInput
//                     style={{borderWidth:1,
//                      borderColor:'#994d00',
//                       padding:10,
//                        height:40 ,
//                         width:90,
//                         color:'#000000',
//                         textShadowRadius:0,
//                         fontSize:17 
//                     }}
//                     editable={false}
//                     //placeholder="     1 "
//                     value={this.state.present_age} 
//                 />
                            
//            </ModalPicker>
//             </View>

//           </View>
//           <View
//             style={{
//               flex:0.10
//             }}
//           >
//               <Text>

//               </Text>
//           </View>
//           <View
//             style={{
//               flex:0.5,
//               flexDirection:'column',
//               justifyContent:'center'
//             }}
//           >

            
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//               <ModalPicker
//                 data={data8}
//                 initValue="0"
//                 onChange={(option)=>{ this.update_retirement_age(option)}}>
//                 <TextInput
//                     style={{
//                       borderWidth:1,
//                        borderColor:'#994d00',
//                         padding:10,
//                          height:40 ,                          width:90,
//                           color:'#000000',
//                           textShadowRadius:0,
//                           fontSize:17 
//                       }}
//                     editable={false}
//                     value={this.state.retirement_age}
//                 />
                            
//            </ModalPicker>
//             </View>
//           </View>
          
//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.12,
//                     flexDirection:'row',
//                     //backgroundColor:'#FFF8DC',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View
//             style={{
//               flex:2,
//               flexDirection:'column'
//             }}
//           >
//            <View>
//             <Text
//               style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//             >
//                 Current Monthly Expenses 
//             </Text>
//            </View>
//            <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 (in Rupees)
//               </Text>
//            </View>

//           </View>
//           <View
          
//             style={{
//               flex:1,
//             }}
//           >
//             <TextInput
//               style={{
//                 height:50,
//                 borderStyle:'dashed',
//                 borderColor:'black',
//                 borderWidth:1,
//               }}
//               keyboardType='numeric'
//               value={this.state.monthly_expenses}
//               onChangeText={(value)=>this.update_monthly_expenses(value)}
//             >

//             </TextInput>
//           </View>
//           </View>

          
//         <View style={{
//                     width:width-20,
//                     flex:0.12,
//                     flexDirection:'row',
//                     //backgroundColor:'#FFF8DC',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View
//             style={{
//               flex:2,
//               flexDirection:'column'
//             }}
//           >
//            <View>
//             <Text
//               style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//             >
//                 Current Monthly Savings 
//             </Text>
//            </View>
//            <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 (in Rupees)
//               </Text>
//            </View>

//           </View>
//           <View
          
//             style={{
//               flex:1,
//             }}
//           >
//             <TextInput
//               style={{
//                 height:50,
//                 borderStyle:'dashed',
//                 borderColor:'black',
//                 borderWidth:1,
//               }}
//               keyboardType='numeric'
//               value={this.state.monthly_savings}
//               onChangeText={(value)=>this.update_monthly_savings(value)}
//             >

//             </TextInput>
//           </View>
//           </View>
//           <View style={{
//                     width:width-20,
//                     flex:0.12,
//                     //backgroundColor:'#7FFF00',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View
//             style={{
//               flex:0.50,
//               flexDirection:'row',
//               width:width-30,

//               margin:5,
//               alignItems:'center',
//               // backgroundColor:'#3b5998',
//               overflow:'hidden',
//               justifyContent:'space-between'
//             }}
//           >
//             <View
//             style={{
//               flex:2,
//               flexDirection:'column'
//             }}
//           >
//            <View>
//             <Text
//               style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//             >
//                 Expected Inflation Rate 
//             </Text>
//            </View>
//            <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 (% per Annum)
//               </Text>
//            </View>

//           </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//             <ModalPicker
//             data={data9}
//             initValue="0"
//             onChange={(option)=>{ this.update_inflation_rate(option)}}>
//             <TextInput
//                 style={{borderWidth:1,
//                  borderColor:'#994d00',
//                   padding:10,
//                    height:40 ,
//                     width:90,
//                     color:'#000000',
//                     textShadowRadius:0,
//                     fontSize:17 
//                 }}
//                 editable={false}
//                 // placeholder="    10"
//                 value={this.state.inflation_rate}
//             />
                            
//         </ModalPicker>
              
//             </View>
//           </View> 
//           </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.12,
//                     //backgroundColor:'#7FFF00',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View
//             style={{
//               flex:0.5,
//               flexDirection:'row',
//               width:width-30,

//               margin:5,
//               alignItems:'center',
//               // backgroundColor:'#3b5998',
//               overflow:'hidden',
//               justifyContent:'space-between'
//             }}
//           >
//             <View
//             style={{
//               flex:2,
//               flexDirection:'column'
//             }}
//           >
//            <View>
//             <Text
//               style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//             >
//                 Expected Inflation Rate 
//             </Text>
//            </View>
//            <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 (% per Annum)
//               </Text>
//            </View>

//           </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//             <ModalPicker
//             data={data10}
//             //initValue="0"
//             onChange={(option)=>{ this.update_pre_retirement_sip(option)}}>
//             <TextInput
//                 style={{borderWidth:1,
//                  borderColor:'#994d00',
//                   padding:10,
//                    height:40 ,
//                     width:90,
//                     color:'#000000',
//                     textShadowRadius:0,
//                     fontSize:17 
//                 }}
//                 editable={false}
//                 // placeholder="    10"
//                 value={this.state.pre_retirement_sip}
//             />
                            
//         </ModalPicker>
              
//             </View>
//           </View>     

//         </View>
//          <View style={{
//                     width:width-20,
//                     flex:0.12,
//                     //backgroundColor:'#7FFF00',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View
//             style={{
//               flex:0.5,
//               flexDirection:'row',
//               width:width-30,

//               margin:5,
//               alignItems:'center',
//               // backgroundColor:'#3b5998',
//               overflow:'hidden',
//               justifyContent:'space-between'
//             }}
//           >
//             <View
//             style={{
//               flex:2,
//               flexDirection:'column'
//             }}
//           >
//            <View>
//             <Text
//               style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//             >
//                 Expected Post-Retirement Return
//             </Text>
//            </View>
//            <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 (% per Annum)
//               </Text>
//            </View>

//           </View>

//           <View
//               style={{
//                 flex:1
//               }}
//             >
//             <ModalPicker
//             data={data9}
//             initValue="0"
//             onChange={(option)=>{ this.update_post_retirement_sip(option)}}>
//             <TextInput
//                 style={{borderWidth:1,
//                  borderColor:'#994d00',
//                   padding:10,
//                    height:40 ,
//                     width:90,
//                     color:'#000000',
//                     textShadowRadius:0,
//                     fontSize:17 
//                 }}
//                 editable={false}
//                 // placeholder="    10"
//                 value={this.state.post_retirement_sip}
//             />
                            
//         </ModalPicker>
              
//             </View>
//           </View>     

//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.12,
//                     //backgroundColor:'#7FFF00',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View
//             style={{
//               flex:0.5,
//               flexDirection:'row',
//               width:width-30,

//               margin:5,
//               alignItems:'center',
//               // backgroundColor:'#3b5998',
//               overflow:'hidden',
//               justifyContent:'space-between'
//             }}
//           >
//             <View
//             style={{
//               flex:2,
//               flexDirection:'column'
//             }}
//           >
//            <View>
//             <Text
//               style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//             >
//                 Life Expectancy 
//             </Text>
//            </View>
//            <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 (in Years)
//               </Text>
//            </View>

//           </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//             <ModalPicker
//             data={data11}
//             initValue="0"
//             onChange={(option)=>{ this.update_life_expectancy(option)}}>
//             <TextInput
//                 style={{borderWidth:1,
//                  borderColor:'#994d00',
//                   padding:10,
//                    height:40 ,
//                     width:90,
//                     color:'#000000',
//                     textShadowRadius:0,
//                     fontSize:17 
//                 }}
//                 editable={false}
//                 // placeholder="    10"
//                 value={this.state.life_expectancy}
//             />
                            
//         </ModalPicker>
              
//             </View>
//           </View>     

//         </View>
        
//         <View style={{
//                     width:width-20,
//                     flex:0.10,
//                     //backgroundColor:'#FFA500',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//           <View style={stylesbutton.container}>
//             <TouchableHighlight
//               onPress={
//                 ()=> navigate('result_retirement',{
//                                         a:this.state.present_age,
//                                        b:this.state.retirement_age,                     
//                                        c:this.state.monthly_expenses,                     
//                                        d:this.state.monthly_savings,                   
//                                        e:this.state.inflation_rate,                     
//                                        f:this.state.pre_retirement_sip,
//                                        g:this.state.post_retirement_sip,
//                                        h:this.state.life_expectancy   
//                 })
//               }
//               activeOpacity={1}
//               style={ this.state.pressStatus ? stylesbutton.buttonPress : stylesbutton.button }
//               onHideUnderlay={this._onHideUnderlay.bind(this)}
//               onShowUnderlay={this._onShowUnderlay.bind(this)}
//             >
//               <Text style={ 
//                 this.state.pressStatus ? stylesbutton.welcomePress : stylesbutton.welcome }
//               >Calculate</Text>
//             </TouchableHighlight>
//           </View>
//         </View>
//       </View>
//       </ScrollView>
//       );
//   }
// }

export class Retirement extends React.Component{
  static navigationOptions = {
    title: 'Retirement Calculator',
  };
  constructor(props){
    super(props);
    this.state={
      pressStatus: false,
      present_age:30,
      retirement_age:65,
      monthly_expenses:30000,
      monthly_savings:10000,
      inflation_rate:7,
      pre_retirement_sip:12,
      post_retirement_sip:7,
      life_expectancy:70,
    }
  }
  _onHideUnderlay(){
    this.setState({ pressStatus: false });
  }
  _onShowUnderlay(){
    this.setState({ pressStatus: true });
  }

  update_present_age(data){
    this.setState({
      present_age:data.label,
    });
  }
  update_retirement_age(data){
    this.setState({
      retirement_age:data.label,
    });
  }
  update_inflation_rate(data){
    this.setState({
      inflation_rate:data.label,
    });
  }
  
  update_monthly_expenses(data){
    this.setState({
      monthly_expenses:data,
    });
  }
  update_monthly_savings(data){
    this.setState({
      monthly_savings:data,
    });
  }
  update_pre_retirement_sip(data){
    this.setState({
      pre_retirement_sip:data.label,
    });
  }
  update_post_retirement_sip(data){
    this.setState({
      post_retirement_sip:data.label,
    });
  }
  update_life_expectancy(data){
    this.setState({
      life_expectancy:data.label,
    })
  }
  

  render (){
    //Current Age 
    var data7=[];
    for(let i=25;i<=45;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data7.push(object);
    }
     //Retirement Age
    var data8=[];
    for(let i=55;i<=66;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data8.push(object);
    }
    //Inflation Rate & Post Retirement 
    var data9=[];
    for(let i=1;i<=12;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data9.push(object);
    }
    //Pre Retirement
    var data10=[];
    for(let i=1;i<=15;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data10.push(object);
    }
    //Life expectancy
    var data11=[];
    for(let i=70;i<=100;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data11.push(object);
    }
    
    
    
    
     const { navigate } = this.props.navigation;
    return (
      <ScrollView style = {{backgroundColor:'#ffffff',padding:5}}>
      
      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Current Age</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data7}
                        onChange={(option)=>{ this.update_present_age(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       30"
                            value={this.state.present_age} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Retirement Age</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data8}
                        onChange={(option)=>{ this.update_retirement_age(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       60"
                            value={this.state.retirement_age} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:20}}>
      
        <View style = {{flex:6,backgroundColor:'#d9d9d9',height:60,borderRadius:5,width:70}}>
              <Text style = {styles.view}>Currently Monthly Expenses</Text>
                                <Text style={{textAlign:'center'}}>( In Rs. )</Text>
        </View>
        <View style ={{flex:6,alignItems:'center',justifyContent:'center'}}>
          <View style={{width:90,height:40,backgroundColor:'#ffffff'}}>   
            <TextInput 
            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90,color:'#000000',textShadowRadius:0,fontSize:17,textAlign:'center'}}
            underlineColorAndroid='white'
            keyboardType='numeric'
            placeholder = '30,000'
            editable = {true}
            value = {this.state.monthly_expenses}
            onChangeText={(value)=>this.update_monthly_expenses(value)}
            />
          </View>
        </View>
      </View>

      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:20}}>
      
        <View style = {{flex:6,backgroundColor:'#d9d9d9',height:60,borderRadius:5,width:70}}>
              <Text style = {styles.view}>Currently Monthly Savings</Text>
              <Text style={{textAlign:'center'}}>( In Rs.)</Text>
        </View>
        <View style ={{flex:6,alignItems:'center',justifyContent:'center'}}>
          <View style={{width:90,height:40,backgroundColor:'#ffffff'}}>   
            <TextInput 
            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90,color:'#000000',textShadowRadius:0,fontSize:17,textAlign:'center'}}
            underlineColorAndroid='white'
            keyboardType='numeric'
            placeholder = '10,000'
            editable = {true}
            value = {this.state.monthly_savings}
            onChangeText={(value)=>this.update_monthly_savings(value)}
            />
          </View>
        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Expected Inflation Rate</Text>
          <Text>( % per Year )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data9}
                        onChange={(option)=>{ this.update_inflation_rate(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       7"
                            value={this.state.inflation_rate} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>
      
      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Expected Pre-Retirement Rate </Text>
          <Text >( % per Year )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data10}
                        onChange={(option)=>{ this.update_pre_retirement_sip(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       12"
                            value={this.state.pre_retirement_sip} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Expected Post-Retirement Rate </Text>
          <Text>(% per Year)</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data9}
                        onChange={(option)=>{ this.update_post_retirement_sip(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       7"
                            value={this.state.post_retirement_sip} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Life Expectancy </Text>
          <Text>(in Years)</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data11}
                        onChange={(option)=>{ this.update_life_expectancy(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       70"
                            value={this.state.life_expectancy} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style={{alignItems:'center',justifyContent:'flex-start',padding:28}}>
          <View style = {{width:120}}>
            <Button 
            onPress={
                ()=> navigate('result_retirement',{
                                        a:this.state.present_age,
                                       b:this.state.retirement_age,                     
                                       c:this.state.monthly_expenses,                     
                                       d:this.state.monthly_savings,                   
                                       e:this.state.inflation_rate,                     
                                       f:this.state.pre_retirement_sip,
                                       g:this.state.post_retirement_sip,
                                       h:this.state.life_expectancy   
                })
              }
            title = "Calculate"
            color = '#008080'
          />
          </View>
      </View>
      </ScrollView>
      );
  }
}

const styles = StyleSheet.create({
	text:{
		color:'#000000',
		fontSize:17,
		textShadowRadius:1,
	},
	bigblue:{
		color:'#ffffff',
		fontWeight:'bold',
		fontSize:25,
		includeFontPadding:true,
		fontStyle:'normal',
		textShadowRadius:40
	},
	view:{
		color:'#000000',
		fontWeight:'bold',
		fontSize:16,
		alignItems:'flex-start',
		justifyContent:'flex-end',
		textAlign:'center'		
	},
	container: {
    height:450,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
});
const stylesbutton = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: '#87ceeb',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: '#000066'
  },
  welcomePress: {
    fontSize: 20,
    textAlign: 'auto',
    margin: 10,
    color: '#ffffff'
  },
  button: {
    borderColor: '#000066',
    borderWidth: 7,
    borderRadius: 10,
  },
  buttonPress: {
    borderColor: '#000066',
    backgroundColor: '#000066',
    borderWidth: 1,
    borderRadius: 10,
  },
});