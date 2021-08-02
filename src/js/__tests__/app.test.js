import sortHeroesByHealth from '../app';

test('should sort', () => {
  const result = sortHeroesByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('should sort', () => {
  const result = sortHeroesByHealth([
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).not.toBe([
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'мечник', health: 10 },
  ]);
});

test('should sort same', () => {
  const result = sortHeroesByHealth([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
  expect(result).toEqual([
    { name: 'мечник', health: 100 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
  ]);
});
