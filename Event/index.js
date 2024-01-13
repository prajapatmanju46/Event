function submitForm() {
  // Get data from Form
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var contact = document.getElementById('contact').value;
  var college = document.getElementById('college').value;
  var event = document.getElementById('option').value;

  // Create a table
  var table = document.getElementById('data');
  var newRow = table.insertRow(table.rows.length);

  // create cells 
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  var cell5 = newRow.insertCell(4);

 // insert data into the cells
  cell1.innerHTML = name;
  cell2.innerHTML = email;
  cell3.innerHTML = contact;
  cell4.innerHTML = college;
  cell5.innerHTML = event;

  // Clear the form for adding new data
  document.getElementById('myForm').reset();
}