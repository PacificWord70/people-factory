const personForm = document.querySelector('#personForm')

function handleSubmit(ev)
{
    ev.preventDefault()
    const f = ev.target
    const name = f.firstName.value
    //const lastName = f.secondName.value
    //const name = firstName+' '+lastName
    const details = document.querySelector('#details')

    const boldedName = document.createElement('strong')
    boldedName.textContent = name

    details.innerHTML += boldedName

    details.appendChild(boldedName)

/*
    const newP = document.createElement('P')
    const p = document.createTextNode('Fist Name : Last Name - '+f.firstName.value+' : '+f.secondName.value)

    newP.appendChild(p);
    document.body.appendChild(newP)
    const body = document.querySelector('p')

    if(f.firstName.value.charAt(0)=='H')
    {
        newP.style.color = "blue"
    }
    else
    {
        newP.style.color = "black"
    }
*/
}

personForm.addEventListener('submit', handleSubmit)