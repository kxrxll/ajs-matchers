export default function sortHeroesByHealth(arr) {
  return arr.sort((a, b) => {
    if (a.health > b.health) {
      return -1;
    }
    if (a.health < b.health) {
      return 1;
    }
    return 0;
  });
}
