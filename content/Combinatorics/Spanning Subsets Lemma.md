Given $S_{1},S_{2},\dots,S_{m}\subseteq[n]$ with $m\geq n+1$
there must exist disjoint $I_{1},I_{2}\subseteq[m]$ with 
$$
\bigcup_{i\in I_{1}} S_{i} = \bigcup_{i\in I_{2}} S_{i}
$$
with $I_{1}$ and $I_{2}$ not both empty.
If $m\geq n+2$, then $I_{1}$ and $I_{2}$ can be chosen such that also:
$$
\bigcap_{i\in I_{1}} S_{i} = \bigcap_{i\in I_{2}} S_{i}
$$
### Proof
For each $S_{i}$ let $v_{i}\in \mathbb{R}^{n}$ be its indicator.
As $m>n$, there are some not-all-zero $\lambda_{i}$ such that 
$$
\sum_{i=1}^{m} \lambda_{i} v_{i} = 0
$$
Thus define $I_{1}=\{ i:\lambda_{i}>0 \}$ and $I_{2}=\{ i: \lambda_{i}<0 \}$.
Now the sets $\{ v_{i} : i\in I_{1} \}$ and $\{ v_{i}: i\in I_{2} \}$ must have the same support.
Consequently 
$$
\bigcup_{i\in I_{1}} S_{i} = \bigcup_{i\in I_{2}} S_{i}
$$
Now suppose $m\geq n+2$ and let $w_{i}=(v_{i},v_{i}^{C})$ 
(where $v_{i}^{C}$ is the indicator of the complement of $S_{i}$)
Note that 
$$
w_{1}+w_{n+1}=\dots=w_{n}+w_{2n} =1
$$
so $w_{i}$ lie in some plane of dimension $n$ in $\mathbb{R}^{2n}$
This plane cannot contain the origin, 
so $w_{i}$ lie in a $n+1$ dimensional subspace of $\mathbb{R}^{2n}$.
Thus find not-all-zero $\mu_{i}$ such that:
$$
\sum_{i=1}^{m} \mu_{i} w_{i} = 0
$$
Pick $I_{1}=\{ i:\mu_{i} >0 \}$ and $I_{2}=\{ i:\mu_{i}<0 \}$ and conclude 
$$
\bigcup_{i\in I_{1}}S_{i} = \bigcup_{i\in I_{2}}S_{i} \quad %quad
 \land  \quad %quad
\bigcup_{i\in I_{1}}S_{i}^{C} = \bigcup_{i\in I_{2}} S_{i}^{C}
$$
