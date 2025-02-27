console.log("work")
const emailEl = document.querySelectorAll(`.email`)
const buttonEl = document.querySelector(`.btn`)

fetch(`https://flynn.boolean.careers/exercises/api/random/mail`)
    .then(response => response.json())
    .then(data => {
        console.log(data.response);

        // extract this data somehow
        const [emailvalue] = data.response
        console.log(emailvalue)
    })

    .catch(Error => {

        console.error(error);


    })


//multiply it ten times or generate it ten times


//link it to the front of html as "list?"



//bonus link this to a button


//at every press reset and generate new 



