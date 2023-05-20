function createBoundExpAST(type, value, children) {
    if (children === void 0) { children = []; }
    return {
        type: type,
        value: value,
        children: children,
    };
}
function addChild(node, child) {
    if (!node.children) {
        node.children = [];
    }
    node.children.push(child);
}
function isValidAST(node) {
    if (!node.value) {
        return false;
    }
    if (node.type === "compound") {
        if (node.value === "bound") {
            // "bound" should have exactly one child
            if (!node.children || node.children.length !== 1) {
                return false;
            }
        }
        else if (node.value === "add" || node.value === "sub") {
            // "add" and "sub" should have exactly two children
            if (!node.children || node.children.length !== 2) {
                return false;
            }
        }
    }
    return true;
}
function unparse(node) {
    if (node.type === "literal") {
        return node.value;
    }
    var expression = "(".concat(node.value);
    if (node.children) {
        for (var _i = 0, _a = node.children; _i < _a.length; _i++) {
            var child = _a[_i];
            expression += " ".concat(unparse(child));
        }
    }
    expression += ")";
    return expression;
}
function evaluate(node) {
    if (node.type === "literal") {
        return parseInt(node.value, 10);
    }
    if (node.value === "add") {
        var left = evaluate(node.children[0]);
        var right = evaluate(node.children[1]);
        return left + right;
    }
    if (node.value === "sub") {
        var left = evaluate(node.children[0]);
        var right = evaluate(node.children[1]);
        return left - right;
    }
    if (node.value === "bound") {
        var bound = evaluate(node.children[0]);
        // Apply the evaluation rule for "bound" form
        return Math.abs(bound);
    }
    throw new Error("Invalid expression");
}
