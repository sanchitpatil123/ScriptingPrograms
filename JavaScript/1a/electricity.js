let units=Number(prompt("enter a units: "));

if(units<=100){
    let lb=5*units;
    document.writeln(`your total bill is: ${lb}`);

}else if(units<=200 ){
    let lb=5*(100)+7*(units-100);
    document.writeln(`your total bill is: ${lb}`);
}else{
    let lb=5*(100)+7*(units-100);
    document.writeln(`your total bill is: ${lb}`);
}