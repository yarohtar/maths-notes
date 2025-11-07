Let $G$ be a [[Combinatorics/Graphs/Simple Graph\|Graph]]. 
The chromatic polynomial is $P_{G}:\mathbb{Z}_{\geq 0}\to \mathbb{Z}_{\geq 0}$ 
where $P_{G}(t)$ is the number of $t$-colourings of $G$

## Proposition
Let $G /e$ be the [[Combinatorics/Graphs/Contraction along edge]] of $G$ 
Then 
$$
P_{G}(t) = P_{G-e}(t) - P_{G /e} (t)
$$
### Proof
Every colouring of $G-e$ where $x,y$ are coloured differently 
corresponds uniquely to a colouring of $G$
Every colouring of $G-e$ where $x,y$ are coloured the same 
corresponds uniquely to a colouring of $G /e$.
## Corollary
$P_{G}$ is a polynomial of degree $\lvert G \rvert$

## Proposition
Let $G$ be a graph with $n$ vertices and $m$ edges.
Then
$$
P_{G}(t) = t^{n}- mt^{n-1} + \dots
$$
