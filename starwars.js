(async () =>{
    const {results: people } = await fetch('https://swapi.co/api/people/').then((res) => res.json());

    persons = {results: people};

    result = {};
    for (let i = 0; i < persons.results.length; i++) {
        result = ["Name:" + persons.results[i].name,
                        "Mass: " + persons.results[i].mass,
                        "Height: " + persons.results[i].height,
                        "Volume: " + +persons.results[i].mass * +persons.results[i].height
                        ];
        console.log(result);
    }
    // const result = {
    //     "Luck SkyWalker": {
    //         mass: 123213,
    //         height: 123123,
    //         volume: this.mass * this.height,
    //     }
    // };
})();
let persons;
let result;
