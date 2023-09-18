const studentHogwarts = () => {
    let privateScore = 0;
    let name = null;

    const changeScoreBy =  (points) => {
        privateScore += points;
    };

    const setName = (newName) => {
        name = newName;
    };

    const rewardStudent = () => {
        changeScoreBy(1);
    };

    const penalizeStudent = () => {
        changeScoreBy(-1);
    };

    const getScore = () => {
        return {
            name: `${name}: ${privateScore}`,
        };
    };

    return {
        setName,
        rewardStudent,
        penalizeStudent,
        getScore,
    };
};

// Creating a variable named harry an instance of studentHogwarts
const harry = studentHogwarts();
harry.setName('Harry');
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();
harry.rewardStudent();

// Creating a variable named draco, an instance of studentHogwarts
const draco = studentHogwarts();
draco.setName('Draco');
draco.rewardStudent();
draco.penalizeStudent();
draco.penalizeStudent();
draco.penalizeStudent();

// Log to the console the name and score
console.log(harry.getScore().name);
console.log(draco.getScore().name);