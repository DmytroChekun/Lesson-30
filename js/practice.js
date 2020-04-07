// =================================================================================================Task 1===================================================================================

const textarea = document.getElementById( "textarea" );
const textbox = document.getElementById( "textbox" );
let text = textbox.innerText;
let switchToTextarea = function() {
    textbox.classList.add( "display-switcher" );
    textarea.classList.remove( "display-switcher" );  
    event.preventDefault();
}
let switchToTextbox = function() {
    textbox.classList.remove( "display-switcher" );
    textarea.classList.add( "display-switcher" );  
    event.preventDefault();
}

document.addEventListener( 'keydown', function( event ) {
    
if ( event.code == 'KeyE' && ( event.ctrlKey || event.metaKey )) {
    textarea.innerText = text;
    switchToTextarea();
}else if ( event.code == 'NumpadAdd' && ( event.ctrlKey || event.metaKey )) {
        textbox.textContent = textarea.value;
        switchToTextbox();
    }
});

// ===============================================================Task 2 плюс останнє завдання з 30-го уроку, яке я тоді не зробив===========================================================
// =================================================================================================Table====================================================================================
class Employee{
    constructor( name, position, salary ){
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

const tableWrapper = document.getElementById( "tableWrapper" );
const table = document.createElement( "table" );
table.id = "table";
table.className = "table-employee";
tableWrapper.append(table);

let empList = [
    new Employee( "Rick Sanchez", "HR Manager", 9000 ),
    new Employee( "Morty Sanchez", "HR Manager", 9000 ),
    new Employee( "Tony Stark", "Teamleader", 8000 ),
    new Employee( "Dwayne Carter", "Creative/Marketing Manager", 8000 ),
    new Employee( "Will Smith", "AI Specialist", 7000 ),
    new Employee( "Dima Chekun", "Senior Front-End Developer", 12000 ),
    new Employee( "Vasyl Chekun", "Senior IOS Developer", 12000 ),
    new Employee( "Sir Darryl Farris", "UX-UI Design", 7000 ),
    new Employee( "Jermaine Lamarr Cole", "UX-UI Design", 7000 ),
    new Employee( "Conor McGregor", "Middle Front-End Developer", 7000 ),
    new Employee( "Jesse Pinkman", "CPU Crystal Specialist", 7000 ),
];
class EmployeeTable{
    constructor(array) {
        this.array = array;
    }
    getHtml() {
        let tableBody = document.getElementById( "table" );
        tableBody.setAttribute( "style", "margin: 0 auto; border: 3px solid steelblue;" );
        let tableHead = document.createElement( "tr" );
        let ths1 = document.createElement( "th" );
        ths1.style.border = "3px solid steelblue";
        ths1.setAttribute( "id", "sortClicker1" );
        ths1.textContent = "Employee name";
        let ths2 = document.createElement( "th" );
        ths2.style.border = "3px solid steelblue";
        ths2.setAttribute( "id", "sortClicker2" );
        ths2.textContent = "Position";
        let ths3 = document.createElement( "th" );
        ths3.setAttribute( "id", "sortClicker3" );
        ths3.textContent = "Salary in $";
        tableBody.append(tableHead);
        tableHead.append(ths1, ths2, ths3);
        for ( let i in this.array ){
            let tr = document.createElement( "tr" );
            // tr.setAttribute("id", "sortcol");
            tableBody.append(tr);
            for ( let x in this.array[i] ){
                let td = document.createElement("td");
                
                td.textContent = this.array[i][x];
                td.setAttribute( "style", "margin: 0 auto; border: 3px solid steelblue; padding: 10px 90px;" );
                tr.append(td);
            }
        }
}
}

let TableDisplay = new EmployeeTable(empList);
TableDisplay.getHtml();

// ==============================================================================================TableSorting=================================================================================
let th1 = document.getElementById( "sortClicker1" );
let th2 = document.getElementById( "sortClicker2" );
let th3 = document.getElementById( "sortClicker3" );
let tdCol = table.getElementsByTagName( "td" );
let trCol = table.getElementsByTagName( "tr" );
let trAr = [];

for ( let i = 1; i < trCol.length; i++ ){
    trAr.push(trCol[i]);
};


let orderSwitcher1 = true;
th1.addEventListener( 'click', function(){
    if (orderSwitcher1){let sortFunc = trAr.sort( function( a, b ) {
        if ( a.children[0].innerHTML >= b.children[0].innerHTML ) {
            return 1;
        } else {
            return -1;
        }
    });
    for( let tr of sortFunc ) {
        table.appendChild(tr);
    };
    orderSwitcher1 = false;
}else{
    let sortFunc = trAr.sort( function( a, b ) {
        if ( a.children[0].innerHTML >= b.children[0].innerHTML ) {
            return -1;
        } else {
            return 1;
        }
    });
    for( let tr of sortFunc ) {
        table.appendChild(tr);
    };
    orderSwitcher1 = true;
}
});


let orderSwitcher2 = true;
th2.addEventListener( 'click', function (){
    if(orderSwitcher2){
    let sortFunc = trAr.sort( function ( a, b ) {
        if ( a.children[1].innerHTML >= b.children[1].innerHTML ) {
            return 1;
        } else {
            return -1;
        }
    });
    for( let tr of sortFunc ) {
        table.appendChild( tr );
    };
    orderSwitcher2 = false;
} else{
    let sortFunc = trAr.sort( function ( a, b ) {
        if ( a.children[1].innerHTML >= b.children[1].innerHTML ) {
            return -1;
        } else {
            return 1;
        }
    });
    for( let tr of sortFunc ) {
        table.appendChild( tr );
    };
    orderSwitcher2 = true;
}
});

let orderSwitcher3 = true;
th3.addEventListener( 'click', function(){
        if ( orderSwitcher3 ){
            let sortFunc = trAr.sort( function( a, b ) {
                return a.children[2].innerHTML - b.children[2].innerHTML;
            });

            for( let tr of sortFunc ) {
                table.appendChild(tr);
            };
            orderSwitcher3 = false;
    }else{
        let sortFuncRev = trAr.sort( function( a, b ) {
            return - a.children[2].innerHTML + b.children[2].innerHTML;
        });

        for( let tr of sortFuncRev ) {
            table.appendChild(tr);
        };
        orderSwitcher3 = true;
    }
});



// =================================================================================================Task 3=============================================================================
function resizableDiv(div) {
    let element = document.querySelector(div);
    let resizers = document.querySelectorAll( div + ' .resizer' )
    for ( let i = 0; i < resizers.length; i++ ) {
        let currentResizer = resizers[i];
        currentResizer.addEventListener( 'mousedown', function(e) {
            e.preventDefault();
            window.addEventListener( 'mousemove', resize );
            window.addEventListener( 'mouseup', stopResize );
        })

        function resize(e) {
            if ( currentResizer.classList.contains( 'resizer3' )) {
                element.style.width = e.pageX - element.getBoundingClientRect().left + 'px';
            }else if ( currentResizer.classList.contains( 'resizer4' )) {
                element.style.width = element.getBoundingClientRect().right - e.pageX + 'px';
              }
        }
        function stopResize() {
            window.removeEventListener( 'mousemove', resize );
        }
    }
}

resizableDiv( '.rubberbox' );

//                               Роблять тільки нижні стрілочки. Хотів зробити по модному всі стрілочки, але не було бажання длупатись. Все рівно робив його з гуглом.