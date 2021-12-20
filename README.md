

docker exec -it node-lenus-spa bash

## The task ##

You should implement a small **tracker** with [React](https://reactjs.org/), which allows a user to track their weight over time.

- The user should be able to see a timeline of the measurements.
- The user can create new weight measurements and pick the date for it.
- The user can edit and delete measurements
    - The user can see the timeline update as soon as measurements are modified or added

## Run the project ##

1) Copy `./backend/.env-example` to `./backend/.env`

2) Run
```bash
$ docker-compose up --build
```

3) Run migrations:
```bash
$ docker exec -it node-lenus-api bash
```

In the docker container run:
```bash
$ cd database
$ sequelize-cli db:migrate
$ sequelize-cli db:seed:all
```

4) Open URL: [http://localhost:3000](http://localhost:3000/) in a browser

### Navigate between containers ###

```bash
$ docker exec -it node-lenus-api bash
$ docker exec -it node-lenus-spa bash
```
