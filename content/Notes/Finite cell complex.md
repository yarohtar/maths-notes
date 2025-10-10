## Definition
$X$ space, $f:S^{n-1}\to X$ map. 
The space "obtained by attaching an $n$-cell to $X$ along $f$" is: $X\cup_f D^n = X \sqcup D^n/\sim$
$\sim$ is the smallest equivalence relation matching $a\sim f(a)$ for all $a\in S^{n-1}$.
#### Intuition
We basically just glue the boundary of some disc to $X$. 
Easiest to see for $n=2$ because there we just pick two points 
(not necessarily different) in $X$ and attach a lil path between them. 

### Definition
A finite cell complex (cx) is a space $X$ obtained by
1. Start with finite set $X^0$ with discrete topology. (0-skeleton)
2. Iteratively: $n$-skeleton $X^n$ is obtained from $(n-1)$-skeleton $X^{n-1}$ by attaching finitely many $n$-cells.
3. Stop after finitely many steps
#### Intuition
Start with finitely many points.
Then attach little paths between them (kinda like a graph now)
Then attach circles along those paths.
You could either:
- attach a circle by folding it over 
- or you could attach it normally along a loop 
- or you could probably do other things
Then attach balls along those circles
A bit harder to visualize, but for example
if you had a fully enclosed section you could put a ball inside there to fill it up
etc 