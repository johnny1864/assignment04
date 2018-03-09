/*eslint-env browser*/

//GLOBAL VARIABLES
var product1 = [];
product1['sku'] = 2233;
product1['product'] = 'hat';
product1['quantity'] = 12;
product1['cost'] = 14.99;

var product2 = [];
product2['sku'] = 3223;
product2['product'] = 'socks';
product2['quantity'] = 36;
product2['cost'] = 9.99;

var product3 = [];
product3['sku'] = 4824;
product3['product'] = 'shirt';
product3['quantity'] = 10;
product3['cost'] = 15.99;

var product4 = [];
product4['sku'] = 6343;
product4['product'] = 'jeans';
product4['quantity'] = 22;
product4['cost'] = 39.99;

var product5 = [];
product5['sku'] = 9382;
product5['product'] = 'jacket';
product5['quantity'] = 5;
product5['cost'] = 49.99;

var inventory = [];
inventory[0] = product1;
inventory[1] = product2;
inventory[2] = product3;
inventory[3] = product4;
inventory[4] = product5;

//DISPLAY MENU ON THE CONSOLE
function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application\n");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all product");
    window.console.log("update - Update inventory");
    window.console.log("exit - Exit the program and saves inventory\n");
}

//DISPLAYS CURRENT INVENTORY 
function viewProducts() {
    "use strict";
    inventory.forEach(function (item) {
        window.console.log(item);
    });
    window.console.log('');
}

//ALLOWS USER TO UPDATE INVENTORY
function updateStocks() {
    "use strict";
    var updateSku = window.prompt('Enter sku number to update: ');
    var updateNumber;
    //window.console.log('update test' + inventory);
    
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i]['sku'] == (+updateSku)) {
            updateNumber = window.prompt('Enter updated stock number: ');

            if (isNaN(+updateNumber)) {
                window.alert('Invalid Amount');
                updateStocks();
            } else {
                inventory[i]['quantity'] = (+updateNumber);
                return;
            }
        } 
    }
    window.alert('Invalid sku number');
    updateStocks();
}

main(){
    "use strict";
    display_menu();
    var command;
    var exit = true;
    window.console.log(localStorage.getItem('inventory') + '/n');
    if (localStorage.getItem('inventory').length > 0) {
        inventory = localStorage.getItem('inventory');
    }
    do {
        command = window.prompt('Enter a command:');

        if (command === 'view') {
            viewProducts();
        }else if(command === 'update')

    } while (!exit)
}

main();
