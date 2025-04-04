const usedNamespaces: string[] = [];

export default function createNamespacedAction(namespace: string) {
    if (usedNamespaces.includes(namespace)) {
        throw new Error(`Namespace "${ namespace }" already exists`);
    }

    usedNamespaces.push(namespace);

    const usedActions: string[] = [];

    return function createAction(action: string): string {
        const namespacedAction = `${ namespace }_${ action }`;

        if (usedActions.includes(namespacedAction)) {
            throw new Error(`Action "${ namespacedAction }" already exists in namespace "${ namespace }"`);
        }

        usedActions.push(namespacedAction);
        return namespacedAction;
    };
}
