import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';

export default class App extends Component{

  constructor(props){
    super(props)
    this.state = {altura:0, Massa:0, resultado: 0, resultadoText:""}
    this.calcular = this.calcular.bind(this)
  }

calcular(){

  let imc = this.state.massa/ (this.state.altura * this.state.altura)
  
  let s = this.state
  s.resultado = imc
  this.setState(s) 

  // < 16 magreza grave
  //16 a < 17 magreza moderada
  // 18,5 a < 25 saudavel
  //25 a < 30 sobrepeso
  //30 a < 35 obesidade grau I 
  //35 a < 40 obesidade grau II (severa)
  // > 40 obesidade grau III (mórbida) 
  // > 1 Invalído

  if(s.resultado >0){
s.resultadoText = "invalido"
  } else if(s.resultado <16){
    s.resultadoText = "magreza grave"
  } else if(s.resultado <17){
    s.resultadoText = "magreza moderada"
  } else if(s.resultado <18.5){
    s.resultadoText = "saudavel"
  } else if(s.resultado <25){
    s.resultadoText = "sobrepeso"
  } else if(s.resultado <30){
    s.resultadoText = "obesidade grau I"
  } else if(s.resultado <35){
    s.resultadoText = "obesidade grau II (severa)"
  } else if(s.resultado > 40){
    s.resultadoText = "obesidade grau III (mórbida)"
 
  }

  this.setState(s)

}


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.entradas}>
             <TextInput placeholder="Altura" keyboardType="numeric" style={styles.input} onChangeText={(altura)=>{this.setState({altura})}}/>
              <TextInput placeholder="Massa" keyboardType="numeric" style={styles.input} onChangeText={(massa)=>{this.setState({massa})}}/>
         </View>
          <TouchableOpacity style={styles.button} onPress={this.calcular}><Text style={styles.buttonText}>Calcular</Text></TouchableOpacity>
          <Text style={styles.resultado}>{this.state.resultado.toFixed(2)}</Text>
            <Text style={[styles.resultado, {fontSize:35} ]}>{this.state.resultadoText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    
    backgroundColor: '#F5FCFF',
  },
  entradas:{
    flexDirection: 'row'
  },
  input:{
     height:80,
     textAlign:"center",
     width:"50%",
     fontSize:50,
     marginTop:24,

  },
  buttonText:{
    alignSelf:"center",
    padding: 30,
    fontSize: 25,
    color: "#6dc4a4",
    fontWeight: 'bold'
  },
  resultado:{
    alignSelf: 'center',
    fontSize: 65,
    padding: 15,
  }

});
