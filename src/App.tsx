import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React, {useState} from 'react'
import Snackbar from 'react-native-snackbar';
import { currencyByRupee } from './constants'
import CurrencyButton from './components/CurrencyButton'

export default function App() {

  const [inputValue, setInputValue] = useState('')
  const [returnValue, setReturnValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const buttonPressed = (targetValue:Currency) =>{
      if(!inputValue){
        return Snackbar.show({
          text:'Enter a Value to Convert',
          backgroundColor:'grey',
          textColor:'white'
        })
      }

      const inputAmount = parseFloat(inputValue)
      if(!isNaN(inputAmount)){
        const convertedValue = inputAmount * targetValue.value
        const result = `${targetValue.symbol} ${convertedValue.toFixed(2)}`
        setReturnValue(result)
        setTargetCurrency(targetValue.name)
      }else{
        return Snackbar.show({
          text:'Not a number to convert',
          backgroundColor:'grey',
          textColor:'white'
        })
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>  
        <Text style={styles.rupee}>₹</Text>
        <View>
          <TextInput
          style={styles.txt}
          maxLength={10}
          keyboardType='number-pad'
          value={inputValue}
          onChangeText={setInputValue}
          placeholder='Enter amount in Rupees'
          />
          {returnValue && (
            <Text style={styles.resultTxt} >
              {returnValue}
            </Text>
          )}
        </View>
      </View>
    <View style={styles.bottomContainer}>
        <FlatList
        data={currencyByRupee}
        keyExtractor={item => item.name}
        numColumns={3}
        renderItem={({item}) =>(
          <Pressable style={[styles.button]} onPress={()=>buttonPressed(item)}>
            <CurrencyButton {...item}/>
          </Pressable>
        )
        }
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#777',
  },
  txt:{
    color:'white'
  },
  topContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '800',
  },
  rupee: {
    marginRight: 8,
    fontSize: 22,
    color: '#ffffff',
    fontWeight: '800',
  },
  rupeesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputAmountField: {
    height: 40,
    width: 200,
    padding: 8,
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: '#FFFFFF',
  },
  bottomContainer: {
    flex: 3,
  },
  button: {
    flex: 1,
    margin: 12,
    height: 'auto',
    borderRadius: 12,
    backgroundColor: '#fff',
    elevation: 2,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#333',
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  selected: {
    backgroundColor: '#ffeaa7',
  },
})