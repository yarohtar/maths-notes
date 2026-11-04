Let $T$ be a [[Consistent]] [[Theory]].
Define the equivalence relation on formulas
$\varphi \sim \psi$ if and only if $T\vdash (\varphi \iff \psi)$,
and for each $n\in \mathbb{N}$ fix variables $x_{1},x_{2},\dots,x_{n}$ let

$$
F_{n}=\{ [\varphi]: \text{$\varphi$ has free variables $x_{1},\dots,x_{n}$}\}
$$

Clearly $F_{n}$ is a [[Boolean Algebra]].
An $n$-type over $T$ is a [[Boolean Algebra Ultrafilter]] on $F_{n}$,
i.e. some $p\subseteq F_{n}$ such that $p$ is [[Consistent]]
and any $\varphi \in F_{n}$ has $[\varphi ] \in p$ or $[\neg \varphi ]\in p$.
These are the elements of the [[Formula Type Space]].
