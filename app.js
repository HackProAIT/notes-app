const b=require('chalk')
const yargs=require('yargs')
const note=require('./notes')
//console.log(process.argv)


yargs.version('1.2.3')


yargs.command({
    command: 'add',
    describe: 'to add notes',
    builder:{
        title:{
            describe:'to give title to notes',
            demandOption:true,
            type:'string'
        },
        body:{
            describe:'to make the body',
            demandOption:true,
            type:'string'
        }
    },

    handler(argv) {
        note.addnotes(argv.title,argv.body)
    }
    
})

yargs.command({
    command:'remove',
    describe:'to remove note',
    builder:{
        title:{
            describe:'to give title to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv) {
        note.removenote(argv.title)
    }
})

yargs.command({
    command:'list',
    describe:'to list the notes',
    handler(){
        note.listnotes()
    }
})

yargs.command({
    command:'read',
    describe:'to read notes',
    builder:{
        title:{
            describe:'to give title to remove',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
        note.readnotes(argv.title)
    }
})


yargs.parse()
//console.log(yargs.argv)