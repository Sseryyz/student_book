(async () =>{
    const {results: people } = await fetch('https://swapi.co/api/people/').then((res) => res.json());

    let persons = {results: people};

    for (let i = 0; i < persons.results.length; i++) {
        let result = [
             "Name:" + persons.results[i].name,
             "Mass: " + persons.results[i].mass,
             "Height: " + persons.results[i].height,
             "Volume: " + +persons.results[i].mass * +persons.results[i].height];
        console.log(result);
    }
})();