const personForm = document.querySelector('#personForm')

function handleSubmit(ev)
{
    ev.preventDefault()
    const f = ev.target
    const heading = document.querySelector('h1')
    heading.textContent = f.firstName.value+' '+f.secondName.value

    const newP = document.createElement('P')
    const p = document.createTextNode('Fist Name: '+f.firstName.value+'\nLast Name: '+f.secondName.value)
    newP.appendChild(p);
    document.body.appendChild(newP)
}

personForm.addEventListener('submit', handleSubmit)