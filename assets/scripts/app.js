const ATTACK_VALUE = 10; // Capitals becuase global value
const MONSTER_ATTACK_VALUE = 14; // Capitals becuase global value

let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE)
    currentPlayerHealth -= playerDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHeatlh > 0) {
        alert('You Won!');
    } else if (currentPlayerHealth <= 0 && currentPlayerHeatlh > 0) {
        alert('You Lose!');
    } else if (currentPlayerHealth <= 0 && currentMonsterHeatlh <= 0) {
        alert('Draw!');
    }
}

attackBtn.addEventListener('click', attackHandler);