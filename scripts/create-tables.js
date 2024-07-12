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
    console.log(`Error creating user table`, error);
    throw error;
  }
}

async function createGameTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS games (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            api_game_id TEXT NOT NULL,
            name TEXT NOT NULL,
            img TEXT
        )`;
  } catch (error) {
    console.log(`Error creating game table`, error);
    throw error;
  }
}

async function createPlayingTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS playing (
           user_id UUID REFERENCES users(id),
           game_id UUID REFERENCES games(id)
        )`;
  } catch (error) {
    console.log(`Error creating playing table`, error);
    throw error;
  }
}

async function createCompletedTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS completed (
          user_id UUID REFERENCES users(id),
          game_id UUID REFERENCES games(id)
        )`;
  } catch (error) {
    console.log(`Error creating completed table`, error);
    throw error;
  }
}

async function createDroppedTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS dropped (
          user_id UUID REFERENCES users(id),
          game_id UUID REFERENCES games(id)
        )`;
  } catch (error) {
    console.log(`Error creating dropped table`, error);
    throw error;
  }
}

async function createPlanToPlayTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS plan_to_play(
          user_id UUID REFERENCES users(id),
          game_id UUID REFERENCES games(id)
        )`;
  } catch (error) {
    console.log(`Error creating plant to play table`, error);
    throw error;
  }
}

async function createReviewsTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
        CREATE TABLE IF NOT EXISTS reviews(
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          user_id UUID REFERENCES users(id),
          game_id UUID REFERENCES games(id),
          body TEXT,
          rating INT
        )`;
  } catch (error) {
    console.log(`Error creating reviews table`, error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await createUsersTable(client);
  await createGameTable(client);
  await createPlayingTable(client);
  await createCompletedTable(client);
  await createDroppedTable(client);
  await createPlanToPlayTable(client);
  await createReviewsTable(client);
  await client.end();
}

main().catch(() => {
  console.log(`error creating tables ${error}`);
});
