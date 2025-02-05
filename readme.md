# Number Classification API

A REST API that provides mathematical properties and fun facts about numbers. Built with Node.js and Express.

## Features

- Calculates the sum of digits
- Gets mathematical properties of a number (prime, perfect, Armstrong)
- Determines if the number is odd or even
- Fetches a fun fact about the number from the Numbers API
- CORS enabled
- Input validation
- Error handling

## Technologies Used

- Node.js
- Express
- CORS
- Axios

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/classify-number.git
```

2. Install dependencies:
```bash
cd classify-number
npm install
```

3. Start the server:
```bash
npm start
```

For development with auto-reload:
```bash
npm run dev
```

## API Specification

### Endpoint
```
GET /api/classify-number?number=371
```

### Success Response (200 OK)
```json
{
    "number": 371,
    "is_prime": false,
    "is_perfect": false,
    "properties": ["armstrong", "odd"],
    "digit_sum": 11,
    "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371"
}
```

### Error Response (400 Bad Request)
```json
{
    "number": "missing number",
    "error": true
}
```

## Deployment

The API can be deployed to platforms like Heroku, Railway, Render or any other Node.js hosting service. Make sure to:

1. Set up environment variables if needed
2. Configure CORS settings for production
3. Set up proper error logging
4. Configure rate limiting for production use

## Testing

To test the API, you can use tools like Postman or curl:

```bash
curl http://your-domain.com/api/classify-number?number=371
```

## Error Handling

The API implements comprehensive error handling:
- Input validation for non-numeric values
- Missing parameter handling
- Internal server error handling
- External API failure handling

## Performance

- Response time: < 500ms
- Efficient number property calculations


## License

This project is licensed under the MIT License.