import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { createContact, readContacts, updateContact, deleteContact } from './db'
import { Contact } from './db'

// ----- Initiates the handler -----
const app = new Elysia()

  // ----- Home Page -----
  .get('/', () => 'Hello World')

  // ----- Create contact -----
	.post('/create', ({ body }) => {
    const contact = createContact(body as Contact)
    console.log("🔥🔥🔥 ~ file: index.ts:15 ~ .post ~ contact:", contact)
    
    'The contact ' + contact + ' has been created!'
  })

  // ----- Read all contacts -----
  .get('/read', () => readContacts())

  // ----- Update contact -----
  .get('/update', () => updateContact('FIXME', 'FIXME'))

  // ----- Delete contact -----
  .get('/delete', () => deleteContact('FIXME'))

  // ----- Tell which port is accessible -----
	.listen(8080)
	 
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)