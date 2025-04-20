import { pgTable, serial, text, timestamp } from 'drizzle-orm/pg-core';
import {
    registerUser
} from './../controllers/userController.js';

export const usersTable = pgTable('user', { // object of table's columns
    id: serial('id').primaryKey(),
    userId: text('user_id').notNull(),
    name: text('name').notNull(),
    address: text('address').notNull(),
    email: text('email').notNull(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull()
});


// TYPE INFRENCES
export type userInsert = typeof usersTable.$inferInsert;
export type userSelect = typeof usersTable.$inferSelect;