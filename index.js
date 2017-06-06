const personForm = document.querySelector('#personForm')
    const details = document.querySelector('#details')


function renderColor(color)
{
    const div = document.createElement('div')
    div.style.backgroundColor = color
    div.style.width = '100px'
    div.style.height = '50px'

    return div
}

const newE = document.createElement('UL')
function addToDoc(ee,thing)
{
    const newEE = document.createElement(ee)
    newEE.innerHTML=`${thing}`
    newE.appendChild(newEE)
    details.appendChild(newE)
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


    addToDoc('LI',`Name: ${name}`)
    addToDoc('LI',`Fav Color: ${renderColor(favColor).outerHTML}`)
    addToDoc('LI',`Age: ${age}`)
    
    /*
    details.innerHTML=`
        <ul>
            <li>Name: ${name}</li>
            <li>Fav Color: ${colorDiv}</li>
            <li>Age: ${age}</li>
        </ul>
    `
    */

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