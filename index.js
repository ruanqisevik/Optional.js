// class Optional {
//     constructor(optional) {
//         this.value = optional;
//     }
//     get(propKey) {
//         const current = this;
//         var ret;
//         try {
//             ret = current[propKey];
//         } catch (error) {
//             ret = undefined;
//         }
//         return Optional.op(ret);
//     }
//     static op(optional) {
//         return new Optional(optional);
//     }
// }

function Optional(optional) {
    this.value = optional;
}

Optional.op = (optional) => {
    return new Optional(optional);
};

Optional.prototype.get = function (propKey) {
    const current = this.value;
    var ret;
    try {
        ret = current[propKey];
    } catch (error) {
        ret = undefined;
    }
    return Optional.op(ret);
};

module.exports = Optional;
