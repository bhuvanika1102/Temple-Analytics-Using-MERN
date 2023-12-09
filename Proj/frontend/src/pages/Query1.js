import React, { useState } from 'react';
import { Form,  DatePicker, Button,  Input } from 'antd';
// import { Link } from 'react-router-dom';
import '../styles/Query1.css';


const Query2 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const handleQuerySubmit = async (values) => {
    try {
      const response = await fetch(`/api/query1?startDate=${values.d_start_date.format('YYYY')}&endDate=${values.d_end_date.format('YYYY')}&d_deity=${values.d_deity}`);
      // const response = await fetch(`/api/query1?startDate=${values.d_start_date}&endDate=${values.d_end_date}&d_deity=${values.d_deity}`);

      const data = await response.json();
      setQueryResult(data);
    } catch (error) {
      console.error(error);
    }
    
  };

  return (
    <div className="query2-container">
       <div className="left-background"></div>
      <div className="query4-sub">
        <h2>Query 1:Between 2years ,State-wise ,Deity-wise Total Revenue and Gold</h2>
        <Form form={form} onFinish={handleQuerySubmit} initialValues={{ k: 5 }}>
          <Form.Item name="d_start_date" label="Enter the Start Year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          {/* <Input/> */}
          </Form.Item>
          <Form.Item name="d_end_date" label="Enter the End year">
          <DatePicker picker="year" style={{ width: '100%' }} />
          {/* <Input/> */}
          </Form.Item>
          <Form.Item name="d_deity" label="Enter deity name">
          <Input/>
          </Form.Item>
          
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
        {queryResult.length > 0 && (
          <div className="query-result">
            {/* <h3>Query Result:</h3> */}
            <table>
              <thead>
                <tr>
                  {/* <th>From</th>
                  <th>To</th> */}
                  <th>State</th>
                  <th>Deity</th>
                  <th>Revenue</th>
                  <th>Gold</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                         {/* <td>{resultItem.year}</td>
                        <td>{resultItem.eYear}</td> */}
                    <td>{resultItem.state}</td>
                    <td>{resultItem.deity}</td>
                    <td>{resultItem.count}</td>
                    <td>{resultItem.count1}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default Query2;

