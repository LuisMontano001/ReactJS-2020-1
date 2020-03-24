import React from 'react'
import style from './Coin.module.css'

const Coin=(coin)=> {
  return (
    <div className={style.CoinStatus}>
        <div className={style.CoinName}><h3>{coin.coin[0]}</h3></div>
        <div className={style.CoinDescription}><h3>{coin.coin[1]}</h3></div>
        <div className={style.Price}><h3 >{coin.coin[2]}</h3></div>
        <div className={style.Price}><h3 >{coin.coin[3]}</h3></div>
    </div>
  );
}
export default Coin;
