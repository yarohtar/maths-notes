Let $W=\{ A_{0},A_{1} \}$ be a [[Foundations/Computability/Question]] about $n$-tuples with two answers
Let $F:\mathbb{B}^{n+1}\dashrightarrow \mathbb{B}^{n+1}$ a [[Foundations/Computability/Partial Function]]. 
Define by recursion 
- $F^{0}(\vec{w})=\vec{w}$
- $F^{m+1}(\vec{w})=F(F^{m}(\vec{w}))$
Then define:
$$
R_{F,W}(\vec{w})=\begin{cases}
F^{m}(\vec{w}) & \text{if } m \text{ is smallest such that }F^{m}(\vec{w})\in A_{1} \\
\uparrow & \text{if there is no such number}
\end{cases}
$$
Suppose $W$ is answered by register machines 
and $F$ is performed by register machines. 
Then $R_{F,W}$ is performed by register machines.