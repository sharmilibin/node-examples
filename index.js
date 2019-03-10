var rect=require('./rectangle');
function solveRect(l,b)
{
    console.log('solving the tectangle with '+l+ 'and'+b);
    rect(l,b, (err,rectangle) => {
        if (err) {
            console.log("erroe ", err.message);
	    }
        else {
            console.log("The area of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.area());
            console.log("The perimeter of the rectangle of dimensions l = "
                + l + " and b = " + b + " is " + rectangle.perimeter());
        }
    });
    console.log("after the call to rect()");
};
solveRect(2,5);
solveRect(0,5);
solveRect(-4,6);
solveRect(5,5);