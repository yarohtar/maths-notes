If [[Zermelo-Fraenkel Set Theory]] is consistent, then [[Axiom of Choice]] is consistent:

$$
\mathrm{Cons}(ZF) \implies \mathrm{Cons}(ZFC)
$$

### Proof

Suppose $ZF$ is consistent.
By [[Gödel's Completeness Theorem for First-Order Logic]] take

$$
M\models ZF
$$

(in the meta-theory).
Let $L$ be the [[Constructible Hierarchy]] in $M$.
As $L$ is the [[Constructible Model of Set Theory]] we have

$$
L\models ZF
$$

We can provide a [[Well-Ordered|Well-Order]] of $L$:
Let $\omega$ be what $M$ thinks that $\omega$ is.
Note that $\omega$ is [[Absolute]] between $L$ and $M$,
but might not be the same as in $V$.
Fix some some $<_{\omega}$ on $L_{\omega}$ of [[Order Type]] $\omega$
Assume that $<_{\alpha}$ is a [[Well-Ordered|Well-Order]] of $L_{\alpha}$,
and let $\mathrm{Fml}$ be the set of formulas encoded in $\omega$.
Define lexicographically a [[Well-Ordered|Well-Order]] of

$$
\mathrm{Fml}\times L_{\alpha}
$$

and then write for $x\in L_{\alpha+1}$

$$
w(x) = \mathrm{min}_{<_{\alpha}} \{ (\phi,p) : x=D(\phi,p,L_{\alpha}) \}
$$

Make this into an end-extension of $<_{\alpha}$ by

$$
\begin{align}
x<_{\alpha+1} y  & \iff x,y\in L_{\alpha} \land x<_{\alpha}y  \\
 & \text{OR } x\in L_{\alpha} \land y\in L_{\alpha+1} \setminus L_{\alpha} \\
 & \text{OR } x,y\not\in L_{\alpha} \land w(x)<w(y)
\end{align}
$$

Thus

$$
<\; = \bigcup_{\alpha \in \mathrm{Or d}} <_{\alpha}
$$

is a [[Well-Ordered|well-order]] of $L$ (as seen by $M$)
This was a recursive definition so it is [[Absolute]].
As $L$ is a [[Transitive Model]] in $M$:

$$
L\models\ <\text{ is a wellorder of }L
$$

and thus

$$
L\models AOC
$$

As $L$ is a set in the meta-theory, we proved:

$$
\mathrm{Cons}(ZF) \implies \mathrm{Cons}(ZFC)
$$
