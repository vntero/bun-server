import { Database } from 'bun:sqlite'

export interface Contact {
  id?: number,
  name: string,
  phone: number,
  email: string,
}

export const initDatabase = async (db: Database) => {
  await db.run('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT)')
}

export const getContacts = async () => {
  const db = new Database('contacts.db')
  await initDatabase(db)

  return db.query('SELECT * FROM contacts').all()
}

export const addContact = async (contact: Contact) => {
  const db = new Database('contacts.db')
  await initDatabase(db)

  const result = await db.query('INSERT INTO contacts (name, phone, email) VALUES (?, ?) RETURNING id').get(contact.name, contact.phone, contact.email) as Contact

  return { ...contact, id: result.id } as Contact
}