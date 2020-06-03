import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.table('points', table => {
    table.string('whatsapp').notNullable().defaultTo('');
  });
}

export async function down(knex: Knex) {
  return knex.schema.table('items', table => {
    table.dropColumn('whatsapp');
  });
}