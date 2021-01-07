interface Transformer {
  apply(input: number): string;
}

const impl: Transformer = {
  apply(input) {
    return input.toString();
  },
};

interface NestedTransformer {
  nested: {
    apply(input: number): string;
  };
}

const nestedImpl: NestedTransformer = {
  nested: {
    // Missing return type on function.eslint@typescript-eslint/explicit-module-boundary-types
    // Argument 'input' should be typed.eslint@typescript-eslint/explicit-module-boundary-types
    apply(input) {
      return input.toString();
    },
  },
};

export default {
  impl,
  nestedImpl,
};
