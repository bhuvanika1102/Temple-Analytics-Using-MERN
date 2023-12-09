import '../styles/TempleForm.css';
import React from 'react';
import axios from 'axios';
import { Cascader, Form, Input,DatePicker, Select,Button  } from 'antd';

//const { Option } = Select;
const { Option } = Select;
const options = [
  {
    value: 'Ariyalur',
    label: 'Ariyalur',
  },
  {
    value: 'Chennai',
    label: 'Chennai',
  },
  {
    value: 'Coimbatore',
    label: 'Coimbatore',
  },
  {
    value: 'Cuddalore',
    label: 'Cuddalore',
  },
  {
    value: 'Dharmapuri',
    label: 'Dharmapuri',
  },
  {
    value: 'Dindigul',
    label: 'Dindigul',
  },
  {
    value: 'Erode',
    label: 'Erode',
  },
  {
    value: 'Kallakurichi',
    label: 'Kallakurichi',
  },
  {
    value: 'Kanchipuram',
    label: 'Kanchipuram',
  },
  {
    value: 'Kanyakumari',
    label: 'Kanyakumari',
  },
  {
    value: 'Karur',
    label: 'Karur',
  },
  {
    value: 'Krishnagiri',
    label: 'Krishnagiri',
  },
  {
    value: 'Madurai',
    label: 'Madurai',
  },
  {
    value: 'Nagapattinam',
    label: 'Nagapattinam',
  },
  {
    value: 'Namakkal',
    label: 'Namakkal',
  },
  {
    value: 'Nilgiris',
    label: 'Nilgiris',
  },
  {
    value: 'Perambalur',
    label: 'Perambalur',
  },
  {
    value: 'Pudukkottai',
    label: 'Pudukkottai',
  },
  {
    value: 'Ramanathapuram',
    label: 'Ramanathapuram',
  },
  {
    value: 'Rameswaram',
    label: 'Rameswaram',
  },
  {
    value: 'Salem',
    label: 'Salem',
  },
  {
    value: 'Sivaganga',
    label: 'Sivaganga',
  },
  {
    value: 'Tenkasi',
    label: 'Tenkasi',
  },
  {
    value: 'Thanjavur',
    label: 'Thanjavur',
  },
  {
    value: 'Theni',
    label: 'Theni',
  },
  {
    value: 'Thoothukudi',
    label: 'Thoothukudi',
  },
  {
    value: 'Tiruchirappalli',
    label: 'Tiruchirappalli',
  },
  {
    value: 'Tirunelveli',
    label: 'Tirunelveli',
  },
  {
    value: 'Tirupathur',
    label: 'Tirupathur',
  },
  {
    value: 'Tiruppur',
    label: 'Tiruppur',
  },
  {
    value: 'Tiruvallur',
    label: 'Tiruvallur',
  },
  {
    value: 'Tiruvannamalai',
    label: 'Tiruvannamalai',
  },
  {
    value: 'Tiruvarur',
    label: 'Tiruvarur',
  },
  {
    value: 'Vellore',
    label: 'Vellore',
  },
  {
    value: 'Viluppuram',
    label: 'Viluppuram',
  },
  {
    value: 'Virudhunagar',
    label: 'Virudhunagar',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

const options1 = [
  {
    value: 'Andaman and Nicobar Islands',
    label: 'Andaman and Nicobar Islands',
  },
  {
    value: 'Andhra Pradesh',
    label: 'Andhra Pradesh',
  },
  {
    value: 'Arunachal Pradesh',
    label: 'Arunachal Pradesh',
  },
  {
    value: 'Assam',
    label: 'Assam',
  },
  {
    value: 'Bihar',
    label: 'Bihar',
  },
  {
    value: 'Chandigarh',
    label: 'Chandigarh',
  },
  {
    value: 'Chhattisgarh',
    label: 'Chhattisgarh',
  },
  {
    value: 'Dadra and Nagar Haveli',
    label: 'Dadra and Nagar Haveli',
  },
  {
    value: 'Daman and Diu',
    label: 'Daman and Diu',
  },
  {
    value: 'Delhi',
    label: 'Delhi',
  },
  {
    value: 'Goa',
    label: 'Goa',
  },
  {
    value: 'Gujarat',
    label: 'Gujarat',
  },
  {
    value: 'Haryana',
    label: 'Haryana',
  },
  {
    value: 'Himachal Pradesh',
    label: 'Himachal Pradesh',
  },
  {
    value: 'Jammu and Kashmir',
    label: 'Jammu and Kashmir',
  },
  {
    value: 'Jharkhand',
    label: 'Jharkhand',
  },
  {
    value: 'Karnataka',
    label: 'Karnataka',
  },
  {
    value: 'Kerala',
    label: 'Kerala',
  },
  {
    value: 'Lakshadweep',
    label: 'Lakshadweep',
  },
  {
    value: 'Madhya Pradesh',
    label: 'Madhya Pradesh',
  },
  {
    value: 'Maharashtra',
    label: 'Maharashtra',
  },
  {
    value: 'Manipur',
    label: 'Manipur',
  },
  {
    value: 'Meghalaya',
    label: 'Meghalaya',
  },
  {
    value: 'Mizoram',
    label: 'Mizoram',
  },
  {
    value: 'Nagaland',
    label: 'Nagaland',
  },
  {
    value: 'Odisha',
    label: 'Odisha',
  },
  {
    value: 'Puducherry',
    label: 'Puducherry',
  },
  {
    value: 'Punjab',
    label: 'Punjab',
  },
  {
    value: 'Rajasthan',
    label: 'Rajasthan',
  },
  {
    value: 'Sikkim',
    label: 'Sikkim',
  },
  {
    value: 'Tamil Nadu',
    label: 'Tamil Nadu',
  },
  {
    value: 'Telangana',
    label: 'Telangana',
  },
  {
    value: 'Tripura',
    label: 'Tripura',
  },
  {
    value: 'Uttar Pradesh',
    label: 'Uttar Pradesh',
  },
  {
    value: 'Uttarakhand',
    label: 'Uttarakhand',
  },
  {
    value: 'West Bengal',
    label: 'West Bengal',
  },
  {
    value: 'Other',
    label: 'Other',
  },
];

  const era = [
    {
      value: 'Chera',
      label: 'Chera'
    },
    {
      value: 'Chola',
      label: 'Chola'
    },
    {
      value: 'Pandya',
      label: 'Pandya'
    },
    ];
    const category = [
      {
        value: 'Small Size',
        label: 'Small Size'
      },
      {
        value: 'Midsize',
        label: 'Midsize'
      },
      {
        value: 'Large Size',
        label: 'Large Size'
      },
      ];
  
  
export default function Home() {
  const [form] = Form.useForm();

  const handleSubmit = async (values) => {
    try {
      alert('temple Form data submitted successfully');
      await axios.post('/api/register', values);
    } catch (error) {
      console.log(error);
    }
  };

  const handleCascaderChange = (field, value) => {
    const joinedValue = value.join(', ');
    form.setFieldsValue({ [field]: joinedValue });
  };

  return (
    <div className="App">
      <h2> REGISTRATION</h2>
      <Form form={form} onFinish={handleSubmit}>
        
            <Form.Item
              name="d_templename"
              label="Temple Name"
              rules={[
                {
                  required: true,
                  message: 'Please enter temple name',
                },
              ]}
            >
              <Input />
            </Form.Item>
          
         
            <Form.Item
              name="d_deity"
              label="      Deity"
              rules={[
                {
                  required: true,
                  message: 'Please enter deity',
                },
              ]}
            >
              <Input />
            </Form.Item>
          

        
            <Form.Item
              name="d_district"
              label="District"
              rules={[
                {
                  required: true,
                  message: 'Please select a District',
                },
              ]}
              
            >
            <Cascader options={options} placeholder="Please select" />              
            </Form.Item>
        

          
            <Form.Item
              name="d_state"
              label="State"
              rules={[
                {
                  required: true,
                  message: 'Please select a State',
                },
              ]}
              
            >
            <Cascader options={options1} placeholder="Please select" />
            </Form.Item>
              
        


          
            <Form.Item
              name="d_pincode"
              label="Pincode"
              rules={[
                {
                  required: true,
                  message: 'Please enter pincode',
                },
              ]}
              
            >    
             <Input type="text" />
            </Form.Item>
          


         
            <Form.Item
              name="d_era"
              label="Era"
              rules={[
                {
                  required: true,
                  message: 'Please select a Era',
                },
              ]}
              
            >
            <Cascader options={era} placeholder="Please select" />

              
            </Form.Item>
          



          
            <Form.Item
              name="d_category"
              label="Category"
              rules={[
                {
                  required: true,
                  message: 'Please select a category',
                },
              ]}
              
            >
            <Cascader options={category} placeholder="Please select" />

              
            </Form.Item>
            
            <Form.Item
              name="d_count"
              label="People Visited"
              rules={[
                {
                  required: true,
                  message: 'Please enter devotee count',
                },
              ]}
            >
              <Input type="number" min={1} />
            </Form.Item>
          
            <Form.Item
              name="d_year_of_built"
              label="Year of Built"
              rules={[
                {
                  required: true,
                  message: 'Please select a year',
                },
              ]}
            >
             <Form.Item name="d_year_of_built" >
            <DatePicker picker="year" style={{ width: '100%' }} />
            {/* <Input/> */}
          </Form.Item>
            </Form.Item>
       

            <Form.Item
              name="d_revenue"
              label="Revenue"
              rules={[
                {
                  required: true,
                  message: 'Please enter amount',
                },
              ]}
            >
              <Input type="number" min={100} />
            </Form.Item>

            <Form.Item
              name="d_gold"
              label="Gold Deposit(in kgs)"
              rules={[
                {
                  required: true,
                  message: 'Please enter gold deposit',
                },
              ]}
            >
              <Input type="number" step="0.01" />
            </Form.Item>
          

     
            <Form.Item
              name="d_opening_time"
              label="Opening Time"
              rules={[
                {
                  required: true,
                  message: 'Please select a Opening time',
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
        

       
            <Form.Item
              name="d_closing_time"
              label="Closing Time"
              rules={[
                {
                  required: true,
                  message: 'Please select an closing time',
                },
              ]}
            >
              <Input type="time" />
            </Form.Item>
          
            <Form.Item
              name="d_email"
              label="Email"
              rules={[
                {
                  required: true,
                  message: 'Please enter email id',
                },
              ]}
            >
              <Input type="email" />
            </Form.Item>
          
            <Form.Item
              name="d_description"
              label="Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter description',
                },
              ]}
              
            >
                <Input type="text" />
                </Form.Item>
         
               


              
            
             
             
          <br/>

<br/>
        <Button className='button' type="primary" htmlType="submit">
            
          Register
          
        </Button>
      </Form>
    </div>
  );
}

