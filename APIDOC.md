# Burger API Documentation
The Burger API allows the user to generate random burgers from a wide variety of ingredients

## Get a random burger
**Request Format:** /burger/random

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** returns a randomly generated burger with every ingredient

**Example Request:** /burger/random

**Example Response:**
```
[
  {"bun": "Ciabatta"},
  {"protein": "Impossible Burger"},
  {"cheese": "Provolone"},
  {"sauce": "Habanero Salsa"},
  {"toppings": "Quinoa"},
  {"sides": "Fried Onion Strings"},
  {"calories": 1420},
  {gluten free: false}
]
```

**Error Handling:**
- N/A

## Get a random ordered burger
**Request Format:** /burger/order/:order

**Request Type:** GET

**Returned Data Format**: Plain Text

**Description:** returns a randomly generated burger with only the specified ingredients

**Example Request:** /burger/order/bun-cheese-protein-

**Example Response:**
*Fill in example response in the {}*
```
[
  {"bun": "Ciabatta"},
  {"cheese": "Provolone"},
  {"protein": "Impossible Burger"}
]
```

**Error Handling:**
*Fill in an example of the error handling*
