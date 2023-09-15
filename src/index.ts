import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { createContact, readContacts, updateContact, deleteContact, readContact } from './sql_db'
import { Contact } from './sql_db'

// ----- Initiates the handler -----
const app = new Elysia()

  // ----- Home Page -----
  .get('/', () => 'Hello World!')

  // ----- Create contact -----
	.post('/create', async ({ body }) => {
    const { name, phone } = body as Contact
    try {
      await createContact( { name, phone } )
      return { message: 'Contact created!' }
    }
    catch (error) {
      return { message: error }
    }
  })

  // ----- Read all contacts -----
  .get('/read', () => readContacts())

  // ----- Read one contact -----
  .get('/read/:id', async ({ params: { id }}) => readContact(id))

  // ----- Update contact -----
  .get('/update', () => {
    updateContact('FIXME', 'FIXME')
  })

  // ----- Delete contact -----
  .delete('/delete/:id', async ({ params: { id }}) => await deleteContact(id))

  // ----- Tell which port is accessible -----
	.listen(8080)
	 
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)