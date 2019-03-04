var inquirer = require('inquirer');
var mysql = require('mysql');

// Connect to Database
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  user: 'root',
  password: 'anker321',
  database: 'Bamazon'
});

function validateInput(value) {
  var integer = Number.isInteger(parseFloat(value));
  var sign = Math.sign(value);

  if (integer && (sign === 1)) {
	return true;
  } else {
  	  return 'Enter a whole number that is not zero.';
    }
}

function userPrompt() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'item_id',
      message: 'Enter the item ID of the item you would like to purchase',
      validate: validateInput,
      filter: Number
    },
    {
      type: 'input',
      name: 'quantity',
      message: 'How many would you like to buy?',
      validate: validateInput,
      filter: Number
    }
  ]).then(function(input) {
      var item = input.item_id;
      var quantity = input.quantity;

      var querydb = 'SELECT * FROM products WHERE ?';

      connection.query(querydb, {item_id: item}, function(err, res) {
        if(err) throw err;

        if (res.length === 0) {
          console.log('Error: Item ID not found. Please select an ID that exists');
          disInventory();

        } else {
            var resData = res[0];

            if(quantity <= resData.stock_quantity) {
              console.log('Product is in stock!');

              var updateQuery = 'UPDATE products SET stock_quantity = ' + (resData.stock_quantity - quantity);

              connection.query(updateQuery, function(err,res) {
                if(err) throw err;

                console.log('Your total is $' + resData.price * quantity);
                console.log('Thanks for shopping with us :)');
                console.log("\n------------------------\n");

                connection.end();
              })
            } else {
                console.log('Sorry! Product is currently not in stock!');
                console.log('Try again soon!');
                console.log("\n------------------------\n");

                disInventory();
            }
        }
      })
    })
}

function disInventory() {
  querydb = 'SELECT * FROM products';

  connection.query(querydb, function(err, res) {
    if(err) throw err;
    console.log('Current Inventory: ');
    console.log('\n----------------------------\n');

    var showInv = '';
    for (var i = 0; i < res.length; i++) {
      showInv += '';
      showInv += 'Item ID: ' + res[i].item_id + ' / ';
      showInv += 'Product Name: ' + res[i].product_name + ' / ';
      showInv += 'Department: ' + res[i].department_name + ' / ';
      showInv += 'Price: $' + res[i].price + '\n';
      console.log(showInv);
    }

    

    console.log("\n-------------------------------\n");

    userPrompt();
  })
}

function runApp() {
  disInventory();
}

runApp();