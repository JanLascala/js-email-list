console.log("work")


fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(Error => {

        console.error(error);
    })
// extract this data somehow


//multiply it ten times or generate it ten times 


//link it to the front of html as "list?"



//bonus link this to a button


//at every press reset and generate new 



fetch("https://flynn.boolean.careers/exercises/api/random/int")
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })

    .catch(Error => {

        console.error(error);
    })
