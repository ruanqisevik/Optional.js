const Optional = require('../index');

test('read property from undefined', () => {
    expect(Optional.op(undefined).get('testProp').value).toBe(undefined);
});

test('read property from empty object', () => {
    expect(Optional.op({}).get('testProp').value).toBe(undefined);
});

test('read property from empty array', () => {
    expect(Optional.op([]).get(2).value).toBe(undefined);
});

test('read property from nested empty array', () => {
    expect(Optional.op([[]]).get(1).get(2).value).toBe(undefined);
});

test('read property from nested empty object', () => {
    expect(Optional.op({child: {}}).get('child').get('child').value).toBe(
        undefined,
    );
});

test('read property from nested empty array', () => {
    expect(
        Optional.op([[1]])
            .get(0)
            .get(0).value,
    ).toBe(1);
});

test('read property from nested empty array', () => {
    expect(
        Optional.op({job: {title: 'develop'}, sallary: 2000})
            .get('job')
            .get('title').value,
    ).toBe('develop');
});
