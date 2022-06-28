const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };

const damageDragon = (dragon) => Math.floor(Math.random()*(dragon.strength + 15));

const damageWarrior = (warrior) => Math.floor(Math.random()*(warrior.strength + warrior.strength*warrior.weaponDmg))

const mageAttack = (mage) => {
  const mageMana = mage.mana;
  const minDmg = mage.intelligence;
  const maxDmg = minDmg*2;
  const turnStatus = {
    manaSpent: 0,
    damageDealt: 'Not enough mana'
  };
  if(mageMana > 15) {
    const mageDamage = Math.floor((Math.random()*(maxDmg - minDmg + 1)) + minDmg);
    turnStatus.manaSpent = 15;
    turnStatus.damageDealt = mageDamage;
    return turnStatus;
  }
  return turnStatus;
};

const gameAction = {
  warriorTurn: (warriorDamage) => {
    const damage = warriorDamage(warrior)
    dragon.healthPoints -= damage;
    return `O dragão tem apenas ${dragon.healthPoints} pontos de vida`;
  },
  mageTurn: (mageDamage) => {
    const mageTurnStatus = mageDamage(mage);
    mage.damage = mageTurnStatus.damageDealt
    mage.mana = mageTurnStatus.manaSpent;
    dragon.healthPoints -= mage.damage;
    return `O dragão tem apenas ${dragon.healthPoints} pontos de vida. E o mage consumiu ${mage.mana} pontos de mana`;
  },
  monsterTurn: (dragonDamage) => {
    const damage = dragonDamage(dragon);
    warrior.healthPoints -= damage;
    mage.healthPoints -= damage;
    dragon.damage = damage;
    return `O guerreiro tem ${warrior.healthPoints} sobrando. O mage tem ${warrior.healthPoints} sobrando.`;

  },
  turnResults: () => battleMembers,
}
console.log(gameAction.warriorTurn(damageWarrior));
console.log(gameAction.mageTurn(mageAttack));
console.log(gameAction.monsterTurn(damageDragon))
console.log(gameAction.turnResults());