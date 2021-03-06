it('basic', function() {
    const stack = new Stack();

    expect(stack.push(2)).to.equal(1);
    expect(stack.size).to.equal(1);
    expect(stack.push(3)).to.equal(2);

    expect(stack.toArr()).to.eql([3, 2]);

    expect(stack.pop()).to.equal(3);
    stack.clear();
    expect(stack.pop()).to.be.an('undefined');
    expect(stack.peek()).to.be.an('undefined');
    expect(stack.size).to.equal(0);
});

it('forEach', function() {
    const stack = new Stack();

    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);

    stack.forEach(
        function(val, i) {
            expect(val).to.eql(this[stack.size - i - 1]);
        },
        [1, 2, 3, 4]
    );

    let sum = 0;

    stack.forEach(function(val) {
        sum += val;
    });

    expect(sum).to.equal(10);
});
