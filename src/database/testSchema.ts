import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';


export const usersTable = pgTable('user', { // object of table's columns
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    name: text('name').notNull(),
    email: text('email').notNull(),
    address: text('address').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull()
});


// TYPE INFRENCES
export type userInsert = typeof usersTable.$inferInsert;
export type userSelect = typeof usersTable.$inferSelect;