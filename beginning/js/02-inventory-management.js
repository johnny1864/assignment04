/*eslint-env browser*/
//GLOBAL VARIABLES
var product1 = [];
product1[0] = 2233;
product1[1] = 'hat';
product1[2] = 12;
product1[3] = 14.99;

var product2 = [];
product2[0] = 3223;
product2[1] = 'socks';
product2[2] = 36;
product2[3] = 9.99;

var product3 = [];
product3[0] = 4824;
product3[1] = 'shirt';
product3[2] = 10;
product3[3] = 15.99;

var product4 = [];
product4[0] = 6343;
product4[1] = 'jeans';
product4[2] = 22;
product4[3] = 39.99;

var product5 = [];
product5[0] = 9382;
product5[1] = 'jacket';
product5[2] = 5;
product5[3] = 49.99;



//SET INVENTORY
function setInventory() {
    "use strict";
    
    //window.console.log(localStorage.getItem('inventory'));
    
    var inventory = [];
    //CHECK IF STORAGE IS EMPTY
    if (localStorage.getItem('inventory') !== null) {
        inventory = localStorage.getItem('inventory');
        inventory = JSON.parse(inventory);
    } else {
        inventory[0] = product1;
        inventory[1] = product2;
        inventory[2] = product3;
        inventory[3] = product4;
        inventory[4] = product5;
    }
    return inventory;
}

//DISPLAY MENU ON THE CONSOLE
function display_menu() {
    "use strict";
    window.console.log("Welcome to the Employee Management Application\n\n");
    window.console.log("COMMAND MENU");
    window.console.log("view - View all product");
    window.console.log("update - Update inventory");
    window.console.log("exit - Exit the program and saves inventory\n");
}

//DISPLAYS CURRENT INVENTORY 
function viewProducts(inventory) {
    "use strict";
    inventory.forEach(function (item) {
        window.console.log(item[0], item[1], item[2], item[3]);
    });
    window.console.log('');
}

//ALLOWS USER TO UPDATE INVENTORY
function updateStocks(inventory) {
    "use strict";
    var updateSku = window.prompt('Enter sku number to update: ');
    var updateNumber;
    for (var i = 0; i < inventory.length; i++) {
        if (inventory[i][0] == (+updateSku)) {
            updateNumber = window.prompt('Enter updated stock number: ');
            if (isNaN(+updateNumber)) {
                window.alert('Invalid Amount');
                updateStocks();
            } else {
                inventory[i][2] = (+updateNumber);
                return;
            }
        }
    }

    window.alert('Invalid sku number');
    updateStocks();

}

//SAVES INVENTORY TO LOCAL STORAGE
function save(inventory) {
    "use strict";
    //window.console.log(inventory);
    localStorage.inventory = JSON.stringify(inventory);
    
    window.console.log(' You data has been saved ');
    //    localStorage.setItem('inventory', str);

}

function main() {
    "use strict";

    var inventory = setInventory();

    display_menu();
    window.console.log('');

    var command;
    var exit = true;
    do {
        command = window.prompt('Enter a command');

        switch (command) {
            case 'view':
                viewProducts(inventory);
                break;
            case 'update':
                updateStocks(inventory);
                break;
            case 'exit':
                save(inventory);
                exit = false;
                break;
            default:
                window.alert('Invaild Command');
        }

    } while (exit);

}

main();
