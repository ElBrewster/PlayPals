/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("activities").del();
  await knex("activities").insert([
    {
      id: 1,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/paper-cutting.png",
      end_age: 48,
      name: "paper cutting",
      materials: "paper, child-scissor, bin",
      instructions:
        "Have child hold scissors with whichever hand they choose, cut paper into whatever shape they want in any size they want",
      indoor: true,
      outdoor: false,
      motor_skills: "fine",
    },
    {
      id: 2,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/sensory-bag%20.png",
      start_age: 8,
      end_age: 10,
      name: "Sensory bags and bins",
      materials: "resealable bag, bin, dry pasta",
      instructions:
        "Put different textured objects in a bag and let your child pull them out one by one. Just make sure that objects are nontoxic and big enough not to be a choking hazard, since they are likely to end up in your child's mouth",
      indoor: true,
      outdoor: false,
      motor_skills: "fine",
    },
    {
      id: 3,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/obstacle-course.png",
      start_age: 10,
      end_age: 48,
      name: "obstacle course",
      materials:
        "pillows, blankets, furniture, outdoor materials: towels, blow up toys",
      instructions:
        "Toss blankets over furniture to create tunnels tto crawl through, toss pillows on the floor to jump onto if child is older or to crawl over if younger, a prize is placed at the end of the course or make the course a circle, go outside for more space",
      indoor: true,
      outdoor: true,
      motor_skills: "gross",
    },
    {
      id: 4,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/pompoms.png",
      start_age: 9,
      end_age: 12,
      name: "pompom whisk",
      materials: "whisk, pompom",
      instructions:
        "Place pompoms into whisk and have child try and pull them out, continue to add pompoms until the child is no longer interested",
      indoor: true,
      outdoor: false,
      motor_skills: "fine",
    },
    {
      id: 5,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/sponges.png",
      start_age: 36,
      end_age: 60,
      name: "running sponge",
      materials: "bucket, water, sponge",
      instructions:
        "Fill up a bucket with water and give child a big sponge, dip it in the bucket and then run to another bucket and squeeze the water into it. Repeat until all the water has transferred between buckets",
      indoor: false,
      outdoor: true,
      motor_skills: "fine, gross",
    },
    {
      id: 6,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/car-painting.png",
      start_age: 12,
      end_age: 48,
      name: "car painting",
      materials:
        "at least 3 matchbox cars, paint, cardboard box or butcher paper",
      instructions:
        "Dip cars in paint and place cars on paper, push cars along or send cars racing down the paper to create fun and creative art peices",
      indoor: false,
      outdoor: true,
      motor_skills: "fine",
    },
    {
      id: 7,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/ice-cubes.png",
      start_age: 24,
      end_age: 48,
      name: "ice painting",
      materials:
        "enough ice to fill a plastic bin, plastic bin, paint and brushes",
      instructions:
        "Place ice in bin and place on well worn towel to catch extra water and paint, start by painting the ice, as the ice melts the child can watch everything turn different colors",
      indoor: true,
      outdoor: true,
      motor_skills: "fine",
    },
    {
      id: 8,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/preparing-snacks.png",
      start_age: 36,
      end_age: 48,
      name: "preparing snack",
      materials: "crackers, berries, kid-safe knife, plate, cutting board",
      instructions:
        "Have your child pick crackers and berries, cut them to size and arrange on the plate. To finish work cycle, have them put away dirty dishes.",
      indoor: true,
      outdoor: false,
      motor_skills: "fine",
    },
    {
      id: 9,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/ice-cubes.png",
      start_age: 24,
      end_age: 48,
      name: "ice cube transfer ",
      materials: "color ice cube, water, 2 large bowls, slotted spoon",
      instructions:
        "Fill ice cube trays with water and food coloring. Fill one with water and dump the ice cubes in. Leave the other bowl empty. Challenge your child to transfer all of the ice cubes from one bowl to the other with slotted spoon",
      indoor: true,
      outdoor: true,
      motor_skills: "gross",
    },
    {
      id: 10,
      img_url:
        "https://nodecoders.s3.us-west-2.amazonaws.com/activitiesImg/activitiesPNG/bubbles.png",
      start_age: 12,
      end_age: 48,
      name: "Chasing bubbles",
      materials: "lots of bubble solutions, outdoor space",
      instructions:
        "Warning!, there will be a lot of spillage, motivate your child to move, and run into a certain direction, as well as jump and catch bubbles",
      indoor: false,
      outdoor: true,
      motor_skills: "gross",
    },
  ]);
};
