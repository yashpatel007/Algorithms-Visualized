let values = [];
let w = 1;
let i = 0;
let j = 0;
let pw = 5;
let n;

function setup() {
    createCanvas(windowWidth, windowHeight);
    values = new Array(floor(width / w));
    //values = new Array(width);
    for (let i = 0; i < values.length; i++) {
        values[i] = random(height);
    }

    let custim_inp = prompt("Input the array with comma seperator eg 1,2,3\n press ok to see default", "");
    if (custim_inp != "") {
        // we have an inp folks 
        // get rid of wide spaces
        custim_inp = custim_inp.replace(" ", "");
        // split the array
        let arr = custim_inp.split(",");
        values = tointArr(arr);
    } else {


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


function swap(a, j, k) {
    let temp = a[j];
    a[j] = a[k];
    a[k] = temp;

}


function bubble_Sort(a) {


    if (i < values.length) {
        for (j = 0; j < values.length - i - 1; j++) {
            if (a[j] > a[j + 1]) {
                swap(a, j, j + 1);
            }
        }
        i++;

    } else {
        noLoop();
    }

}


function draw() {
    background(0);
    console.log(values);
    bubble_Sort(values);
    console.log(values);
    for (let i = 0; i < values.length; i++) {
        stroke(255);
        line(i, height, i, height - values[i]);
    }
}