/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('food_type').del()
  await knex('food_type').insert([
    {
      id: 1,
      name: 'Purina',
      description: 'The normal store bought pet food'
    },

    {
      id: 2,
      name: "Nurse Joy's Special poke mix",
      description: 'Special poke food'
    },
    {
      id: 3,
      name: "Grandma's bird Seed",
      description: 'Seeds for birds. What did you expect?'
    },
    {
      id: 4,
      name: 'Doggy Diet Mix',
      description: 'When your pups getting fat feed them this!'
    }
  ]);
};
