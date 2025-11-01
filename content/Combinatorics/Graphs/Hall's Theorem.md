Let [[Combinatorics/Graphs/Simple Graph\|Graph]] $G=(X\sqcup Y,E)$ be bipartite. 
There exists a [[Combinatorics/Graphs/Matching]] from $X$ to $Y$ 
if and only if 
for all $A\subseteq X$, $\lvert A \rvert\leq \lvert N(A) \rvert$
### Proof
If there is a matching, we can find an injection from $A$ to $N(A)$

Now suppose $\lvert A \rvert\leq \lvert N(A) \rvert$ for all $A\subseteq X$
We go by induction on $\lvert X \rvert$
#### Case 1
Suppose there is some $\emptyset \ne A\neq X$ such that $\lvert A \rvert=\lvert N(A) \rvert$
Then $A$ satisfies the criterion so there is a matching on $A$
Also set $B\subseteq X\setminus A$ and $G_{2}=G[X\setminus A \sqcup Y\setminus N_{G}(A)]$
Write:
$$
\lvert A \rvert +\lvert B \rvert \leq \lvert N_{G}(A\cup B) \rvert = \lvert N_{G}(A) \rvert  + \lvert N_{G_{2}}(B) \rvert  
$$
Thus $\lvert B \rvert\leq \lvert N_{G_{2}}(B) \rvert$
#### Case 2
For all $A\neq X$ we have $\lvert A \rvert<\lvert X \rvert$
Pick connected vertices $x,y$ 
Let $G'=G[X\setminus \{ x \} \sqcup Y\setminus \{ y \}]$
Let $B\subseteq X\setminus \{ x \}$
Then:
$$
\lvert N_{G'}(B) \rvert \geq \lvert N_{G}(B) \rvert -1 > \lvert B \rvert -1
$$
So $\lvert B \rvert\leq \lvert N_{G'}(B) \rvert$
So apply induction hypothesis.

## Corollary
If $G$ is $k$-regular bipartite, then there exists a matching.
### Proof
Compute the number of edges in two ways, 
as all the edges from $A$ and all the edges from $N(A)$
