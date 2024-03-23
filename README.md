# CatHub Project

This is a project that includes both frontend and backend components. It is designed to provide a platform for users to connect, share posts, and interact with each other.

## Technologies Used

- **Frontend Framework:** Next.js

- **Backend:** Go (Golang)

- **Database:** SQLite

- **Containerization:** Docker

# How to run it

### Locally
- Open a new terminal and go tor the backend directory (```cd backend```)  

    ```go run .```

- Open a new terminal and go tor the frontend directory (```cd frontend```)  

    ```npm i (to install)``` 

   ```npm run dev```

### Docker

**NB!** Make sure you have docker installed and running! (stay at the project root)

Building docker image: 
 ```docker build -t social-network .```

Running docker image:
 ```docker run -p 127.0.0.1:8080:8080/tcp -p 3000:3000/tcp social-network```


## Authors
- Elina Otchenko
- Victoria Karpinska
- Deivi Jürgenson
- Katrin Pruul