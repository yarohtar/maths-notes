For $X$, $Y$ [[Analysis/Metric space]], and $f:X\to Y$, the graphh of $f$ is $Graph(f)=\{ (x,f(x)) : x\in X \}\subseteq X\times Y$.

Note that $f$ continuous $\implies$ $Graph(f)$ closed.

### Theorem
$X$, $Y$ [[Analysis/Banach Space]], $T:X\to Y$ linear.
Then $T$ continuous $\iff$ $Graph(T)$ closed.
#### Proof
##### $\implies$
Trivial
##### $\impliedby$
Have $G=Graph(f)$ closed in $X\times Y$ (with $\lVert  \rVert_{1}$)
so $G$ is complete.
Define $S:X\to G$ by $x\to(x,Tx)$
Want $S$ bounded; if $\lVert (x,Tx) \rVert\leq k\lVert x \rVert$
Then $\lVert x \rVert+\lVert Tx \rVert\leq k\lVert x \rVert$ so $\lVert Tx \rVert\leq k\lVert x \rVert$
Now $S$ is bijective and $S^{-1}$ is continuous (as a bounded linear map)
We are done by [[Analysis/Inversion Theorem]].

### Usecase
Normally, to show $T$ continuous we take $x_{n}\to 0$ and show $Tx_{n}\to 0$.
Now we have $x_{n}\to 0$ and if $Tx_{n}\to y$ then $y=0$.

