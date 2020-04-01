let values = [];
let w = 1;
let pw = 5;
let n;
let ti;
let curr_idx = 0;

let start;
let end;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
    //values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = floor(random(height));
    }

    // sort values
    bubble_Sort(values);
    console.log(values);


    start = 0;
    end = values.length - 1;
    let custim_inp = prompt(`Input the number between ${Math.min(values)}- ${Math.max(values)}\n press ok to see default`, `${width/2}`);
    if (custim_inp != (width / 2)) {
        ti = custim_inp;
    } else {
        ti = width / 2;
    }
    console.log(values);


}

function swap(a, j, k) {
    let temp = a[j];
    a[j] = a[k];
    a[k] = temp;

}


function bubble_Sort(a) {


    for (let i = 0; i < values.length; i++) {
        for (let j = 0; j < values.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
            }
        }

    }

}

function binarysearch() {


    let mid = Math.floor((start + end) / 2);
    stroke('red');
    line(mid, height, mid, height - values[mid]);
    if (values[mid] > ti) {
        end = mid - 1;
    } else if (values[mid] < ti) {
        start = mid + 1;
    } else {
        console.log("found at idx", mid);
        noLoop();
    }
    if (start > end) {
        console.log("Not found");
        noLoop();
    }


}

function wait(ms) {
    var d = new Date();
    var d2 = null;
    do {
        d2 = new Date();
    }
    while (d2 - d < ms);
}

function draw() {
    background(0);
    // draw thearr

    for (let i = 0; i < values.length; i++) {
        stroke(200);
        line(i, height, i, height - values[i]);
    }
    wait(1000);
    binarysearch();
    console.log(start, end);


}