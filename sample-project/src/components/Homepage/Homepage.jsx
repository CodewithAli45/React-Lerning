import React from 'react';
// import {Link} from 'react-router-dom'
import {Button, Input, DatePicker, Form} from 'antd';
import './Homepage.css'
import axios from 'axios'
import { useState } from 'react';

export function Homepage() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState(null);
  const [data, setData] = useState(null);

  const handleDate = () => {
    console.log("date is", date);
    const response = axios.get(
      `https://content.newtonschool.co/v1/pr/63b70222af4f30335b4b3b9a/buses?source=${source}&destination=${destination}&date=${date}`
    );
  }

  return (
    <div className='form-container'>
      <Form className='form-wrapper'>
        <div>
          <label htmlFor="from">From</label>
          <Form.Item
          id='from'
          name="from"
          rules={[
            {
              message: 'Please enter source!',
            },
          ]}>
            <Input value={source} onChange={(e) => setSource(e.target.value)} />
          </Form.Item>
        </div>
        <div>
          <label htmlFor="to">To</label>
          <Form.Item
          id='to'
          name="to"
          rules={[
            {
              message: 'Please enter destination!',
            },
          ]}>
            <Input value={destination}  onChange={(e) => setDestination(e.target.value) }/>
          </Form.Item>
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <Form.Item
          id='date'
          rules={[
            {
              message: 'Please select date!',
            },
          ]}>
            <DatePicker />
          </Form.Item>
        </div>
        <div>
          <Form.Item>
            <Button 
            type='primary' danger
            onClick={handleDate}>
              Search Bus
            </Button>
          </Form.Item>
        </div>
      </Form>
    </div>
  )
}
