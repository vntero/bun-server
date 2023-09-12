import { Database } from 'bun:sqlite'

export interface Contact {
  id?: number,
  name: string,
  phone: number,
  email: string,
}

const db = new Database('contacts.db')

export const initDatabase = async (db: Database) => {
  await db.run('CREATE TABLE IF NOT EXISTS books (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, author TEXT)')
}

// ----- CREATE a contact -----
export const createContact = async (contact: Contact) => {
  await initDatabase(db)

  return await db.query('INSERT INTO contacts (name, phone, email) VALUES (?, ?) RETURNING id').get(contact.name, contact.phone, contact.email) as Contact
}

// ----- READ all contacts -----
export const readContacts = async () => {
  await initDatabase(db)

  return db.query('SELECT * FROM contacts').all()
}

// ----- UPDATE a contact -----
export const updateContact = async (id: number, contact: Contact) => {
  await initDatabase(db)

  return await db.run(`UPDATE contacts SET name = '${contact.name}', phone = '${contact.phone}', email = '${contact.email}'`)
}

// ----- DELETE a contact ----- 
export const deleteContact = async (id: number) => {
  await initDatabase(db)

  return await db.run(`DELETE FROM contacts WHERE id = ${id}`)
}
