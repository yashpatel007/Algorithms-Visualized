let values = [];
let w = 1;
let pw = 5;
let n;
let ti;
let curr_idx = 0;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
    //values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = floor(random(height));
    }

    console.log(values);
    let custim_inp = prompt("Input the target index eg 100\n press ok to see default", `${width/2}`);
    if (custim_inp != (width / 2)) {
        ti = custim_inp;
    } else {
        ti = width / 2;
    }

}

function tointArr(arr) {
    console.log(typeof (arr))
    arr.forEach(element => {
        console.log(element);
    });

    console.log("resturning", arr);
    return arr;

}

function draw() {
    background(0);
    // draw thearr
    for (let i = 0; i < values.length; i++) {
        stroke(200);
        line(i, height, i, height - values[i]);
    }

    // start searching

    if (floor(values[curr_idx]) == ti) {
        console.log("found");
        noLoop();
    } else {
        if (curr_idx < values.length) {
            stroke('red');
            line(curr_idx, height, curr_idx, height - values[curr_idx])
            curr_idx++;
        } else {
            console.log("not found");
            noLoop();
        }
    }

}