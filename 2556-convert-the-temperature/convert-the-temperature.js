/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    let a=[];
    a[0]=celsius+273.15;
    a[1]=celsius*1.80+32.00;
    return a;
    
};