import React, { Component } from 'react';
import {  StyleSheet, 
          Text,
          View,
          FlatList,
          TextInput,
          Button
} from 'react-native';

type Props = {};
export default class App extends Component<Props>{

  constructor(props){
    super(props)
    this.state = {
      text:"",
      itens: [
        
      ]
    }

    this.inserirItem = this.inserirItem.bind(this)
  }

  renderItem(obj){
    return(
    <Text style={styles.cell}>{obj.item.desc}</Text>
    )
  }

  inserirItem(){
    let newItem = {
      key: this.state.itens.length.toString(),
      desc: this.state.text,
      done: false
    }

    let itens = this.state.itens;

    itens.push(newItem)
    this.setState({itens})

    let text = ""
    this.setState({text})

  }

  render(){
    return (
      <View style={styles.container}>
        <FlatList style={styles.list} data={this.state.itens} renderItem={this.renderItem} extraData={this.state}/>
        <View style={styles.inputView}>
          <TextInput style={styles.input} onChangeText={(text=>{this.setState({text})})} value={this.state.text}></TextInput>
          <Button style={styles.botao} onPress={this.inserirItem} title="Adicionar"></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    justifyContent: "center"
  },

  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },

  list:{
    fontWeight: "bold",
  },

  cell:{
    padding: 10,
    backgroundColor: "#c1c1c1",
    marginTop: 10,
    fontSize: 18,
    color: "#fff"
  },

  input:{
    backgroundColor: "#fff",
    borderColor: "#ccc",
    borderWidth: 2,
    padding: 10,
    margin: 20,
    borderRadius: 50,
    flex: 1,
  },

  inputView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  botao:{
    margin: 50,
    backgroundColor: '#000'
  }
})