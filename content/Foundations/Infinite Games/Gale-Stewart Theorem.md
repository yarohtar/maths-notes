Let $\mathcal{G}(A,Y)$ be a [[Foundations/Infinite Games/Two Person Infinite Game of Perfect Information\|Game]].
Suppose that $A$ is closed in the [[Foundations/Infinite Games/Game Space]] $\mathcal{F}(Y)$.
Then $\mathcal{G}(A,Y)$ is [[Foundations/Infinite Games/Determined]].
### Proof 1
Suppose `II` has no [[Foundations/Infinite Games/Winning Game Strategy]] for $\mathcal{G}=\mathcal{G}(A,Y)$.
There is a first move $y_{0}$ such that `II` has no [[Foundations/Infinite Games/Winning Game Strategy]] for $\mathcal{G}$ starting at $(y_{0})$.
Moreover, if `II` has no [[Foundations/Infinite Games/Winning Game Strategy]] for $\mathcal{G}$ starting at $(y_{0},\dots,y_{2n})$
then for any $y_{2n+1}$ there is a move $y_{2n+2}$ such that 
`II` has no [[Foundations/Infinite Games/Winning Game Strategy]] for $\mathcal{G}$ starting at $(y_{0},\dots,y_{2n},y_{2n+1},y_{2n+2})$.
This we obtain a strategy for `I`.
Now suppose they played a game 
$$
y_{0},y_{1},y_{2},\dots
$$
where `I` follows the above strategy.
Note that $(y_{0},y_{1},\dots)\not\in A$ 
if and only if
for some $n$ and any $y'\in \mathcal{F}(Y)$:
$$
(y_{0},y_{1},\dots,y_{n},y_{n+1}',y_{n+2}',\dots)\not\in A
$$
because $A$ is closed.

But if this happened, then `II` would have a [[Foundations/Infinite Games/Winning Game Strategy]] post stage $n$,
contradicting our construction.
We conclude that the above strategy is a `I`-[[Foundations/Infinite Games/Winning Game Strategy]].
Thus $\mathcal{G}$ is [[Foundations/Infinite Games/Determined]].
### Proof 2
