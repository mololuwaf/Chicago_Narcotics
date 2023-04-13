// Set the path to your CSV file
const url = "/Users/mollyfbg/Desktop/Project3-Mollyfbg/project-3";

//Convert CSV to JSON
d3.csv("data.csv", function(data) {
    var json = JSON.stringify(data);
    console.log(json);
  });
//Load the DATA
d3.json('https://github.com/mololuwaf/Chicago-crime-project-3/blob/main/Chicago_narcotics/data.json')
  d3.json("data.json", function(data) {
    console.log(data);
  });
  
