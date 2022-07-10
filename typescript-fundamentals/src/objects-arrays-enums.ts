enum Role {
  ADMIN,
  AUTHOR,
  READER,
}

enum CustomRole {
  ADMIN = "ADMIN",
  AUTHOR = 100,
  READER = 250,
}
// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string]; // tuple
// } = {
const person = {
  name: "Affan",
  age: 30,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

let favoriteActivities: string[];
//favoriteActivities = "Gaming"; //Not valid. Since we used string[], we can only store an array of strings.

let favoriteGames: any[];
favoriteGames = ["LOL", "OW", 12];

console.log(person.name);
