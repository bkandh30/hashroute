export { drizzle, DrizzleSqliteDODatabase } from 'drizzle-orm/durable-sqlite';
import { integer, real, sqliteTable } from 'drizzle-orm/sqlite-core';
export { migrate } from 'drizzle-orm/durable-sqlite/migrator';

export const geoLinkClicksTable = sqliteTable('geo_link_clicks', {
  id: integer('id').primaryKey({ autoIncrement: true }),
  latitude: real('latitude').notNull(),
  longitude: real('longitude').notNull(),
  time: integer('time', { mode: 'timestamp' }).notNull().default(new Date()),
  linkId: integer('link_id'),
  userId: integer('user_id'),
});

export type GeoLinkClick = typeof geoLinkClicksTable.$inferSelect;
