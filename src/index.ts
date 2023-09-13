import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { createContact, readContacts, updateContact, deleteContact } from './sql_db'
import { Contact } from './sql_db'

// ----- Initiates the handler -----
const app = new Elysia()

  // ----- Home Page -----
  .get('/', () => 'Hello World')

  // ----- Create contact -----
	.post('/create', ({ body }) => {
    const { name, phone } = body as Contact
    const cCard = {
      name: name,
      phone: phone
    }
    createContact( cCard )
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