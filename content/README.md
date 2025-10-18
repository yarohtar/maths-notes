This is an Obsidian Vault that I use to organize my notes on various courses during my time in Cambridge.

No content presented in here is official nor endorsed by the University (or people associated with the University) 
and it is not an accurate representation of what was lectured or what is examined.
While some notes were taken during lectures, a big part was created after lectures / during revision and heavily modified based on various resources.
In particular, all errors are my own.

The lecture notes were created in Obsidian (https://obsidian.md/). 
The guide on how to view them in app is below. 

If you don't want to view them in app, you can also browse them on:
https://yarohtar.github.io/maths-notes/


# Courses that exist currently
## Part IA
- [[Algebra/Group Theory/Group]] (taken from [[Algebra/Groups, Rings and Modules]])
- [[Probability/Probability]] (taken from [[Analysis/Measure/Probability and Measure]])
- [[Algebra/Vector Spaces/Vector Space]]
## Part IB
- Some of [[Calculus/Methods]]
- [[Numerical/Optimisation]]
- [[Calculus/Variational principles]]
- [[Analysis/Analysis and Topology]]
- [[Quantum/Quantum mechanics]]
- [[Algebra/Groups, Rings and Modules]] (only [[Algebra/Group Theory/Group]] and [[Algebra/Ring Theory/Ring]])
- [[Numerical/Numerical Analysis]]
- [[Analysis/Complex Methods]]

Also useful: [[Revision files/Last minute revision Part IB]]

## Part II
- Some of [[Topology/Algebraic Topology]]
- [[Analysis/Linear Analysis]]
- [[Numerical/Numerical Analysis]]
- [[Asymptotic Methods/Asymptotic methods]]
- [[Foundations/Computability/Automata and formal languages]]
- Some of [[Quantum/Principles of Quantum Mechanics]]
- [[Analysis/Measure/Probability and Measure]] (mostly just measure)
- Some of [[Algebra/Number Theory/Number theory]]
- Some of [[Combinatorics/Graphs/Graph Theory]]
- [[Information Theory/Coding and Cryptography]]
- [[Foundations/Logic and Set Theory]]
- Some of [[Calculus/Integrable systems]]
- [[Quantum/Quantum Information and Computing]]

[[Revision files/Last Minute Revision Part II]]

## Part III
- [[Quantum/Information/Quantum Information]]
- [[Combinatorics/Algebraic Methods in Combinatorics]]
- [[Foundations/Category Theory/Category Theory]]
- [[Information Theory/Information Theory]]

# How to download (works on phones and computers)
## Step 1
Firstly, you need to download and install Obsidian from the official website https://obsidian.md/ (on computer) or you can download it from the app store on your phone.

Next open the app and create a new Vault. You can delete the default file.

## Step 2

Go to settings (on computer hit CTRL+, OR click the ⚙️ icon on the bottom left; on phone swipe right and click the ⚙️ icon). 

Go to Community Plugins. Enable them. Then click Browse and search for "Git". Install the plugin and make sure to enable it when it installs (there will be a button on the same page).

Close the Settings window(s). 

## Step 3

Open the command palette (on computer you can hit CTRL+P OR find the ">\_" button on the left panel; on phone you need to click the bottom right ☰ button and click "Open the command palette" OR swipe down)

Search for "Git: Clone an existing remote repo" command and hit enter.

You will be prompted a few times:
1. First enter the link to this repo, https://github.com/yarohtar/cam-maths-notes-obsidian
2. Then enter the name of a new folder where all the files will be put OR just click Vault Root
3. If asked about .obsidian file, say YES
4. If asked about merge conflicts, click DELETE
5. Leave the last prompt empty

You should be good to go now. You can see the files on the left (swipe on phone). You should probably restart the app now to sync all the settings.

Note that some things (like commutative diagrams) might not load on phone. sorry :/

# How to update from remote
If I make changes/updates to the Vault, you will be able to pull them by opening the command palette again and searching for "Git: Pull". This should do everything it needs to.

WARNING: If you clone this AND are adding your own changes AND are then pulling changes from my repo, the obsidian git plugin sometimes gets very confused about merging. You should use command line git in this case. 

Alternatively, you could use the command "Git: CAUTION: Discard all changes" which would discard your local changes and sync with the remote.

## IF it doesn't! (usually on phones)
And you get a message of type "Author not set, please do this in settings", you will need to do the following:
1. Go to Settings
2. Scroll down to Git
3. Scroll down and find fields "Author name for commit" and "Author email for commit"
4. Fill these in with your name and email

I'm not sure about the reason this doesn't work because you are never committing so this information is never actually used. But it is what it is.

## If it STILL doesn't!
And you get a message of type "Your local changes to the following local file would be overwritten by checkout" then you will have to discard those local changes by:
1. Opening the command palette (CTRL+P or swipe down)
2. Searching for "Git: CAUTION: Delete all changes"
3. Click YES
4. WAIT for a bit 
Eventually, you should have your changes deleted and everything synced with this repository. (You might need to run "Git: Pull" again)

## Autopull
If you don't wanna do this every time, you can set the autopull by going to Settings, scrolling down to Git and clicking on it.
Here, you can adjust the Autopull interval or turn on "Pull on startup" setting.

If you made changes to some files, the Pull might fail with some error messages about an impossible merge. You will either have to handle this by resolving the impossible merges (where I strongly recommend using command line git) or you'll have to reinstall the whole Vault, losing your changes.

# How to navigate
Firstly, you can switch between editing and reading mode in the top-right corner.

By hitting CTRL+O (plus icon on phone), you'll be able to search through files. 
Search for the course that interests you and you'll usually find an indexed file of sections / topics in that course. 
Obsidian search is automatically fuzzy which means that searching "anatop" will match "==Ana==lysis and ==Top==ology" 

Alternatively, open this README file in Obsidian and click on links in [[README#Courses that exist currently]].

You can click on links to open further files (CTRL+Click to open in new tab). You can also use CTRL+J or the arrow in the top-left to navigate back.

Whenever you see a link, you can hover over while holding CTRL and it will show you a popup window of what that link is pointing to. This is useful if you just want to peak a definition and don't wanna open a new file.

In the top-left (or bottom right button on phone) there is an Open graph view button which shows all the files / topics interconnected in a nice graph view. Can be useful to more easily figure out what's in the Vault.

Another useful feature is CTRL+P and search for "links". You'll have some commands that show you outgoing links and backlinks to the current file.


