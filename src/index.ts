import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { createContact, readContacts, updateContact, deleteContact, readContact } from './sql_db'
import { Contact } from './sql_db'

// ----- Initiates the handler -----
const app = new Elysia()

  // ----- Home Page -----
  app.get('/', () => 'Hello World!')

  // ----- Create contact -----
	app.post('/create', async ({ body }) => {
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
  app.get('/read', () => readContacts())

  // ----- Read one contact -----
  app.get('/read/:id', async ({ params: { id }}) => await readContact(parseInt(id)))

  // ----- Update contact -----
  app.get('/update', () => {
    updateContact('FIXME', 'FIXME')
  })

  // ----- Delete contact -----
  app.delete('/delete/:id', async ({ params: { id }}) => await deleteContact(parseInt(id)))

  // ----- Tell which port is accessible -----
	.listen(8080)
	 
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)