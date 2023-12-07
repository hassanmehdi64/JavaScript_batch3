 function addLanguage(langName){
        const li = document.createElement('li');
        li.innerHTML = `${langName}`
        document.querySelector('.language').appendChild(li)
    }
    addLanguage("python")
    addLanguage("typescript")

    function addOptiLanguage(langName){
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(langName))
        document.querySelector('.language').appendChild(li)
    }
    addOptiLanguage('golang')





    //Edit
    const secondLang = document.querySelector("li:nth-child(2)")
    console.log(secondLang);
    //secondLang.innerHTML = "Mojo"
    const newli = document.createElement('li')
    newli.textContent = "Mojo"
    secondLang.replaceWith(newli)

    //edit example 2
    const firstLang = document.querySelector("li:first-child")
    firstLang.outerHTML = '<li>TypeScript</li>'

    //remove
    const lastLang = document.querySelector('li:last-child')
    lastLang.remove()

