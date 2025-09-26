# Wallet System

A simple wallet API built with **Express.js**, **TypeScript**, and **InversifyJS** for dependency injection.  
This project uses repository pattern, and dependency injection. In theory, it somehow demonstrate clean architecture since it is
divided into 3 layers: entry as presentation layer, controller as domain layer and repository as the data layer. 

## File Structure

src/entries (Route Defintion)

src/controllers (Business logic)

src/repositories (Repository interface and implementation)

## API Documentation
### 1. Balance Inquiry
**Endpoint:**  
`GET /wallet/balance-inquiry`  

**Response:**
```json
{
  "balance": 1000
}
```
### 2. Cash In

**Endpoint:**  
`POST /wallet/cash-in`

**Request Body:**
```json
{
  "amount": 500
}
```
**Response:**
```json
{
  "message": "Cash in successful",
  "balance": 1500
}
```
### 3. Debit

**Endpoint:**  
`POST /wallet/debit`

**Request Body:**
```json
{
  "amount": 500
}
```
**Response(Success):**
```json
{
  "message": "Transaction successful",
  "balance": 1000
}
```

**Response(Fail):**
```json
{
  "error": "Insufficient balance"
}
```

## Testing
1. Run the server
   `npx ts-node src/index.ts`

2. Request using postman
   `GET http://localhost:3000/wallet/balance-inquiry`

3. Use the API documentation above to test other endpoints


