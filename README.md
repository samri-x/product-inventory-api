# Product Inventory API

A RESTful API built with Node.js and Express.js for managing product inventory.

## Features

* View all products
* View a single product
* Add a product
* Update a product
* Delete a product
* Input validation
* Error handling
* Proper HTTP status codes

## Tech Stack

Node.js · Express.js · Postman · Git


## API Endpoints

| Method | Endpoint        | Description       |
| ------ | --------------- | ----------------- |
| GET    | `/products`     | View all products |
| GET    | `/products/:id` | View a product    |
| POST   | `/products`     | Add a product     |
| PUT    | `/products/:id` | Update a product  |
| DELETE | `/products/:id` | Delete a product  |

## Project Structure

product-inventory-api/ 
│── node_modules/ 
│── package.json 
│── app.js 
│ 
├── routes/ 
│     └── productRoutes.js 
│ 
├── controllers/ 
│     └── productController.js 
│ 
├── data/ 
      └── products.js 

Built to practice REST APIs, Express.js, routing, controllers, and API testing.
