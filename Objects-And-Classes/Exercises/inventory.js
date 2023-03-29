function inventory(input) {

    heroes = [];

    for (const line of input) {

        let [ heroName, heroLevel, heroItems ] = line.split(' / ');
        
        heroes.push({ Hero: heroName, level: heroLevel, items: heroItems });
    }

    let sortedHeroes = heroes
                            .sort((heroA, heroB) => {
                                return heroA.level - heroB.level;
                            });

    for (const hero of sortedHeroes) {
        console.log(`Hero: ${hero.Hero}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }

}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',    
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',    
    'Poppy / 28 / Sentinel, Antara'
]);