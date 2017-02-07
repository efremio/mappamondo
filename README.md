# Mappamondo

A flight logger website made with Angular.

## Getting Started
Clone the `mappamondo` repository using git:
```
git clone https://github.com/efremio/mappamondo.git
cd mappamondo
```

### Prerequisites
Node.js and npm are essential to Angular development.
You can get them from <a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">here</a> if it's not already installed on your machine.
Be sure that you are running at least node `v4.x.x` and npm `3.x.x` by running `node -v` and `npm -v` in a terminal/console window.

### Installing
Install local dependencies by running `npm install` from the project root folder.

### Configuring
The app comes with a data retriever service that reads dummy data from some json files located in `src\test-data\`. By changing the implementation of `flights-retriever.service.ts` you can get data from a real back-end.

### Running
* Run the app with the command `npm start`
* Browse to the application at <a href="http://localhost:4200" target="_blank">http://localhost:4200</a>

### Project status
Mappamondo is currently in pre-alpha and under active development.

#### Feature status:

| Feature              | Status                              |
|----------------------|-------------------------------------|
| dashboard map        |                         In-progress |
| dashboard statistics |                         In-progress |
| add flight           |                         Not started |
| import flights       |                         Not started |
| authentication       |                         Not started |
| welcome screen       |                         Not started |
| flight history       |                         Not started |
| flight view          |                         Not started |



## Authors
* **Efrem Agnilleri** - [efremio](https://github.com/efremio)

