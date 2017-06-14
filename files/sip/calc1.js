'use strict'
import React, { Component } from 'react';
import { Text , View ,Image,StyleSheet ,TextInput ,Button, ScrollView,AppRegistry} from 'react-native';
import { WheelPicker } from 'react-native-wheel-picker-android';
import { SmoothLine } from 'react-native-pathjs-charts';
import { StackNavigator } from 'react-navigation';
//const Item = Picker.Item;

export  class screen2 extends Component{
	static navigationOptions = {
		title:'welcome',
	};
	render(){
		return (
			<View>
				<Text>hash</Text>
			</View>
			);
	}
}

export default class sip extends Component{
	
	static navigationOptions = {
    		title: 'Welcome',
	};
	constructor(props){
		super(props);
		this.state = {
			invest:1000,
			month:1,
			ror:0,
			result:0,
			anything:0,
			pickm:0,
			wheel:1,
		}
	}
	change(value){
		this.setState({
			invest:value,	
			anything:(++this.state.anything)
		});


	}

	change1(value){
	this.setState({
			month:value,
			anything:(++this.state.anything)
	});
	}

	change2(value){
		this.setState({
			ror:value,
			anything:(++this.state.anything)	
		});	
	}

	change3(){
		let a = this.state.invest ;
		a = a<1000 ? 1000:a;
		let b = this.state.month ;
		let c = this.state.ror ; 
		let sum = 0;
		for(var i=1;i<=b;++i){
			sum+=(a*Math.pow((1+c/(12*100)),i));
		}
		sum=sum.toFixed(2);
		this.setState({
			result:sum
		});
	}
	pickr(value){
		this.setState({
			pickm:value
		});
	}
	ywheel(event){
		this.setState({
			month:event.data
		});
	}
	swheel(event){
		this.setState({
			invest:event.data
		});
	}
	rwheel(event){
		this.setState({
			ror:event.data
		});
	}

	 render(){
	 	const { navigate } =  this.props.navigation ;
	 	let ydata = [];
	 	for(let i =1;i<=30;++i)
	 	{
	 		ydata.push(i);
	 	}
	 	let sdata = [];
	 	for(let i=1000;i<=1000000;)
	 	{
	 		sdata.push(i);
	 		i+=500;
	 	}
	 	let rdata = [];
	 	for(let i =0;i<=30;++i)
	 	{
	 		rdata.push(i);
	 	}

	 	let cdata = [[{"x":1,"y":1},{"x":2,"y":2},{"x":3,"y":3}],[{"x":1,"y":2},{"x":2,"y":4},{"x":3,"y":6}]];
	 	let options = {
					    width: 200,
					    height: 200,
					    color: '#2980B9',
					    margin: {
					      top: 20,
					      left: 45,
					      bottom: 25,
					      right: 20
					    },
					    animate: {
					      type: 'delayed',
					      duration: 200
					    },
					    axisX: {
					      showAxis: true,
					      showLines: true,
					      showLabels: true,
					      showTicks: true,
					      zeroAxis: false,
					      orient: 'bottom',
					      label: {
					        fontFamily: 'Arial',
					        fontSize: 14,
					        fontWeight: true,
					        fill: '#34495E'
					      }
					    },
					    axisY: {
					      showAxis: true,
					      showLines: true,
					      showLabels: true,
					      showTicks: true,
					      zeroAxis: false,
					      orient: 'left',
					      label: {
					        fontFamily: 'Arial',
					        fontSize: 14,
					        fontWeight: true,
					        fill: '#34495E'
					      }
					    },
					 }

		return(
	<ScrollView>
	 <View style={{height:650,padding:5}}>
	 	<View style ={{flex:3,alignItems:'center',justifyContent:'center',backgroundColor:'#000080'}}>
			<Text style = {styles.bigblue} >SIP CALCULATOR </Text>
		</View>
		<View style={{flex:4,alignItems:'center',flexDirection:'row',backgroundColor:'#f2ffcc',padding:10}}>
			<View style = {{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#ccff99'}}>
				<View style = {{flex:2,backgroundColor:'#cce6ff'}}>
			        <Text style = {styles.view}>Monthly Savings(Rs.)</Text>
				</View>
				<View style ={{flex:1,alignItems:'center',justifyContent:'center'}}>
					<View style={{width:80,height:40,backgroundColor:'#ddccff'}}>		
						<TextInput 
						keyboardType='numeric'
						placeholder = '1000'
						editable = {true}
						value = {this.state.invest}
						onChangeText={(value)=>this.change(value)}
						/>
					</View>
				</View>
			</View>
		</View>
		<View style={{flex:10,flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#e6e6e6'}}>
			<View style = {{flex:1,flexDirection:'column',backgroundColor:'#ffe6ff',alignItems:'center',justifyContent:'center'}}>
				<View style = {{flex:5,backgroundColor:'#b3b3ff'}}>
					<Text style = {styles.view}>Investment Period (years)</Text>
				</View>
				<View style ={{flex:10,width:40,alignItems:'center',justifyContent:'center',backgroundColor:'#b3d9ff',padding:10}}>
					<WheelPicker
						onItemSelected = {(event)=>this.ywheel(event)}
						isCurved
						isCyclic
						isCurtain = {false}
						renderIndicator = {true}
						isAtmospheric = {true}
						visibleItemCount = {3}
						itemTextSize ={50}
						itemTextColor = {'#000000'}
						indicatorColor = {'#80d4ff'}
						data = {ydata}
						style = {{width:40,height:100}}
						/>
				</View>
			</View>
			<View style ={{flex:1,flexDirection:'column',backgroundColor:'#99ffe6',alignItems:'center',justifyContent:'center'}}>
				<View style = {{flex:5,backgroundColor:'#b3b3ff'}}>
					<Text style = {styles.view}>Expected Rate of Return(%)</Text>
				</View>
				<View style = {{flex:10,width:40,alignItems:'center',justifyContent:'center',backgroundColor:'#b3d9ff',padding:10}}> 
					<WheelPicker
						onItemSelected = {(event)=>this.rwheel(event)}
						isCurved
						isCyclic
						renderIndicator = {true}
						isAtmospheric = {true}
						visibleItemCount = {3}
						itemTextColor = {'#000000'}
						itemTextSize = {50}
						indicatorColor = {'#80d4ff'}
						data = {rdata}
						style = {{width:40,height:100}}
					/>
				</View>
			</View>

		</View>
		<View style={{flex:3,alignItems:'center',justifyContent:'center',backgroundColor:'#b3d9ff'}}>
			<View style = {{width:120,height:20}}>
				<Button 
				style = {{width:600}}
				onPress = {()=>this.change3()}
				title = "calculate SIP"
				color = 'green'
			/>
			</View>
		</View>

		<View style={styles.container}>
			<SmoothLine data={cdata} options={options} xKey='x' yKey='y' />
		</View>
		<View style = {{flex:4}}>
			<Text>go</Text>
			<Button
			 onPress = {() => navigate('chat')}
			 title = "ja yar"
			 />
		</View>

	 </View>
	</ScrollView>
		);
	}
}
const styles = StyleSheet.create({
	bigblue:{
		color:'#ffffff',
		fontWeight:'bold',
		fontSize:25,
		includeFontPadding:true,
		fontStyle:'normal',
		textShadowRadius:40
	},
	view:{
		color:'#1a1a1a',
		fontWeight:'bold',
		fontSize:16.3,
		alignItems:'center',
		justifyContent:'center',		
	},
	container: {
    flex: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7f7f7',
  },
});
const SimpleApp = StackNavigator({
  Home: { screen : sip },
  chat: { screen : screen2},
});
AppRegistry.registerComponent('calculator', () => SimpleApp);