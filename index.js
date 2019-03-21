var rect=require('./rectangle');
function solveRect(l,b)
{
    console.log('solving the rectange ' +l+ 'and' +b);
    rect(l,b, (err,rectangle) => {
        if(err)
        {
            console.log('Error',err.message);
        }
        else{
            console.log('The are of the rectangle is l=' +l+'and b=' +b+ 'is' +rectangle.area());
            console.log('The are of the rectangle is l=' +l+'and b=' +b+ 'is' +rectangle.perimeter());
        }
    });
    console.log('after call rect()');
};
solveRect(2,5);
solveRect(0,5);
solveRect(-4,6);
solveRect(5,5);