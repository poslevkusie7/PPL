type BoundExpAST = {
    type: "compound" | "literal";
    value: string;
    children?: BoundExpAST[];
};
  
export const createBoundExpAST = (type: "compound" | "literal", value: string, children: BoundExpAST[] = []): BoundExpAST => ({
    type,
    value,
    children,
});
  
export const addChild = (node: BoundExpAST, child: BoundExpAST): void => {
    node.children = node.children || [];
    node.children.push(child);
};
  
export const isValidAST = (node: BoundExpAST): boolean => {
    if (!node.value) {
        return false;
    }
  
    if (node.type === "compound") {
        if (node.value === "bound") {
            return !!(node.children && node.children.length === 1);
        } else if (node.value === "add" || node.value === "sub") {
            return !!(node.children && node.children.length === 2);
        }
    }
  
    return true;
};
  
export const unparse = (node: BoundExpAST): string =>
    node.type === "literal"
        ? node.value
        : `(${node.value}${node.children ? " " + node.children.map(unparse).join(" ") : ""})`;
  
export const evaluate = (node: BoundExpAST): number => {
    if (node.type === "literal") {
        return parseInt(node.value, 10);
    }
  
    if (node.value === "add") {
        const [left, right] = node.children!.map(evaluate);
        return left + right;
    }
  
    if (node.value === "sub") {
        const [left, right] = node.children!.map(evaluate);
        return left - right;
    }
  
    if (node.value === "bound") {
        const [bound] = node.children!.map(evaluate);
        return Math.abs(bound);
    }
  
        throw new Error("Invalid expression");
};
  