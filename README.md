# 🛕 Temple Analytics System

A full-stack web application developed using the MERN stack to digitize and streamline temple management processes. This system provides powerful analytics features and a user-friendly interface to track temples, visitors, revenue, and donations in a secure and organized manner.

## 📌 Project Overview

The **Temple Analytics System** offers a centralized dashboard for religious institutions to:

- Manage temple data (name, location, deity, revenue, gold, visitor count)
- Perform analytics between two years on:
  - Revenue and gold collected
  - Number of temples (state-wise and deity-wise)
  - Number of visitors
- Register temples with detailed metadata
- Generate reports for better decision-making

## 🧩 Tech Stack

- **MongoDB** – NoSQL database to store temple information
- **Express.js** – Backend web framework for API services
- **React.js** – Frontend UI library for building user interfaces
- **Node.js** – Server environment for backend processing

## 🖥️ Features

- 📊 **State-wise and Deity-wise Analytics**
- 🔐 **Role-based access control (Admin/Client)**
- 🏛️ **Detailed temple registration**
- 🔍 **Query APIs using aggregation pipelines**

## 📸 Screenshots
- Home Page
- Registration Page
- Analytics Dashboard
- Query Results (Revenue, Gold, Visitors)
<h3>🏠 Home Page</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160349.png?raw=true" width="400"/>

<h3>👥 Role Selection Page</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160336.png?raw=true" width="400"/>

<h3>📝 Registration Page</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160402.png?raw=true" width="400"/>

<h3>📊 Query Selection Page</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160439.png?raw=true" width="400"/>

<h3>📈 Query 1 Result</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160459.png?raw=true" width="400"/>

<h3>📉 Query 2 Result</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160522.png?raw=true" width="400"/>

<h3>👥 Query 3 Result</h3>
<img src="https://github.com/bhuvanika1102/Temple-Analytics-Using-MERN/blob/main/Proj/Xtra/Screenshot%202023-12-09%20160540.png?raw=true" width="400"/>



## 🗃️ Database Collection: `TEMPLES`

Sample schema:
```json
{
  "d_templename": "string",
  "d_deity": "string",
  "d_district": "string",
  "d_state": "string",
  "d_pincode": "string",
  "d_era": "string",
  "d_category": "string",
  "d_count": "string",
  "d_year_of_built": "string",
  "d_revenue": "string",
  "d_gold": "string",
  "d_opening_time": "string",
  "d_closing_time": "string",
  "d_email": "string",
  "d_description": "string"
}
```
## 📂 Directory Structure

```bash
TempleAnalytics/
├── backend/
│   ├── controllers/
│   │   ├── registerController.js
│   │   ├── query1Controller.js
│   │   ├── query2Controller.js
│   │   └── query3Controller.js
│   ├── models/
│   │   └── userModel.js
│   ├── db.js
│   └── server.js
├── frontend/
│   └── React Components & Pages
```

## 🚀 Getting Started
1. Prerequisites
2. Node.js and npm
3. MongoDB (local or Atlas)
4. Visual Studio Code or any IDE

## Backend Setup
```bash
cd backend
npm install
node server.js
```
## Frontend Setup
```bash
cd frontend
npm install
npm start
```
## 🧪 Sample Queries
1. Revenue and Gold Between Two Years (Group by State & Deity)

2. Total Temples (Group by State & Deity)

3. Visitor Count Between Two Years (Group by State & Deity)

## 🧠 Learnings
1. MongoDB Aggregation

2. RESTful API with Node/Express

3. Schema design and validation

4. React component-based design

5. MERN full-stack deployment concepts

## 📞 Contact Me
Feel free to reach out to me via email at bhuvani1102@gmail.com or connect with me on LinkedIn at https://www.linkedin.com/in/bhuvani1102
