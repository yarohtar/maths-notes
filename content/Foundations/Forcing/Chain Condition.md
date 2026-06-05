---
{"publish":true,"aliases":"c.c. c.c.c.","created":"2025-12-24T04:28:25.859+00:00","modified":"2026-05-31T23:56:22.160+01:00","cssclasses":""}
---

A [[Foundations/Poset/Poset]] $P$ has the $\kappa$-chain condition ($\kappa$-c.c.)
if any [[Foundations/Poset/Strong Antichain]] $A$ in $P$ has size $\lvert A \rvert<\kappa$

If $\kappa=\aleph_{1}$ we call this the countable chain condition (c.c.c.).
### Theorem
Let $M$ be a [[Foundations/Transitive Model]] of $ZFC$,
with $\kappa$ a cardinal in $M$ and a [[Foundations/Forcing/Forcing Partial Order]] $\mathbb{P}\in M$ such that
$$
M\models \mathbb{P} \text{ has the }\kappa \text{-c.c.}
$$
Suppose we have a [[Foundations/Forcing/Model Extension]] $M[G]$ and $f\in M[G]$ such that 
$$
M[G] \models f:A\to B
$$
for some $A,B\in M$.
Then there is a function $F:A\to \mathcal{P}(B)$ such that $F\in M$ with 
$$
\begin{gather}
(\forall a\in A)\, f(a) \in F(a) \\
M\models(\forall a\in A)\, \lvert F(a) \rvert <\kappa
\end{gather}
$$
#### Proof
Let $f=\tau^{G}$.
Then 
$$
M[G]\models \tau^{G} : \check{A}^{G}\to \check{B}^{G}
$$
for the [[Foundations/Forcing/Canonical Name]]s $\check{A}$ and $\check{B}$.
By definition then some $p\in \mathbb{P}\cap G$ has 
$$
p\Vdash \tau:\check{A}\to \check{B}
$$
Now define 
$$
F(a) =\{ b\in B:(\exists q\leq p)\ q\Vdash\tau(\check{a})=\check{b} \}
$$
Clearly $F\in M$.
Let $a\in A$.
Now $M[G]\models \tau^{G}(\check{a}^{G})=\check{b}^{G}$ for some $b=f(a)\in B$ so some $q\in G$ has $q\Vdash \tau(\check{a})=\check{b}$.
As $G$ is a [[Foundations/Poset/Filter]], we find $r\leq p,q$ and so $r\Vdash \tau(\check{a})=\check{b}$ so $b\in F(a)$. 
For each $b\in F(a)$, consider 
$$
\{ q\leq p : q\Vdash\tau(\check{a})=\check{b} \} \neq \varnothing
$$
Using [[Foundations/Set Theory/Axiom of Choice]] in $M$, pick $q_{b}\leq p$ with $q_{b}\Vdash\tau(\check{a})=\check{b}$
Finally, write 
$$
Q_{a}=\{ q_{b}: b\in F(a) \} \in M
$$
We can check that $Q_{a}$ is an [[Foundations/Poset/Strong Antichain]]: 
let $q_{b},q_{c}\in Q_{a}$ for some $b,c\in F(a)$ and assume $r\leq q_{b},q_{c}$.
Then $r\Vdash \tau(\check{a})=\check{b}$ and $r\Vdash \tau(\check{a})=\check{c}$ so $b=c$.
But because $\mathbb{P}$ has $\kappa$-chain condition in $M$ we conclude
$$
M\models \lvert Q_{a} \rvert <\kappa
$$
But the function $b\to q_{b}$ is an injection from $F(a)$ to $Q_{a}$ thus 
$$
M\models \lvert F(a) \rvert <\kappa
$$
### Corollary
If $\kappa$ is a [[Foundations/Regular Cardinal]] in $M$ and 
$$
M\models \mathbb{P}\text{ has }\kappa\text{-c.c.}
$$
then the [[Foundations/Forcing/Model Extension]] $M[G]$ has:
$$
M[G] \models \kappa\text{ is a cardinal}
$$
#### Proof
Suppose not, so find $\lambda<\kappa$ with $f:\lambda \to \kappa$ surjective.
By above theorem, find $F:\lambda \to \mathcal{P}(\kappa)$ with $F\in M$ and 
$$
M\models(\forall \alpha<\lambda)\, \lvert F(\alpha) \rvert <\kappa \land f(\alpha)\in F(\alpha)
$$
We conclude 
$$
\kappa=\mathrm{ran}(f) \subseteq \bigcup_{\alpha<\lambda} F(\alpha)
$$
But then $\kappa$ is a union of $\lambda<\kappa$ many sets of size $<\kappa$,
so $\kappa$ cannot be [[Foundations/Regular Cardinal]].
