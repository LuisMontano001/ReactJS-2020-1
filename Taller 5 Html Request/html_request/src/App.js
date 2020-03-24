import React from 'react';
import Coin from './Components/Coin'
import './App.css';
import style from './Components/Coin.module.css'
import { useState,useEffect } from 'react';
import axios from 'axios'
const App=()=> {
  const url="https://min-api.cryptocompare.com/data/"
  const apiKey="fd1acbc6b0b09a31404c7e0e2dc17ececc4181384e27dc85a7800e78fb461d4b"
  const [Coins,setCoins]=useState([
    ["BTC","Bitcoin","",""],
    ["ETH","Ethereum","",""],
    ["BCH","Bitcoin Cash","",""],
    ["XRP","XRP","",""],
    ["EOS","EOS","",""],
    ["TRX","TRON","",""],
    ["LTC","Litecoin","",""],
    ["ETC","Ethereum Classic","",""],
    ["BNB","Binance Coin","",""],
    ["MOF","Molecular Future","",""],
    ["BSV","Bitcoin SV","",""]
  ])

  const callGet =()=>{
    
    var fsyms=""
    for (let i =0;i<Coins.length-1;i++){
      fsyms+=Coins[i][0]+","
    }
    fsyms+=Coins[Coins.length-1][0]
    
    var tsyms="USD,COP"
    axios.get(url+'pricemulti?api_key='+apiKey+'&fsyms='+fsyms+'&tsyms='+tsyms).then(response=>{
      var newCoins=Coins
      let i=0
      for (let key in response.data){
        newCoins[i][2]=response.data[key].USD
        newCoins[i][3]=response.data[key].COP
        i++;
      }
      setCoins([...newCoins])
    })
  }  

  return (
    <div className="App">
      <button  onClick={()=>callGet() } >Refresh Coins</button>
      <div className={style.CoinHeader}>
        <div className={style.CoinName}><h3>Simbol</h3></div>
        <div className={style.CoinDescription}><h3>Description</h3></div>
        <div className={style.Price}><h3 >Dollars</h3></div>
        <div className={style.Price}><h3 >Pesos</h3></div>
      </div>
      {Coins.map((coin,index) => <Coin key={index} coin={coin}/>)}    
    </div>
  );
}
export default App;
