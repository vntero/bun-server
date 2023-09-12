import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { createContact, readContacts, updateContact, deleteContact } from './db'

// ----- Initiates the handler -----
const app = new Elysia()

  // ----- Home Page -----
  .get('/', () => 'Hello Worlk')
  // ----- Create contact -----
	.get('/create', () => createContact('FIXME'))

  // ----- Read all contacts -----
  .get('/read', () => readContacts())

  // ----- Update contact -----
  .get('/update', () => updateContact('FIXME', 'FIXME'))

  // ----- Delete contact -----
  .get('/delete', () => deleteContact('FIXME'))

  // ----- Tell which port is accessible -----
	.listen(8080)
	 
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)