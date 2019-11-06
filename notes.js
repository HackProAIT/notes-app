const fs=require('fs')
const chalk = require('chalk')


const addnotes = (title, body) => {
    
    const notes = loadnotes()

    const duplicatenotes = notes.filter((note) => note.title === title)

    debugger

    if(duplicatenotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        console.log('note added')
    }
    else{
        console.log('note title taken!') 
    }
    
    savenotes(notes)
}

const savenotes=(notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadnotes = () => {
    try{
        const databuffer = fs.readFileSync('notes.json')
        const dataJSON = databuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(e){
        return []
    }
    
}


const removenote = (title) => {
    const notes = loadnotes()
    const notestokeep = notes.filter((note) => note.title !== title)

    //console.log(notestokeep.length , .length)
    if(notestokeep.length === notes.length){
        console.log(chalk.blue('no note found'))
    }
    else{
        console.log(chalk.red('note removed!'))
    }
   
    savenotes(notestokeep)
}

const listnotes = () => {
    const notes = loadnotes()
    console.log(chalk.blue("your notes"))
    notes.filter((note) => console.log(note.title))
}

const readnotes = (title) => {
   const notes = loadnotes()
   const note = notes.find((note) => note.title === title)
   if(note)
   {
       console.log(chalk.blue.bold(note.title))
       console.log(chalk.green(note.body))
   }
   else
   console.log(chalk.red.inverse("error"))
}

module.exports={
    addnotes:addnotes,
    removenote:removenote,
    listnotes:listnotes,
    readnotes:readnotes
}
