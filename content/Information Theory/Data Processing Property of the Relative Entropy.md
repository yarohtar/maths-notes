Suppose $X\sim P_{X}$ and $Y\sim P_{Y}$ on $A$.
Let $f:A\to B$ be an arbitrary function 
and let $P_{f(X)}$ and $P_{f(Y)}$ define the distributions of $f(X)$ and $f(Y)$.
Then [[Information Theory/Relative Entropy]] satisfies
$$
D(P_{f(X)}||P_{f(Y)}) \leq D(P_{X}||P_{Y})
$$
### Proof
For each $y\in B$ let $A_{y}=\{ x\in A: f(x)=y \}$
Then 
$$
\begin{align}
D(P_{f(X)}||D_{f(Y)})  & = \sum_{y\in B} P_{f(X)} \log \frac{ P_{f(X)}(y) }{ P_{f(Y)}(y) }  \\
 & =\sum_{y\in B} \left( \sum_{x\in A_{y}} P_{X}(x) \right) \log \frac{ \sum_{x\in A_{y}}P_{X}(x) }{ \sum_{x\in A_{y}}P_{Y}(x) } \\
 & \leq \sum_{y\in B} \sum_{x\in A_{y}} P_{X}(x) \log \frac{ P_{X}(x) }{ P_{Y}(y) }  \\
 & =D(P_{X}||P_{Y})
\end{align}
$$

