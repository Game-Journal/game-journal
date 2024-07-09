const { db } = require("@vercel/postgres");

async function createUsersTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS users (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            username VARCHAR(255) NOT NULL,
            avatar TEXT, 
            email TEXT NOT NULL UNIQUE,
            password TEXT NOT NULL,
            bio TEXT
        );`;
  } catch (error) {
    console.log(`Error creating user table ${error}`);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await createUsersTable(client);
  await client.end();
}

main().catch(() => {
  console.log(`error creating tables ${error}`);
});
