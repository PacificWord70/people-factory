const personForm = document.querySelector('#personForm')
    const details = document.querySelector('#details')


const newE = document.createElement('UL')
function addToDoc(ee,desc,thing)
{
    const newEE = document.createElement(ee)
    newEE.textContent=desc+': '+thing
    //newE.appendChild(newEE)
    details.appendChild(newEE)
}

function handleSubmit(ev)
{
    ev.preventDefault()
    const f = ev.target
    const name = f.firstName.value
    const favColor = f.favColor.value
    const age = f.age.value

    //const lastName = f.secondName.value
    //const name = firstName+' '+lastName
    //const boldedName = document.createElement('strong')
    //boldedName.textContent = name
    //details.appendChild(boldedName)

    const colorDiv = `
        <div style="background-color: ${favColor}; width: 100px; height: 50px;"></div>
    `

    addToDoc('LI','Name',name)
    addToDoc('LI','Fav Color',favColor)
    addToDoc('LI','Age',age)

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