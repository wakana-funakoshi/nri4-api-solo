/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('dog').del()
  await knex('dog').insert([
    {
      id: 1, 
      breeds_of_dogs: 'Toy Poodle',
      country_of_origin: 'France',
      color: 'brown',
      size: 1
    },
    {
      id: 2, 
      breeds_of_dogs: 'Chihuahua',
      country_of_origin: 'Mexico',
      color: 'creamy',
      size: 1
    },
    {
      id: 3, 
      breeds_of_dogs: 'Golden Retriever',
      country_of_origin: 'Britain',
      color: 'gold',
      size: 3
    },
    {
      id: 4, 
      breeds_of_dogs: 'Pomeranian',
      country_of_origin: 'German',
      color: 'creamy',
      size: 1
    },
    {
      id: 5, 
      breeds_of_dogs: 'Beagle',
      country_of_origin: 'Britain',
      color: 'hound color',
      size: 1
    },
    {
      id: 6, 
      breeds_of_dogs: 'Japanese Spitz',
      country_of_origin: 'Japan',
      color: 'white',
      size: 2
    },
    {
      id: 7, 
      breeds_of_dogs: 'Shiba',
      country_of_origin: 'Japan',
      color: 'brown',
      size: 1
    },
  ]);
};
