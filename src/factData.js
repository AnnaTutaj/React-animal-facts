export const factData = [
  {
    id: 1,
    name: "Otters",
    img: "./img/otters.jpg",
    scientific_name: "Mustelidae",
    likes: 10,
    life_span: '15 to 20 years',
    info:
      "The charismatic otter, a member of the weasel family, is found on every continent except Australia and Antarctica. Most are small, with short ears and noses, elongated bodies, long tails, and soft, dense fur. There are 13 species in total, ranging from the small-clawed otter to the giant otter. Though most live in freshwater rivers, lakes, and wetlands, the sea otter and the smaller marine otter are found in the Pacific Ocean."
  },
  {
    id: 2,
    name: "Boars",
    img: "./img/boars.jpg",
    scientific_name: "Sus scrofa",
    likes: 79,
    info:
      "Wild boar is a close relative of domestic pig. There are four subspecies of wild boar that are similar in size and appearance, but differ in color (which depends on the type of habitat). Native populations of wild boars can be found in Africa, Europe and Asia (Japan, Indonesia, India and the Far East). Wild boars can survive in different types of habitat: grasslands, taiga, tropical rainforests, but they prefer life in deciduous forests. Wild boars are threatened by habitat loss and by commercial hunt. Luckily, wild populations are still stable and they are not listed as endangered species."
  },
  {
    id: 3,
    name: "Gentoo penguins",
    img: "./img/gentoo-penguins.jpg",
    scientific_name: "Pygoscelis papua",
    likes: 32,
    info:
      "These charismatic waddlers, who populate the Antarctic Peninsula and numerous islands around the frozen continent, are the penguin world's third largest members, reaching a height of 30 inches and a weight of 12 pounds. Gentoos are partial to ice-free areas, including coastal plains, sheltered valleys, and cliffs."
  },
  {
    id: 4,
    name: "Squirrels",
    img: "./img/squirrels.jpg",
    scientific_name: "Sciuridae",
    likes: 3,
    life_span: '5 to 10 years',
    info:
      "The tiniest squirrel is the aptly named African pygmy squirrel—only five inches long from nose to tail. Others reach sizes shocking to those who are only familiar with common tree squirrels. The Indian giant squirrel is three feet long."
  },
  //invalid data for testing - it log errors in console eg. 'Warning: Failed prop type: Invalid prop `fact.likes` of type `string` supplied to `Fact`, expected `number`.'
  // {
  //   id: 500,
  //   name: "Oops...! Invalid data",
  //   likes: 'I\'m some string instead of number',
  // },

];
