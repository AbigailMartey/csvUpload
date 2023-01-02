



//eventlistener = select where the event shold happen and the reaction 


//Task 1
//click a button and upload some data from csv or excel file and read the third column and sum up and write an output back onto the screen
const csvFile = document.getElementById('csvfile')
const displayOutput = document.getElementById('csvprocessed')
const reader = new FileReader();
csvFile.onchange=(e)=>{
    const file = e.target.files[0];
   {
        reader.readAsText(file);  
    }
}
reader.onload = (e) => {
   displayOutput.value=e.target.result
}



//document.querySelector('.add').addEventListener('click', read (csvFile) )

//librabry that processes and parses csv files.
// sum=0
// for(let i=0; i<row.length;i++)
// {
//   sum+=row[i]  
// }
// console.log(sum)