



GIT
ONLY 2 OPERATIONS
 -GIT PUSH (upload)
 -GIT PULL (Download)

 GIT PROCESS
  -Connecting local repo with online repo
  - git initiailize `git init`
  - `git remote add origin <https url>
### Clone the repo if it already exist, download to local machine
  - `git clone <url>`

### git commit
  - GIt adding track of changes
    -`git add .`
  - GIt commint the tracked changes
    -`git commit -m "your message for the commit"`

### git push (upload)
 - `git push origin <localBranchName [<RemoteBranchName]`

 ### git Pull (Download)
  - get all the changes from remote repo to your local repo
  - for every pull operations, your codebase has to be comitted
  -`git pull origin <remoteBranchName>`
  -Sometimes you migh get conflict, if there are smae changes or changes in the same file
  - If there are conflicts, first resolve them manually.
  - After resolution commit your codes and if needed to pushm then run git push command

  # Merge, Rebase, Fast-forward (while pulling)
  - Standard - Merge tries to merge both incoming changes and your local changes
  - rebase reject your local code and only pull the remote repo changes
  - Fast-forward: only use your changes and reject remote repo changes

 # Git Branch Commands
  - LIst all Branches
    - `git branch`
  -To create a new Branch
    -`git checkout -b <BranchName>`
  -To go to any branch
    -`git checkout <BranchName>

## ES
 - BEFORE 2015 (CommonJs)
 - After 2015 (ModuleJs)    

- you can use graphql if there is tree data in the backend.


-js ko ho DOM not html treating the document as Object