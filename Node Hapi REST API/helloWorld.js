var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({
  port: 8080
});

var tasklist = [{
    "task": "Walk the cat",
    "owner": "Kirsten"
  },
  {
    "task": "Water the plants",
    "owner": "Kirsten"
  }
]

server.route([{
    method: 'GET',
    path: '/',
    handler: function (request, reply) {
      reply('Hello world from hapi');
    }
  },
  {
    method: 'GET',
    path: '/api/v1/todolist',
    handler: function (request, reply) {
      reply(tasklist);
    }
  },
  {
    method: 'POST',
    path: '/api/v1/todolist',
    handler: function (request, reply) {
      newTask = {
        "task": request.payload.task,
        "owner": request.payload.owner
      };
      tasklist.push(newTask);
      reply(tasklist).code(201);
    }
  },
  {
    method: 'GET',
    path: '/api/v1/todolist/{index}',
    handler: function (request, reply) {
      reply(tasklist[request.params.index - 1])
    }
  },
  {
    method: 'PUT',
    path: '/api/v1/todolist/{index}',
    handler: function (request, reply) {
      newTask = {
        "task": request.payload.task,
        "owner": request.payload.owner
      };
      tasklist[request.params.index - 1] = newTask;
      reply(tasklist);
    }
  },
  {
    method: 'DELETE',
    path: '/api/v1/todolist/{index}',
    handler: function (request, reply) {
      delete tasklist[request.params.index - 1];
      reply().code(204);
    }
  }
]);

server.start(function (err) {
  console.log('Hapi is listening to http://localhost:8080');
});