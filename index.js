var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;
var precalculatedIso = (new Date()).toISOString(); 

function ES6WithVar() {
    var test = `<body>
        <article>
        <time datetime='${ precalculatedIso }'>${ precalculatedIso }</time>
        </article>
        </body>`;
}


function StringConcatenationWithVar() {
    var test = "<body>"+
        "<article>"+
        "<time datetime='" + precalculatedIso +"'>"+ precalculatedIso +"</time>"+
        "</article>"+
        "</body>";

}

function ES6WithFunction() {
    var test = `<body>
        <article>
        <time datetime='${ (new Date()).toISOString() }'>${ (new Date()).toISOString() }</time>
        </article>
        </body>`;
}

function StringConcatWithFunction() {
    var test = "<body>"+
        "<article>"+
        "<time datetime='" + (new Date()).toISOString() +"'>"+ (new Date()).toISOString() +"</time>"+
        "</article>"+
        "</body>";
}

// add tests 
suite.add('ES6WithVar', ES6WithVar )
.add('StringConcatenationWithVar', StringConcatenationWithVar)
.add('ES6WithFunction', ES6WithFunction)
.add('StringConcatWithFunction', StringConcatWithFunction)
// add listeners 
.on('cycle', function(event) {
    console.log(String(event.target));
})
.on('complete', function() {
    console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async 
.run({ 'async': true });
