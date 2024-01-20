#----------- Datentypen

#str = text   
#int = Ganze zahlt zb 1 2 3 4 ...
#float = comma zahl. 1,2  4,6   1,999
#bool = lässt einer variable den wert fals or true zuweisen
   
#------------- Operatoren 

# +   = bei strings nicht wie in der normalen mathematim verbindet es hier die strings und rechnet sie nicht zusammen, 1 + 1 = 11. das + verbindet die strings. bei int werden sie zusamen gerechnet
# -   =  Subtrahiert int operant 1 von operant 2 
# *   = Rechnet Die int Operanten mal einander
# /   = Teilt die Int operanten durch einander
# %   = Gibt den rest einer Division raus 11 / 5 = 2 rest 1, der rest ist %
# =   = setzt gleich mit,  also name = input   setzt denn input indem fall mit dem der Variable name gleich, .
# ,  = Trennt die Argumente einer Funktion und fügt im return automatisch ein Lerzeichen an stelle des commas 
#"24" = zahlen in anführungszeichen wandeln die datei in einen Str um-
   
#---------- Funktionen

# return         gibt einen wert zurück
# def            erlaubt es uns eine eigene funktion und seine argumente zu definieren, def Hello, erschafft eine funktion hallo, drunter schreibt man dann was die funktion machen soll, und mit def Hello(abc="Baum") habe ich jetzt ein Argument dazu erstellt das wenn man es rein schreibt sich automatisch der Variable die sie ausgeben soll anpasst, wenn beim benutzen keine variable geschribeen wird dann wir der Grund parameter ausgegeben, hie jetzt Baum. im grund erstellt Deff ein macro das man wieder verwenden kann
# print(sep=" ", end="/n")      Dürckt die Argumente in den Klammern aus ,//Namendparameter// sep heist seperator und gibt an womit die Argumente beim benutzen vom , geteilt werden sollen, (normalerweise auf lehrzeichen eingestellt, deshalb trennt das comma die argumente in der ausgabe auch mit einem lehrzeichen) end sagt womit der print command ie Line beenden soll, normalerweise auf /n definiert was heist das jedes ende von einer Lini /n ist (/n bedeutet ein Zeilenumbruch)
# if, else      If= die bedingung erfüllt ist tu das, wen nicht else tu das.
# input        fordert vom benutzer einen input, meistens wird dieser dann in einer variable gespeichert, beispiel: name = input("wie heist du?") Die antwort auf die frage wie heist du wird in der variable Name gespeichert. nimmt nur string daten auf, zahlen müssen umgewandelt werden 
# Pseudocode      Pseudo code ist keine eingebaute funktion sondern ein konzept das nicht direkt was mit programieren zu tun hat, es beschreibt nur das mit mit kommentaren die strucktur vorgibt wo welcher teil was machen soll, so dann man denn dann dannach ein coden kann wo er hingehört. speudocode ist eine form der struktuierung 

# ----------------// Str Methods //

# .strip()      entfehrnt alles was in den brackets ist aus dem string, anwendbar auf variablen die String beinhalten
#.capitalize()   Schreibt den ersten buchstaben des strings Groß, anwendbar auf variablen die String beinhalten
#.title()        schreibt immer den ersten buchstaben jedes wortes im String Groß. anwendbar auf variablen die String beinhalten
#.split(" ")     splitet den str in mehrere kleinere strings. hier zum beispiel splitet er immer beim lehrzeichen, also bei xxx xxx xxx bräuchte man drei variablen da dann drei sting entstehen, bei Dennis Marakhovski bräuchte man zwei für den Vor und Nachnahmen

#--------------- // Float Methods //

#round(xxx , 2)  erstes argument gibt an welche Float zweite rundet die zahl bis zur zweiten nach komme stelle

#--------------- Arguments  //positinal//

#  (f"whats your {name}")    f{xxx} gibt an das der inhalt der ekigen klammern anders behandelt wer den soll, meistens als variable und nicht als string f = formatstring 
# +xxx+          eine andere art eine Variable in einen String einzufügen

#------------- Bugs

# scope         ein scope ist ein fehler bei dem eine variable die in einer def funktion erstellt wurde veruscht wird auserhalb dieser benutz zu werden 

name = input("Whats your name? ").title().strip()
first,last = name.split(" ")

print(f"hello, {name}")  
print("hello, "+name)       
print("hello,",name)              

print("hello, ",end="")
print(name)


def hello(abc="world"):
    print("hello,", abc)

hello(last)

#Fragt nach dem input für x und y als strings und wandelt sie sofort zu float um
x = float(input("Whats the first number? "))           
y = float(input("Whats the second number? "))
print(round(x + y))
# or 
# z = x / y
# print(f"{z;.2f})  makiert z als variable, und gibt sie mit 2 nach komma stelle n aus 


def main():
    print (("x squared is"),square(x))



def square(n):
    return n * n 

main ()


