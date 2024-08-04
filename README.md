

## Getting Started

List all branchs: ```  git branch  ``` 

create new branch:  ``` git checkout -b ＜new-branch＞ ```

switch to your own branch: ``` git checkout khalil  // expected OP Switched to branch 'khalil' ```

P>S: for the very first time commit and push need to do this `` git push --set-upstream origin khalil ``

`````
``` 
E:\dicr\AST> git branch 
  amir
* khalil
  main

```
`````

First: clone the git repo

``` git clone https://github.com/amirCodes/astwebsite.git ```

Second, run the development server:

```bash
# to install dependencies 
npm install 
# or
yarn install
# run the app on your local machin
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

