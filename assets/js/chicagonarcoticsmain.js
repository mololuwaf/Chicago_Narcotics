// Set the path to your CSV file
// const url = "/Users/mollyfbg/Desktop/Project3-Mollyfbg/project-3";

//Convert CSV to JSON
//d3.csv("data.csv", function(data) {
//    var json = JSON.stringify(data);
 // });
//Load the DATA
// d3.json('https://github.com/mololuwaf/Chicago-crime-project-3/blob/main/Chicago_narcotics/data.json')
  const tabledata = d3.json("assets/data/data2.json")


  var filters = {}
 function updatefilters(){
  let changedelement = d3.select(this)
  console.log(changedelement)
  let elementvalue = changedelement.property("value")
  console.log(elementvalue)
  let filterid = changedelement.attr("id")
  console.log(filterid)
  if (elementvalue){filters[filterid] = elementvalue}
  else {delete filters[filterid]}
  console.log(filters)
  filtertable()

 }
function filtertable(){
  Object.entries(filters).forEach(([key, value]) => {
    filterdata = tabledata.filter(row => row[key]=== value)
    //makechart(filterdata)
    console.log(filterdata)
  })

}
  d3.selectAll("select").on("change", updatefilters)
