# HTML, CSS, JS, Git intro

## Git

1. Check version: 
   
```bash
$ git --version
$ ls -la
$ rm -rf .git/
```

2. Git init a new repository
   
`$ git init`

3. Index files

```bash
$ git status   
$ git add .
$ git add index.html style.css README.md
```

4. Make a commit
   
```bash
$ git status   
$ git commit -m "First commit"
```

5. Check commits
   
`$ git log`

6. Add remote rep

`$ git remote add origin https://github.com/alex-dmit/ov7-css-intro.git`

7. Send changes to the central repository

`$ git push origin master`