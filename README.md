# <div align="center">Train Booking</div>

<div align="center">
  <img src="https://i.imgur.com/o1JbekD.png" />
</div>

Train Booking is a MERN stack application that allows users to book seat for a train. The app includes an attractive UI and multiple features.

## Features

- Seat availability check

- Book a max of 7 seats at once

- Closest seats booking alogrithm

- Seat data reset everyday at 9:30AM IST

- Default seed for mongodb

<br/>

## Commands

### Backend

```bash
$ npm install
```

Installs all the required packages for backend

```bash
$ npm start
```

Starts the server using nodemon

## Frontend

```bash
$ npm install
```

Installs all the required packages for frontend

```bash
$ npm start
```

Runs frontend on localhost(React App)

```bash
$ npm run build
```

Creates an optimized production build

<br/>

## Folder Structure

```
train-booking/
├── backend/
│ ├── model/
│ │ └── train.js
│ ├── routes/
│ │ └── train.js
│ ├── seed.js
│ └── server.js
├── frontend/
│ ├── public/
│ │ ├── index.html
│ │ └── manifest.json
│ ├── src/
│ │ ├── App.js
│ │ ├── index.css
│ │ └── index.js
│ ├── .env
│ └── tailwind.config.js
├── .gitignore
└── README.md
```
---
