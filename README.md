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
  url   : 'https://[yoursubdomain].zendesk.com',
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
client.attachments
```

```js
upload(files)

```

## Tickets

```js

client.tickets

```

```js

list()
listByOrganization(orgId)
listByUserRequested(userId)
listByUserCCD(userId)
listByAssigned(userId)
listRecent()
show(ticketId)
showMany(ticketIds)
create(ticket)
createMany(tickets)
update(ticketId, ticket)
updateMany(ticketIds, ticket)
delete(ticketId)
deleteMany(ticketIds)
getComments(ticketId)

```


## Search

```js

client.search

```

```js

query(searchTerm)

```

## Users

```js

client.users

```

```js

list()
listByGroup(groupId)
listByOrganization(orgId)
show(userId)
showMany(userIds)
me()

```

## OauthTokens

```js

client.oauthtokens

```

```js

list()
show(id)
current()

```