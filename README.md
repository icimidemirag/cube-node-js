# cube-node-js

## Getting a Sample Dataset
Since MongoDB is a nonrelational database it needs to be sampled into a relational DB such as a MySQL database. The mongoBI connector does this job smartly by letting you run your MySQL queries on your MongoDB.

If you don’t have a local MongoDB instance, please download it [here](https://www.mongodb.com/try/download/community). The BI Connector can be downloaded [here](https://www.mongodb.com/try/download/bi-connector).

There is a good [repository on Github](https://github.com/ozlerhakan/mongodb-json-files) with a curated list of JSON / BSON datasets from the web in order to practice in MongoDB. We’ll pick a [tweets dataset](https://github.com/ozlerhakan/mongodb-json-files/blob/master/datasets/tweets.zip) for our dashboard.

Download test data, unzip and import it using the following command in your MongoDB directory.
(If your paths are different, write it according to your own path.)

```bash
$ bin/mongorestore Your-Downloads-Folder/dump/twitter/tweets.bson
```

Now make sure both MongoDB and MongoDB BI Connector processes are running.

```bash
# Run from MongoDB directory
$ bin/mongod

# Run from MongoDB BI Connector directory
$ bin/mongosqld
```


## Getting Started with Cube.js using Node.js

### Scaffold the project
Run the following command to get started with Cube.js, specifying the project name and optionally your database using the -d flag.

```bash
$ npx cubejs-cli create <project name> -d <database type>
```

For example, to create a new project with the mongoDB database, use the following:

```bash
$ npx cubejs-cli create hello-world -d mongobi
```

Once run, the create command will create a new project directory that contains the scaffolding for your new Cube.js project. 

The `.env` file in this project directory contains placeholders for the relevant database credentials.

For example:

```bash
CUBEJS_DB_TYPE=mongobi
CUBEJS_DB_HOST=my.mongobi.host # mongo BI connector host, if using from local, should be either `localhost` or `127.0.0.1`
CUBEJS_DB_PORT=3307 # default port of mongo BI connector service
CUBEJS_DB_NAME=my_mongodb_database
CUBEJS_DB_USER=mongodb_server_user
CUBEJS_DB_PASS=mongodb_server_password
```

### Define Your Data Schema
Cube.js uses Data Schema to generate and execute SQL.

You can generate schema files using [Developer Playground](https://cube.dev/docs/dev-tools/dev-playground). To do so, you can start the dev server from project directory like this:

```bash
$ npm run dev
```

Then go to `http://localhost:4000` and use Developer Playground to generate schema files.

#### Manually creating Data Schema files
You can also add schema files to the schema folder manually:

```jsx
// schema/users.js

cube(`Users`, {
  measures: {
    count: {
      type: `count`,
    },
  },

  dimensions: {
    age: {
      type: `number`,
      sql: `age`,
    },

    createdAt: {
      type: `time`,
      sql: `createdAt`,
    },

    country: {
      type: `string`,
      sql: `country`,
    },
  },
});
```