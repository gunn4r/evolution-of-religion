/*
    Author: Gunnar Gabrielson
    Website: http://gunnargabrielson.com
    Email: gunnargabrielson@gmail.com
    Twitter: @gunn4r
*/

function Religion(name, type, age, geo, shape){
        this.name = name;
        this.type = type;
        this.age = age;
        this.geo = geo;
        this.shape = shape;
}

Religion.prototype.createReligion = function(svg, cx, cy, r){
    return svg.append(this.shape)
        .attr({
            'cx' : cx,
            'cy' : cy,
            'r'  : r,
        });
};

function createSVG(){
    var mySVG = d3.select('div.main')
            .append('svg');

    var catholic = new Religion("catholic", "christian", -4000, "European", "circle").createReligion(mySVG, '350', '350', '100');
}//end createSVG

createSVG();
