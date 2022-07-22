import React, { useState } from 'react';
import { Form } from 'antd';
import Ruler from './components/ruler';
import RulerInput from './container/RulerInput';
import logo from './assets/logo.svg';
import 'antd/dist/antd.css';

const FormItem = Form.Item;

const App = () => {
  const [form] = Form.useForm();
  const [value, setValue] = useState(1);

  const handleDragChange = (value) => {
    console.log(value)
    setValue(value);
  }
  const data = [{index:0, title:"00:00"},
                {index:1, title:"01:00"},
                {index:2, title:"02:00"},
                {index:3, title:"03:00"},
                {index:4, title:"04:00"},
                {index:5, title:"05:00"},
                {index:6, title:"06:00"},
                {index:7, title:"07:00"},
                {index:8, title:"08:00"},
                {index:9, title:"09:00"},
                {index:10, title:"10:00"},
                {index:11, title:"11:00"},
                {index:12, title:"12:00"},
                {index:13, title:"13:00"},
                {index:14, title:"14:00"},
                {index:15, title:"15:00"},
                {index:16, title:"16:00"},
                {index:17, title:"17:00"},
                {index:18, title:"18:00"},
                {index:19, title:"19:00"},
                {index:20, title:"20:00"},
                {index:21, title:"21:00"},
                {index:22, title:"22:00"},
                {index:23, title:"23:00"}]


  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Ruler Component</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="content">
          <h3>普通用法</h3>
          <div className="custom-ruler">
            <Ruler
                value={value}
                onChange={handleDragChange}
                start={0}
                end={23}
                step={10}
                className="ruler"
                data={data}
            />
          </div>
          <div className="form-ruler">
            <h3>与antd的Form结合使用</h3>
            <Form>
              <FormItem name={'score'} rules={[{ type: 'number' }]} initialValue={13}>
                  <Ruler
                      start={10}
                      end={19}
                      step={1}
                  />
                  <div style={{borod:1}}></div>
              </FormItem>
            </Form>
          </div>
        </div>
      </div>
  );
}

export default App;
