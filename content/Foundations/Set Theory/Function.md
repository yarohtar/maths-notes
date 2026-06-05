A function from a set $X$ to  set $Y$ is a subsest $f$ of $X\times Y$ such that:
1. $(\forall x\in X)\,(\exists y\in Y)\,((x,y)\in f)$
2. $(\forall x\in X)\,(\forall y,z\in Y)\,((x,y)\in f \land (x,z)\implies y=z)$ if $(x,y)\in f$ and $(x,z)\in f$ then $y=z$
For $Z\subseteq Y$, the restriction of $f$ to $Z$ is $f|_{Z}=\{ (x,y):x\in Z \}$


In [[Foundations/Set Theory/Zermelo-Fraenkel Set Theory]] we introduce abbreviations 
- '$f$ is a function' means
$$
\begin{align}
 & (\forall x)(x\in f\implies(x \text{ is an ordered pair})) \\
 & \land (\forall x)(\forall y)(\forall z)(((x,y)\in f\land(x,z)\in f)\implies y=z)
\end{align}
$$
- '$f$ is a function from $x$ to $y$' (written as $f:x\to y$) means
$$
\begin{align}
(f \text{ is a function}) & \land(\forall s)((\exists t)((s,t)\in f)\iff s \in x)\\
 & \land(\forall t)((\exists s)((s,t)\in f)\implies t\in y)
\end{align}
$$

