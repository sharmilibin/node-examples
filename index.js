var rect={
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)

};
function solveRect(l,b)
{
    console.log('solving the tectangle with '+l+ 'and'+b);
    if (l<=0 || b<=0)
    {
        console.log('dimension should be greater than zero');
    }
    else{
        console.log('perimeter of rectangle is :'+rect.perimeter(l,b));
        console.log('Area of Rectangle is :' +rect.area(l,b));
    }
}
solveRect(2,5);
solveRect(0,5);
solveRect(-4,6);
solveRect(5,5);