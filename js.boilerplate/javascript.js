
let password, Name; //erschafft die variable password und Name var ist de alte command dafür.
password = "Hello";   // Speichert Hello in der variable password.
Name = "Dennis";     // Speichert Dennis in der Variable Name.
password = Name;    // Ändert den inhalt der Variable Name auf den Inhalt der Variable password.
const Birthday = "16.12.2005";   //erschafft eine unänderliche constante
//typeof // zeigt den jeweiligen datentyp an der variable


const longcomma = 1.534464562434634526;
const pointonecomma = longcomma.toFixed(1);   // .toFixed() rundet die comma zahl auf die gewünschte nach komma stelle.
let myNumber = "74";     // "  " gibt den input 74 als datatyp string nicht als number
myNumber += 3; // wie bei python werden die strings zusamen addiert und es kommt 743 raus wenn es beides strings sind, sind es numbers dann werden sie zusammen gerechent. 
myNumber = Number(myNumber) + 3; // Wandelt den String "74" in einen datatyp number
console.log(myNumber)


//--------------------------------

alert(password); //zeigt was in der Variable Liegt als seperate nachricht oben im Fenster.
console.log()   // zeigt den content im Browser log an

//-------------------------------- Operatoren
// "unary", der operator ist unary wenn wenn nur ein Operand benutz wird, wenn zwei operanten vor kommen dann ist die rechnung binary.


// + Addition  wenn ein Operand eine string ist wird der andere operand in einer gleichung automatisch in einen string umgewandelt wenn ich links vom string steht, beispiel: x = "1" + 2 + 3; dann wird die 2 und drei in einen string umgewandelt und das ergebnis ist 123, bei y = 1 + 2 + "3"; Bleibt alles auf der linken seite der drei so weil der computer von oben nach unten, von links nach recht arbeitet, die antwort wäre 33
let y = 1;           // ertellt die variable y = 1 als string
alert( +y );      // rechnet + zur variable und gibt es als alert aus.Macht nichts weil beides Number sind.

alert( +true );     // wandelt string true in die number 1 um,
alert( +"" );       // wandelt den String "" also die lehre zeile in die number 0 um.

let apples = "2";
let oranges = "3";
alert( +apples + +oranges );    //wandelt beide strings in den jeweiligen variablen in Numbers um und addiert sie mit einander.
// - Subtraction               // alle anderen operatoren wandeln ihre zahlen in numbers um //
// * Multiplication
// ** Exponentation
// / Division
// % Modulus
// ++ increment by 1       // gleich wie x = x + 1 oder x += 1       // kann nur auf variablen angewand werden nicht auf einen number wert oder einen anderen string wert
// --  Decrement by 1      / gleich wie x = x - 1 oder x -= 1           // kann nur auf variablen angewand werden nicht auf einen number wert oder einen anderen string wert

// Arithemische operationen:

let x = 100 + 50,    // 100 ist ein Operand, + ist der operator, und 50 wieder ein Operand.
    a = 2,
    b = x * a;


let n = 5,
    z = x ** 2;   // x ** y macht das gleiche wie  Math.pow(x,2);

    console.log(z)

    // verschiedene zahlen typen

    int     // ganze zahlt ohne komma und kein Bruch
    float   // comma zahlen 
    Doubles  // Genauere floats in den hinteren nach comma stellen
    str      // eine ansamlung von Charakteren, "50" = fünfzig
    null     // null value is ein wert der representiert das ein wert leer ist oder wir seine bedeutung nicht kennen.ss

    Decimal // 1-9 in jeder stelle
    Binary  // einsen und nullen
    Octal   // basis ist 8, benutz in jeders telle 0-7
    Hexadecimal // basis ist 16, benutzt 0-9 und a-f, bsp Hexa farben code.

    floats, int // beides In javascript "Number"  Biglnt noch für sehr sehr große int

    Boolean() // flasch oder wahr

    // vergleichs operatoren 

    === strict equality // fragt ob beide werte identisch sind
    !== Strict-non-equality // Fragt ob beide werde nicht identisch sind
    < //Less than // testet ob der linke wert kleiner ist als der rechte
    > Greater then // testet ob der linke wert größer ist als der rechte.
    <== lesser then or equal // testet ob der linke wert kleiner ist oder gleich
    >== greater then or equal // testet ob der linke wert größer oder gleich ist

    // Aufgaben operatoren 

    += Addition assigment // gibt den linken wert zu dem rechten wert und gibt dann denn neuen wert raus 
    -= Subtraction assigment // subtrahiert den wert link vom wert rechts und gibt denn nneuen wert aus 
    *= Multiplication assigment // multipliziert den wert links mit dem wert rechts und gibt denn neuen wert aus 
    /= Division assigment // teilt den linken wert mit dem rechten wert und gibt den neuen wert aus
   // der operator kann vor oder nach der Nummer stehen, der unterschied ist ob er bei x *= 4 zu erst ausgibt und dann umrechnet (prefix) oder bei *= 4 zuerst umrechnet dann ausgibt (postfix).


    





