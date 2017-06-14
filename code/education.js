'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry,Dimensions,TouchableOpacity,TouchableHighlight} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
import  ModalPicker  from 'react-native-modal-picker';
import { Bar } from 'react-native-pathjs-charts';
var {height,width} = Dimensions.get('window');

// export class Education extends React.Component{
//   static navigationOptions = {
//     title: 'Education Calculator',
//   };
//   constructor(props){
//     super(props);
//     this.state={
//       pressStatus: false,
//       present_age:6,
//       college_age:17,
//       education_period:4,
//       today_cost:100000,
//       sip_rate:12,
//       inflation_rate:7,
//     }
//   }
//   _onHideUnderlay(){
//     this.setState({ pressStatus: false });
//   }
//   _onShowUnderlay(){
//     this.setState({ pressStatus: true });
//   }

//   update_present_age(data){
//   	this.setState({
//   		present_age:data.label,
//   	});
//   }
//   update_college_age(data){
//   	this.setState({
//   		college_age:data.label,
//   	});
//   }
//   update_education_period(data){
//   	this.setState({
//   		education_period:data.label,
//   	});
//   }
//   update_inflation_rate(data){
//   	this.setState({
//   		inflation_rate:data.label,
//   	});
//   }
//   update_sip_rate(data){
//   	this.setState({
//   		sip_rate:data.label,
//   	});
//   }
//   update_today_cost(data){
//   	this.setState({
//   		today_cost:data,
//   	})
//   }
  

//   render (){
//     var data01=[];
//     var data02=[];
//   	var data3=[];
//     var data4=[];
//     var data5=[];
//     var data6=[];
//     for(let i=0;i<=12;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data01.push(object);
//     }
//     for(let i=1;i<=15;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data02.push(object);
//     }
//     for(let i=0;i<=18;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data3.push(object);
//     }
//     for(let i=15;i<=25;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data4.push(object);
//     }
//     for(let i=1;i<=10;++i)
//     {
//       let object ={};
//       object["key"]=i;
//       object["label"]=""+i+"";
//       data5.push(object);
//     }
//      const { navigate } = this.props.navigation;
//     return (
//       <ScrollView style ={{backgroundColor:'#ffffff',padding:5}}>
//       <View
//         style={{
//           		width:width,
//           		height:height-70,
//               flex:1,
//               flexDirection:'column',
//               backgroundColor:'#ffffff',
//               // borderStyle:'dashed',
//               // borderColor:'black',
//               // borderWidth:1,
//               justifyContent:'center',
//               padding:20,
//               alignItems:'center',
//         }}
//       >
//         <View
//           style={{
//             flex:0.40,
//             flexDirection:'row',
//             width:width-30,
            

//             margin:5,
//             alignItems:'center',
//             // backgroundColor:'#3b5998',
//             overflow:'hidden',
//             // justifyContent:'space-between'
//           }}
//         >
//           <View
//             style={{
//               flex:0.10,
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
//                 flex:1,
//               }}
//             >
//               <Text
//                 style={{
//                 fontSize:17,
//                 color:'red'
//               }}
//               >Child's Age
//               </Text>
//             </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//               <ModalPicker
// 		            data={data3}
//                 //initValue="6"
// 		            onChange={(option)=>{ this.update_present_age(option)}}>
		                    
// 		            <TextInput
// 		                style={{borderWidth:1,
// 		                 borderColor:'#994d00',
// 		                  padding:10,
// 		                   height:40 ,
// 		                    width:90 ,
// 		                    color:'#000000',
// 		                    textShadowRadius:0,
// 		                    fontSize:17 
// 		                }}
// 		                editable={false}
// 		                //placeholder="     1 "
// 		                value={this.state.present_age} 
// 		            />
		                        
// 		       </ModalPicker>
//             </View>
//           </View>
//           <View
//             style={{flex:0.1}}
//           />
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
//               <Text
//                 style={{
//                 fontSize:17,
//                 color:'green'
//               }}
//               >College At Age
//               </Text>
//             </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//               <ModalPicker
// 		            data={data4}
// 		            //initValue="0"
// 		            onChange={(option)=>{ this.update_college_age(option)}}>
// 		            <TextInput
// 		                style={{
// 		                	borderWidth:1,
// 		                	 borderColor:'#994d00',
// 		                	  padding:10,
// 		                	   height:40 ,
// 		                	    width:90,
// 		                	    color:'#000000',
// 		                	    textShadowRadius:0,
// 		                	    fontSize:17 
// 		                	}}
// 		                editable={false}
// 		                value={this.state.college_age}
// 		            />
		                        
// 		       </ModalPicker>
//             </View>
//           </View>
//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.5,
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
//               style={{
//                 flex:2,
//                 flexDirection:'column',
//                 alignItems:'flex-start'
//               }}
//             >
//               <View
//               >
//                 <Text
//                   style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//                 >
//                 Duration of Education
//                 </Text>
//               </View>
//               <View>
//                 <Text
//                   style={{
//                     color:'green'
//                   }}
//                 >
//                   (in Years)
//                 </Text>
//               </View>
//             </View>
//             <View
//               style={{
//                 flex:1
//               }}
//             >
//             <ModalPicker
// 		        data={data5}
// 		       //initValue="0"
// 		        onChange={(option)=>{ this.update_education_period(option)}}>
// 		        <TextInput
// 		            style={{borderWidth:1,
// 		             borderColor:'#994d00',
// 		              padding:10,
// 		               height:40 ,
// 		                width:90,
// 		                color:'#000000',
// 		                textShadowRadius:0,
// 		                fontSize:17 
// 		            }}
// 		            editable={false}
// 		            // placeholder="    10"
// 		            value={this.state.education_period}
// 		        />
		                        
// 		    </ModalPicker>
              
//             </View>
//           </View>     

//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.5,
//                     flexDirection:'row',
//                     //backgroundColor:'#FFF8DC',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
//         	<View
        	
//         		style={{
//         			flex:2,
//               flexDirection:'column'
//         		}}
//         	>
//             <View
//               // style={{
//               //   flex:3
//               // }}
//             >
//               <Text
//                 style={{
//                     fontSize:17,
//                     color:'green'
//                   }}
//                 >
//                   Cost P.A. as on Today
//               </Text>
//             </View>
//             <View
//               style={{
//                 alignItems:'flex-start'
//               }}
//             >
//               <Text
//                 style={{
//                   color:'green',
//                 }}
//               >
//               (In Lakhs)
//             </Text>
//             </View>
//         	</View>
//         	<View
        	
//         		style={{
//         			flex:1,
//               flexDirection:'row'
//         		}}
//         	>
//              <View
//                 style={{
//                   flex:4.07,
//                 }}
//              >
//                <TextInput
//               style={{
//                 height:50,
//                 borderStyle:'dashed',
//                 borderColor:'black',
//                 borderWidth:1,
//               }}
//               keyboardType='numeric'
//               value={this.state.today_cost}
//               onChangeText={(value)=>this.update_today_cost(value)}
//             >

//             </TextInput>
//              </View>
//             <View
//               style={{
//                 flex:1,
//               }}
//             >
//                 <Text>  </Text>
//             </View>
//         	</View>
//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.5,
//                     flexDirection:'row',
//                     //backgroundColor:'#FAFAD2',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,
//             }}
//         >
//         	<View
//         		style={{
//         			flex:8,
//         		}}
//         	>
//         		<View>
//               <Text
//                 style={{
//                       fontSize:17,
//                       color:'green'
//                     }}
//                 >
//                 Expected Inflation Rate
//               </Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 % per Year
//               </Text>
//             </View>
//         	</View>

//         	<View
//         		style={{
//         			flex:4,
//         		}}
//         	>
//             <ModalPicker
//             data={data01}
//             //initValue="0"
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
//         	</View>
//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.5,
//                     flexDirection:'row',
//                     //backgroundColor:'#FAFAD2',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,
//             }}
//         >
//         	<View
//             style={{
//               flex:2,
//             }}
//           >
//             <View>
//               <Text
//                 style={{
//                       fontSize:17,
//                       color:'green'
//                     }}
//                 >
//                 Expected Return Rate
//               </Text>
//             </View>
//             <View>
//               <Text
//                 style={{
//                   color:'green'
//                 }}
//               >
//                 % per Year
//               </Text>
//             </View>
//           </View>

//         	<View
//         		style={{
//         			flex:1,
//         		}}
//         	>
//         		<ModalPicker
//             data={data01}
//             //initValue="0"
//             onChange={(option)=>{ this.update_sip_rate(option)}}>
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
//                 value={this.state.sip_rate}
//             />
                            
//         </ModalPicker>

//         	</View>
//         </View>
//         <View style={{
//                     width:width-20,
//                     flex:0.5,
//                     //backgroundColor:'#FFA500',
//                     alignItems:'center',
//                     // borderStyle:'dashed',
//                     // borderColor:'black',
//                     // borderWidth:1,

//             }}
//         >
// 	        <View style={stylesbutton.container}>
// 		        <TouchableHighlight
// 		          onPress={
// 		          	()=> navigate('education_result',{
// 		          								   a:this.state.present_age,
// 						                           b:this.state.college_age,                     
// 						                           c:this.state.education_period,                     
// 						                           d:this.state.today_cost,                   
// 						                           e:this.state.inflation_rate,                     
// 						                           f:this.state.sip_rate, 	
// 		          	})
// 		          }
// 		          activeOpacity={1}
// 		          style={ this.state.pressStatus ? stylesbutton.buttonPress : stylesbutton.button }
// 		          onHideUnderlay={this._onHideUnderlay.bind(this)}
// 		          onShowUnderlay={this._onShowUnderlay.bind(this)}
// 		        >
// 		          <Text style={ 
//                 this.state.pressStatus ? stylesbutton.welcomePress : stylesbutton.welcome
//               }>Calculate</Text>
// 		        </TouchableHighlight>
// 	      	</View>
//         </View>
//       </View>
//       </ScrollView>
//       )
//   }
// }

export class Education extends React.Component{
  static navigationOptions = {
    title: 'Education Calculator',
  };
  constructor(props){
    super(props);
    this.state={
      pressStatus: false,
      present_age:6,
      college_age:18,
      education_period:4,
      today_cost:2,
      sip_rate:12,
      inflation_rate:7,
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
  update_college_age(data){
    this.setState({
      college_age:data.label,
    });
  }
  update_education_period(data){
    this.setState({
      education_period:data.label,
    });
  }
  update_inflation_rate(data){
    this.setState({
      inflation_rate:data.label,
    });
  }
  update_sip_rate(data){
    this.setState({
      sip_rate:data.label,
    });
  }
  update_today_cost(data){
    this.setState({
      today_cost:data,
    })
  }
  

  render (){
    var data01=[];
    var data02=[];
    var data3=[];
    var data4=[];
    var data5=[];
    var data6=[];
    for(let i=0;i<=12;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data01.push(object);
    }
    for(let i=1;i<=15;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data02.push(object);
    }
    for(let i=0;i<=18;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data3.push(object);
    }
    for(let i=15;i<=25;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data4.push(object);
    }
    for(let i=1;i<=10;++i)
    {
      let object ={};
      object["key"]=i;
      object["label"]=""+i+"";
      data5.push(object);
    }
     const { navigate } = this.props.navigation;
    return (
      <ScrollView style ={{backgroundColor:'#ffffff',padding:5}}>
      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Current Age</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data3}
                        onChange={(option)=>{ this.update_present_age(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       6"
                            value={this.state.present_age} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>College at Age</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data4}
                        onChange={(option)=>{ this.update_retirement_age(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       18"
                            value={this.state.college_age} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Education Duration</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data5}
                        onChange={(option)=>{ this.update_education_period(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       4"
                            value={this.state.education_period} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',padding:20}}>
      
        <View style = {{flex:6,backgroundColor:'#d9d9d9',height:60,borderRadius:5,width:70}}>
              <Text style = {styles.view}>Cost Incurred As of Today</Text>
                                <Text style={{textAlign:'center'}}>( In Rs. )</Text>
        </View>
        <View style ={{flex:6,alignItems:'center',justifyContent:'center'}}>
          <View style={{width:90,height:40,backgroundColor:'#ffffff'}}>   
            <TextInput 
            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90,color:'#000000',textShadowRadius:0,fontSize:17,textAlign:'center'}}
            underlineColorAndroid='white'
            keyboardType='numeric'
            placeholder = "2,00,000"
            editable = {true}
            value = {this.state.today_cost}
            onChangeText={(value)=>this.update_today_cost(value)}
            />
          </View>
        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Return Rate</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data01}
                        onChange={(option)=>{ this.update_sip_rate(option)}}>
                        
                        <TextInput
                            style={{borderWidth:1, borderColor:'#d9d9d9', padding:10, height:40 , width:90 ,color:'#000000',textShadowRadius:0,fontSize:17}}
                            editable={false}
                            placeholder="       12"
                            value={this.state.sip_rate} />
                            
                    </ModalPicker>
          </View>

        </View>
      </View>

      <View style = {{flexDirection:'row',alignItems:'center',justifyContent:'center',padding:20}}>
        <View style = {{flex:10,width:150,height:60,alignItems:'center',justifyContent:'center',backgroundColor:'#d9d9d9',borderRadius:5}}>
          <Text style = {styles.view}>Inflation Rate</Text>
          <Text>( In Years )</Text>
        </View>
        <View style ={{flex:10,width:200,alignItems:'center',justifyContent:'flex-start'}}>
          <View style={{flex:1, alignItems:'center',justifyContent:'center'}}>
                    <ModalPicker
                        data={data01}
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

      <View style={{alignItems:'center',justifyContent:'flex-start',padding:28}}>
          <View style = {{width:120}}>
            <Button 
            onPress={
                ()=> navigate('education_result',{
                                        a:this.state.present_age,
                                       b:this.state.college_age,                     
                                       c:this.state.education_period,                     
                                       d:this.state.today_cost,                   
                                       e:this.state.inflation_rate,                     
                                       f:this.state.sip_rate,
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