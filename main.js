console.log("work")


fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(Error => {

        console.error(error);
    })





fetch("https://flynn.boolean.careers/exercises/api/random/int")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(Error => {

        console.error(error);
    })
