import React, { useState } from 'react';
import { Form,   Button, Input } from 'antd';
// import { Link } from 'react-router-dom';
import '../styles/Query1.css';


const Query3 = () => {
  const [form] = Form.useForm();
  const [queryResult, setQueryResult] = useState([]);

  const handleQuerySubmit = async (values) => {
    try {
      const response = await fetch(`/api/query2?d_state=${values.d_state}&d_deity=${values.d_deity}`);
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
        <h2>Query 2: State-wise, Deity-Wise ,Temple count</h2>
        <Form form={form} onFinish={handleQuerySubmit} initialValues={{ k: 5 }}>
          {/* <Form.Item name="d_state" label="Enter the state">
          <Select style={{ width: '100%' }}>
            <Option value="Tamil Nadu">Tamil Nadu</Option>
      <Option value="Kerala">Kerala</Option>
      <Option value="Andhra Pradesh">Andhra Pradesh</Option>
      <Option value="Karnataka">Karnataka</Option>
      <Option value="Pondicherry">Pondicherry</Option>
      <Option value="Other">Other</Option>
      
            </Select>

          </Form.Item> */}
          <Form.Item name="d_deity" label="Enter the deity">
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
                  <th>Temple Count</th>
                </tr>
              </thead>
              <tbody>
                {queryResult.map((resultItem, index) => (
                  <tr key={index}>
                         {/* <td>{resultItem.year}</td>
                        <td>{resultItem.eYear}</td> */}
                    <td>{resultItem.state}</td>
                    <td>{resultItem.deity}</td>
                    <td>{resultItem.totaltemples}</td>
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

export default Query3;