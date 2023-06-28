
# ClearWater

## Table of Contents 
- [Description](#Description)
- [Features](#Features)
- [Getting Started](#GettingStarted)
    - [Prerequisites](#Prerequisites)
    - [Installation](#Installation)
- [Project Structure](ProjectStructure)
- [Tech Stack](#TechStack) 
- [Endpoints](#Endpoints)

## Description 

ClearWater is a full-stack web application for tracking and managing assets in a water treatment plant. It includes eqipment tracking, performance managing, and maintenance scheduling. ClearWater will help make informed decisions regarding maintenance prioritization, asset replacement, and resource allocation due to lack of comprehensive asset data.




## Features

* Fully responsive design using SAAS
* User authentication and authorization
* No access to any other pages of app without login 
* landing page with cards which manages different data
* Create, Update, delete assets
* Assign maintenance tasks to assets
* Track equipment performance metrics
* Responsive design using Sass
* Sort assets through asset list by asset name, asset id, asset type, location, and maintenance date 




    
                

       
## Getting Started

### Prerequisites
- Node.js installed
- MongoDB installed and running

### Installation

#### Server
  1. Clone the repository: [Server Repo](https://github.com/p-sweta/asset-management-server.git)

         git clone git@github.com:p-sweta/asset-management-server.git

2. Install the dependencies: 

        npm install

3. Create a .env file in the root directoryof your local repo and define variables listed in .sample.env.
- Obtain the MongoDB connection URL from your MongoDB Atlas dashboard or provide a local MongoDB URL.
4. Start the server:

        npx nodemon index.js

#### Client
1. Clone the repository: [Client Repo](https://github.com/p-sweta/asset-management-client.git)

        git clone git@github.com:p-sweta/asset-management-client.git

2. Install the dependencies: 

        npm install
3. Start the app:
        
        npm start

## Project Structure
#### Server

```
.
├── README.md       # README file
├── controllers     # Controllers for handling API requests
├── middleware      # Middleware for authetication
├── models          # Database models and schemas
├── routes          # API routes
├── index.js        # Server entry point
└── .env            # Environment variables
```

#### Client

```
.
├── README.md           # README file
├── public              # Public assets and the HTML template
└── src                 # Source code of the app
    ├── assets          # Fonts and images for the app
    ├── components      # Reusable React components
    ├── pages           # Page components
    ├── styles          # SASS files for styling the application
    ├── App.js          # Root component of the application
    ├── App.scss        # SASS file for Root component styling
    ├── index.js        # Client entry point of the application
    ├── index.scss      # SASS file for index  styling
    └── utils.js        # Utility functions and modules
```
## Tech Stack

* Frontend
    * React
    * React Router
    * SASS
    * Axios

* Backend
    * Node.js
    * Express.js
    * MongoDB
    * Axios


## Endpoints

The server exposes the following endpoints for Assets collection:

GET /assets: Get a list of all assets
POST /assets: Create a new asset
GET /assets/:id: Get a specific asset by ID
PUT /assets/:id: Update a specific asset by ID
DELETE /assets/:id: Delete a specific asset by ID

Refer to the controller files in the controllers/ directory for more details on the endpoints and their implementation.

## Usage 

Using tools like ThunderClient, user can interact with endpoints on server side.

Example requests for Assets collection:

- Get all assets:
        
         GET /assets

- Create a new asset: 

        POST /assets
        content Type: JSON
        Request body:

        {
        "assetName": "Pump C",
        "assetType": "Pump",
        "assetId": "P-25",
        "assetDescription": "Centrifugal pump for water supply",
        "manufacturer": "Grundfos",
        "serialNumber": "PUMP005",
        "status": true,
        "locationName": "Pump Station 1",
        "lastMaintenanceDate": "01/05/2022",
        "nextMaintenanceDate": "02/05/2022",
        "maintenanceInterval": "Monthly",
        "purchaseDate": "01/01/2020",
        "warrantyExpirationDate": "01/01/2025"
        }
           
- Get a specific asset:

        GET /assets/:id

- Update a specific asset:

        PUT /assets/:id
        content Type: JSON
        Request body (fields needs to be updated):

        {
        "assetName": "Pump D",
        "manufacturer": "ABC Company"
        }

- Delete a specific asset:

        DELETE /assets/:id

Make sure to replace :id with the actual ID of the asset you want to retrieve, update, or delete.
## Next Steps

- Search Bar implementation
- Add more styling 
- Implement appropriate logic in application to handle cascading deletes or updates 
- Add a feature that tracks equipment lifecycle and notifies user when maintenance or inspection is due

