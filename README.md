# Create repo

- login into github.com
- press + button at the top and select New Repository

  - name = liftoff
  - visibility = public

- press create

- click on "set up in Desktop" button to take you to GitHub Desktop application

- clone the repository onto your hard drive by selecting a folder and pressing Clone

- press button Open in VS Code

# Create and commit first buggy version of the code

- create a new file liftoff.js

```js
// Countdown program (buggy version)
console.log("Starting countdown...");

for (let i = 1; i <= 10; i++) {
  // BUG: counts up, not down!
  console.log(i);
}

console.log("Liftoff!");
```

- go to source control and commit the change
  - commit message = buggy version
  - press commit and sync

# second working version of the code

- edit the file so it works

```js
// Countdown program (bug fixed)
console.log("Starting countdown...");

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

console.log("Liftoff!");
```

- go to source control and commit the change
  - commit message = bug fixed
  - press commit and sync

# third version liftoff function

```js
// Countdown program (final version)
// Counts down smoothly with a delay

function countdown(start = 10) {
  console.log("Starting countdown...");
  for (let i = start; i >= 1; i--) {
    console.log(i);
  }
  console.log("🚀 Liftoff!");
}

countdown();
```

- go to source control and commit the change
  - commit message = functional
  - press commit and sync

# View changes in the graph panel

- in source control graph panel see the 3 commits
- click on them and see the changes

# Tag the second working version (assumes you have the "Git Graph" VS code extension installed)

- in source control graph panel select the second commit titled "bug fixed"
- right click on the item and select Create Tag ...
- at the top enter a tag WORKING VERSION
- you may be then prompted to enter a description ... enter "all working now"

## push the tags up to the github website

Notice at this point that there is no option to push these changes up to github

At the time of writing you cannot push the tags to github natively in VS Code.

This will presumably be sorted out at some point ... but for now we are going to use Git Graph.

If this extension is enabled you should see "Git Graph" in the status bar

- click on GitGraph in the status bar
- you should see the commit history
- right click on the "WORKING VERSION" tag and select Push Tag ...
- are you sure ? press yes

# Jump straight to github

- in source control graph panel see the 3 commits
- HOVER over the "main" tag in the top commit (its blue in my version)
- up will jump a popup dialog containing an "Open in Github" link - follow it and the github website will display the commit

# take a look at the tags

- click on "<> Code" menu at the top of the webpage

- in the code screen in between the Main branch dropdown and the green Code dropdown is "1 Tag" ... click on it

Notice here is the opportunity to download the complete source code for the repo at that point in the commit history

Whilst github doesn't allow you to clone a repo at any commit point, this is the closest you can get !

# Viewing commit history

- click on "<> Code" menu at the top of the webpage

- click on "3 commits" (can be found under the green "Code" button)

- select the "xxxxxx" SHA code on the far right of the "bug fixed" commit line (just before the copy and <> symbols) -

this is the "view commit details" button and will show you the files which were changed in that commit

- click on the cog/settings icon on the right just above the code ... experiment with the split versus unified views

You can now view this file when as it was at this commit point.

# Find out who is responsible for a line of code ...

- click on "<> Code" menu at the top of the webpage

- select the "liftoff.js" file

Lets say you want to know who was responsible for line 6 ... where the counter is going down

- click on "Blame"

You will see that its showing this code

```
for (let i = start; i >= 1; i--) {
```

under the wrong commit ... its showing it against the commit called "functional" because of the wholesale move of this code

HOWEVER, if you

- click on the small icon - two vertical bars then a square (hovering over it reveals "blame prior to change")

Then it will take you to the change where that bug was fixed at line 4.

# Checking out earlier versions in Visual Studio Code

Lets say you want to checkout the "bug fixed" version of the code in VS code ... not to edit or change, just to look at and browse around.

This is how you do it

- return to VS code

## Change Auto to All in the graph panel (this is what references are shown in the commit history - you want everything !)

- go to the source control panel, graph section

- at the top of the commit history is a small button with "Auto" written on it (at my time of writing)

- click on "Auto" and in the dialog which appears at the top of the screen change it to "ALL"

- right click on the "bug fixed" commit
- select Create branch ...
- create a branch called AFTER

- right click on the "buggy version" commit
- select Create branch ...
- create a branch called BEFORE

- now at the bottom of the screen in the status bar you will see "BEFORE" .. this is the branch you are currently viewing

You can toggle between the BEFORE, AFTER and main branches using this status bar button

## Once you have finished browsing at the branches delete them like this :

- select the main branch using the Button in the status bar and selecting "main" (not main/origin) in the dialog box which appears
- in the commit history list, you should see BEFORE and AFTER branch names against the bottom two commits
- right click on BEFORE and select "Delete Branch"->BEFORE
- right click on AFTER and select "Delete Branch"->AFTER

the branches are now gone !

This lesson follows on immediately from lesson 03 and uses the same repo.

- Open VS code and open the liftoff repo

- open the source code explorer

- select the most recent commit (titled "functional")
- right click and select Create Branch ...
- call the branch experimental
- press the "Publish Branch" button

# First commit on the experimental branch

- open liftoff.js

- change the code to this

```
// Countdown program (experimental version)
// Adds a timed countdown effect

function countdown(start = 10, delay = 500) {
  console.log("Starting countdown...");

  let i = start;
  let timer = setInterval(() => {
    console.log(i);
    if (i-- <= 1) {
      clearInterval(timer);
      console.log("🚀 Liftoff!");
    }
  }, delay);
}

countdown(10, 300);
```

- commit and sync with the message "timer"

# Second commit on the experimental branch

- open liftoff.js

- change the code to this

```
// Countdown program (async attempt)
// Tries to use async/await with setInterval — but doesn't behave as expected

async function countdown(start = 5, delay = 500) {
  console.log("Starting countdown...");

  for (let i = start; i >= 1; i--) {
    console.log(i);
    await setInterval(() => {}, delay); // ❌ setInterval doesn't return a Promise!
  }

  console.log("🚀 Liftoff!");
}

countdown();
```

- commit and sync with the message "async with bugs"

# Third commit on the experimental branch

- open liftoff.js

- change the code to this

```
// Countdown program (working async/await version)

function wait(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function countdown(start = 5, delay = 500) {
  console.log("Starting countdown...");

  for (let i = start; i >= 1; i--) {
    console.log(i);
    await wait(delay); // ✅ waits properly between numbers
  }

  console.log("🚀 Liftoff!");
}

countdown();
```

- commit and sync with the message "async fixed"

# View both branches on github.com

- in the "Graph" panel you should now see 6 commits.
- Double check that the tiny icon in the top of the panel says "all" and not "auto"
- Hover over the "experimental" branch label, and click on the "Open on GitHub" link in the dialog which floats up
- in the github.com website click on "<> Code" in the menu bar
- the branch selector dropdown from "experimental" to "main" and click on "3 commits"
- now switch the branch selector dropdown from "main" to "experimental"

Note that the "experimental" branch does NOT show 3 commits ... it shows 6.

This is because the full lineage of this branch is indeed all 6 commits.

# Merge the experimental branch back into the main branch

- Return to VS Code
- in the status bar at the bottom click on "experimental" and in the dialog that appears select the main branch (NOT origin/main)
- open the command palette (View Command Palette)
- search for git merge and select "Git: Merge..."
- choose experimental (NOT origin/experiemental)
- press the "Sync changes" button in source control
- revist github.com - hover over the "main" tag in the Graph panel and follow the "Open on GitHub" link

You will now see that both branches have 6 commits

The merge was a success !
