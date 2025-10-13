Let $L\subseteq \mathbb{W}$ be a [[Foundations/Formal Language]]
We say $L$ satisfies the context free pumping lemma with pumping number $n$ if for every word $w\in L$ with $\lvert w \rvert\geq n$ there are words $x,u,y,v,z$ such that $w=xuyvz$, $\lvert uv \rvert>0$ and $\lvert uyv \rvert\leq n$ and for all $k\in \mathbb{N}_{0}$ we have $xu^kyv^kz\in L$.

### Theorem
For every [[Foundations/Context-Free Formal Language]] $L$ there is a number $n$ such that $L$ satisfies the context free pumping lemma with pumping number $n$.
#### Proof (sketch)
WLOG $G$ generating $L$ is in [[Foundations/Chomsky Normal Form]].
Let $m=\lvert V \rvert$ and $n=2^m+1$. We claim $n$ is the pumping number of $G$.
Let $w\in L$ be a word with $\lvert w \rvert\geq n$
Note that the height of the [[Foundations/Parse Tree]] of $w$ is at least $m+1$. 
So find the terminal node $t$ whose path from $S$ is at least $m+1$. 
Then find $s$ on that path such that path from $s$ to $t$  is exactly $m+1$.
Then there is a repeated variable in between $s$ and $t$, say it repeats at times $t_{0}$ and $t_{1}$. Let $T_{0}$ be the subtree of $t_{0}$. We can insert $T_{0}$ at $t_{1}$ as many times as we want and we proved the theorem.