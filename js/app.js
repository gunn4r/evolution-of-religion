/*
    Author: Gunnar Gabrielson
    Website: http://gunnargabrielson.com
    Email: gunnargabrielson@gmail.com
    Twitter: @gunn4r
*/

"use strict";

angular.module('evoReligion', []);

//student.prototype = Object.create(Person.prototype);
//Extending a constructor to a child constructor (child inherts properties of parent)
//

function Religion(name, type, age, geo, nodeArray) {
    this.name = name;
    this.type = type;
    this.age = age;
    this.geo = geo;
    this.node = this.createReligion.circle(nodeArray);
}

Religion.prototype.createReligion = {
    circle: function (array) {
        return array[0].append('circle')
            .attr({
                'cx': array[1],
                'cy': array[2],
                'r': array[3]
            });
    },
    square: function (svg, width, height, x, y) {
        return svg.append('rect')
            .attr({
                'width': width,
                'height': height,
                'x': x,
                'y': y
            });
    }
};


//     var mySVG = d3.select('div.main')
//             .append('svg');
//
//     var catholic = new Religion("catholic", "monoWtheism", -4000, "European", [mySVG, 100, 100, 50]);

// var theravada = new Religion("theravada", "polytheism", -250, "Indian");
// theravada.theSquare = theravada.createReligion.square(mySVG, 150, 150, 300, 300);


// catholic.node.transition().attr({
//     cx:300,
//     cy:300,
//     r:200
// })
// .duration(4000);
//
// catholic.node.transition().attr({
//     cx:600,
//     cy:300,
//     r:50
// })
// .delay(4000).duration(2000).ease("elastic");

// theravada.theSquare.transition().attr({
//     x:800,
//     y:500,
//     height:250,
//     width:250
// })
// .delay(6000).duration(2000).ease("elastic");