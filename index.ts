import { Elysia } from 'elysia'
import { html } from '@elysiajs/html'
import { createContact, readContacts, updateContact, deleteContact } from './db'

// ----- Initiates the handler -----
const app = new Elysia()

  // ----- Create contact -----
	.get('/create', () => 'Hello Elysia')

  // ----- Read all contacts -----
  .get('/read', () => 'pong')

  // ----- Update contact -----
  .get('/update', () => 'kadabra')

  // ----- Delete contact -----
  .get('/delete', () => 'yang')

  // ----- Tell which port is accessible -----
	.listen(8080)
	 
console.log(`🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`)