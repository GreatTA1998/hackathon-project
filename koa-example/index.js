'use strict'; 

const Koa = require('koa');
const Router = require('@koa/router');
const OPENAI_SECRET = require('./.secrets.js')


const app = new Koa();
const router = new Router();

router.get('koa-example', '/', (ctx) => {
  ctx.body = 'Hello World';
});

app
  .use(router.routes())
  .use(router.allowedMethods());

app.listen(1234);

// setup OpenAI API keys
console.log('OPENAI_SECRET =', OPENAI_SECRET)
