/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('pet').del()
  await knex('pet').insert([
    {
      id: 1,
      name: 'Wookie',
      pet_type_id: 3,
      food_type_id: 4
    },
    {
      id: 2,
      name: 'Jade',
      pet_type_id: 3,
      food_type_id: 1
    },
    {
      id: 3,
      name: 'shredder',
      pet_type_id: 2,
      food_type_id: 1
    },
    {
      id: 4,
      name: 'tweety',
      pet_type_id: 1,
      food_type_id: 3
    },
    {
      id: 5,
      name: 'magikarp',
      pet_type_id: 4,
      food_type_id: 2
    },
  ]);
};
