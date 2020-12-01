
<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

## Installation

First, clone the repository

    git clone git@github.com:cpplpp/Catsharing.git

Go to the repo folder

    cd catsharing

Install all dependencies

    npm install

## Database

Copy .env file

    cp .env.example .env

Change DB_URL to represent path to your database


# API specification    

### Get full catalog
`GET l/catalog`

### Get one cat
`GET /catalog/id`

### Get range of cats
You can use
`GET /catalog?offset=0&limit=2`

to limit display

JSON
```JSON
[
    {
        "id": 1,
        "name": "Vasiliy",
        "description": "Black",
        "breed": "Bombay",
        "age": 5,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petfinder.com%2Fcat-breeds%2Fbombay%2F&psig=AOvVaw3fA-gjdr7MAvJ-Y5nE3q9e&ust=1606867390299000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKDX_NO9q-0CFQAAAAAdAAAAABADBlack",
        "price": 1000,
        "status": "free"
    },
    {
        "id": 2,
        "name": "Mary",
        "description": "White fur with gray strips",
        "breed": "British shorthair",
        "age": 8,
        "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petfinder.com%2Fcat-breeds%2Fbritish-shorthair%2F&psig=AOvVaw2cX9kpzzVbgKTgRHB3BHMd&ust=1606909432823000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD156LarO0CFQAAAAAdAAAAABAD",
        "price": 800,
        "status": "busy"
    }
]
```


### Add a cat
`POST /catalog`

JSON
```JSON
{
    "name": "Mary",
    "description": "White fur with gray strips",
    "breed": "British shorthair",
    "age": 8,
    "image": "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.petfinder.com%2Fcat-breeds%2Fbritish-shorthair%2F&psig=AOvVaw2cX9kpzzVbgKTgRHB3BHMd&ust=1606909432823000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCPD156LarO0CFQAAAAAdAAAAABAD",
    "price": 800,
    "status": "free"
}
```

### Update specific cat
`PUT /catalog/id`

JSON
```JSON
{
    "description": "Black with white tail"
}
```

### Renting cats

To rent a cat, use
`PATCH /catalog/id/rent`

To mark cat free, use
`PATCH /catalog/id/free`

