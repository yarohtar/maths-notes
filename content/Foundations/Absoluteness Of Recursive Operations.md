Let $T$ be a [[Theory]] and $T\subseteq ZFC$.
Let $F$, $G$, $H$ be [[Absolute Operation]]s for [[Transitive Model]]s of $T$
and define

$$
\begin{gather}
R(0,\vec{x}) = F(\vec{x}) \\
R(\alpha+1,\vec{x}) = G(\alpha,R(\alpha,\vec{x}), \vec{x})  \\
R(\lambda,x) = H(\lambda,\{ R(\alpha,\vec{x}) : \alpha<\lambda \},\vec{x}) \quad %quad
\text{for }\lambda\text{ limit}
\end{gather}
$$

$ZFC$ proves that $R$ is uniquely defined [[Definition by recursion]].
Let $r$ be an attempt if it satisfies the above on some [[Initial Segment]].
Suppose some [[Theory]] $T\subseteq ZFC$ is such that

- any two attempts $r$, $r'$ agree everywhere
- for any $(\alpha,\vec{x})$, there is an attempt such that $(\alpha,\vec{x})\in \operatorname{dom}r$
  Then $R$ is an [[Absolute Operation]] for [[Transitive Model]]s of $T$.

### Proof

Note that $R$ is defined by a $\Delta_{1}^{T}$ formula [[Formula Hierarchy]]
which has to be [[Absolute]] (in a [[Transitive Model]])
so $R$ is an [[Absolute Operation]].
