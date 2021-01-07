# explicit-module-boundary-types
To reproduce:

```
npm install
npm run lint
```

It will output the following

```

> explicit-module-boundary-types@1.0.0 lint /home/cca/explicit-module-boundary-types
> eslint src


/home/cca/explicit-module-boundary-types/src/repro.ts
  21:5   warning  Missing return type on function   @typescript-eslint/explicit-module-boundary-types
  21:11  warning  Argument 'input' should be typed  @typescript-eslint/explicit-module-boundary-types

✖ 2 problems (0 errors, 2 warnings)


```


