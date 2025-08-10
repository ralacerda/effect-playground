# Effect Playground Template

A simple template playground for Effect with Node.
Make sure you are using Node 24 to run typescript files without building steps.

## How to use

Use the command to [`giget`][giget] download the latest commit. You can include the `--install` flag to install dependencies after cloning.

```sh
npx giget gh:ralacerda/effect-playground-template new-project-name

# Or
npx giget --install gh:ralacerda/effect-playground-template new-project-name
```

Install the dependencies

```sh
pnpm i
```

Run the code

```sh
# Start in watch mode
pnpm dev

# Run the code once
pnpm start
```

[giget]: https://github.com/unjs/giget
