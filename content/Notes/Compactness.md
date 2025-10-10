$X$ is compact if every open cover of $X$ has a finite subcover.

### Theorem
If $X\neq\emptyset$ is compact and $f:X\to\mathbb R$ is continuous then $f$ is bounded and attains its bound.
#### Proof sketch
Consider $\{f^{-1}((f(x)-1,f(x)+1)):x\in X\}$, a cover of $X$. It has a finite subcover, and $f$ is bounded in each set of the subcover, so $f$ is bounded on the union of those finitely many sets.
Now let $m=\inf_{x\in X}f(x)$ and suppose for every $x\in X$ we have $f(x)>m$. Hence find $m_x$ s.t. $f(x)>m_x>m$. Now $x\in f^{-1}((m_x,\infty))$, so these sets build a cover of $X$. Hence find a finite subcover and smallest $m_x$ from that subcover. But then $X=f^{-1}((m_x,\infty))$ so $m=\inf_{x\in X}f(x)\geq m_x>m$.

### Important property
[[Notes/Compact-closed]]

## Theorems 
- [[Notes/Closed interval is compact]]
- [[Notes/Topological Inverse Function Theorem]]
- [[Notes/Tychonorff's Theorem on Finite Products]]
- [[Notes/Heine-Borel Theorem]]