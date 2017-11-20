<div align="center">
  <h1>Zendesk Client</h1>
  <p>
    JS library for the Zendesk API
  </p>
</div>


## Install

Install using npm:
```bash
npm install zendesk-client
```

## API Documentation

[Zendesk Core API](https://developer.zendesk.com/rest_api/docs/core/introduction)

## Quick Start

```js
import createClient from 'zendesk-client';

const client = createClient({
  token : 'token',
  url   : 'https://[yourdomain].zendesk.com',
});

client.search.query('type:ticket status:open status:new')
.then((result) =>{
  console.log(result)
})
.catch((error)=>{
  console.log(error)
});

```

## Attachments

```js
client.attachments.upload(files)

```

## Tickets

```js

const ticket = {
  "ticket":
    {
      "subject":"My printer is on fire!",
      "comment": {
        "body": "The smoke is very colorful."
      }
    }
  };

client.tickets.create(ticket)

```


## Search

```js

client.search.query('type:ticket status:open status:new')

```
