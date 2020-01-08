import React, { useState } from 'react';
import moment from "moment";
import logo from './logo.svg';
import './App.css';

const useInput = (defaultValue: string) => {
  const [value, setValue] = useState(defaultValue);
  const defaultTime = moment();
  const [mValue, mSetValue] = useState({
    unixtime: defaultTime.valueOf(),
    slash: defaultTime.format("YYYY/MM/DD HH:mm:ss"),
    heifun: defaultTime.format("YYYY-MM-DD HH:mm:ss")
  });

  function handleInputToTimeFormats(e: moment.MomentInput) {
    let current = moment(+e);
    if (current.valueOf() === NaN) {
      current = moment(e)
    }
    return mSetValue({
      unixtime: current.valueOf(),
      slash: current.format("YYYY/MM/DD HH:mm:ss"),
      heifun: current.format("YYYY-MM-DD HH:mm:ss")
    })
  }

  function onChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    setValue(e.target.value);
    handleInputToTimeFormats(value);
  }

  return { mValue, value, onChange }
}

const App: React.FC = () => {
  const { mValue, value, onChange } = useInput("")
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <input type="text" name="name" id="" value={value} onInput={onChange} />
        <div>unix: {mValue.unixtime}</div>
        <div>slash: {mValue.slash}</div>
        <div>heifun: {mValue.heifun}</div>
        <div>current: {moment().valueOf()}</div>
      </header>
    </div>
  );
}

export default App;
