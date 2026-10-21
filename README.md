# Simple Timer

A one-page stopwatch with Start, Stop (pause), and Reset buttons. Start resumes a paused timer; Reset stops it and returns to zero. Refreshing the page clears the timer.

## Run

Open `index.html` in your browser. No installation or build is needed.

## Classroom collaboration with Codex

The owner adds the student's GitHub username under **Settings → Collaborators → Add people** on GitHub. The student accepts the invitation. Each person uses their own GitHub account.

1. Student: clone this repository using its GitHub URL, then open that folder in Codex.
2. Student prompt: “Pull the latest main branch. Change the heading in index.html to Timer Teamwork. Check the app, commit the change, and push it to main.”
3. Owner prompt: “Pull the latest main branch from GitHub.” Then refresh `index.html` in the browser to see the new heading.

Useful commands:

```sh
git pull --ff-only origin main
git add index.html
git commit -m "Update timer heading"
git push origin main
```

For this simple demo, both collaborators push to `main`. Pull before editing and commit local changes before pulling. For larger projects, use separate branches and pull requests.

## Optional merge-conflict demonstration

After the student pushes a heading change, the owner can deliberately edit and commit the same heading without pulling first. Git rejects the owner's push because the remote has newer work. Ask Codex: “Pull the student's changes, help resolve the heading conflict, then commit and push the combined result. Do not force-push.” Codex may need your choice of final heading. View the repository's commit history to see both authors' changes.
