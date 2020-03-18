
const yargs =require('yargs')
yargs.version('1.1.0')

yargs.command({
     command: 'add',
    describe: 'Add a new note',
    handler: function(){
         console.log("Adding a new note")
    }
}
)
yargs.command({
     command: 'remove',
     describe: 'remove a note',
     handler: function(){
          console.log("Removing a note")
     }
})
yargs.command({
     command: 'list',
     describe: 'list note',
     handler: function(){
          console.log('listing notes')
     }


})
yargs.command({
     command: 'read',
     describe: 'to read notes',
     handler: function(){
          console.log('reading notes')
     }
})
console.log(yargs.argv)