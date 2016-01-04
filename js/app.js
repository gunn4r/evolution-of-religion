/*
    Author: Gunnar Gabrielson
    Website: http://gunnargabrielson.com
    Email: gunnargabrielson@gmail.com
    Twitter: @gunn4r
*/

angular.module('evoReligion', []);

(function () {
    "use strict";

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


}());


//WIKIPEDIA API
// {
//     "title":"Mormonism",
//     "extract":"Mormonism is the predominant religious tradition of the Latter Day Saint movement of Restorationist Christianity. This movement was founded by Joseph Smith in Upstate New York in the 1820s. During the 1830s and 1840s, Mormonism distinguished itself from traditional Protestantism. Mormonism today represents the new, non-Protestant faith taught by Smith in the 1840s. After Smith's death, most Mormons followed Brigham Young on his westward journey to the Utah Territory, calling themselves The Church of Jesus Christ of Latter-day Saints (LDS Church).",
//     "thumbnail":{
//         "source":"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Joseph_Smith_first_vision_stained_glass.jpg/203px-Joseph_Smith_first_vision_stained_glass.jpg",
//         "width":203,
//         "height":320
//         }
// }
//
// https://en.wikipedia.org/api/rest_v1/page/summary/mormonism
