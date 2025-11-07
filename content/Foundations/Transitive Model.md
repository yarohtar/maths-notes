---
{"publish":true,"aliases":"Transitive","created":"2025-10-23T11:05:41.639+01:00","cssclasses":""}
---

Suppose $(M,E)$ and $(N,E)$ are $\mathcal{L}$-[[Foundations/First Order Logic/Structure\|Structure]]s,
where $\mathcal{L}$ is the [[Foundations/First Order Logic/Language]] of set theory i.e. $\mathcal{L}=\{ \in \}$
and $M\subseteq N$
We say that $M$ is transitive in $N$ if 
for any $x,y\in N$ such that
- $y\in M$
- $xEy$ (in $N$)
implies that $x\in M$

### Lemma
If $N$ is a set theoretic universe i.e. $N\models ZFC$
then $M$ is transitive in $N$ 
if and only if
$M$ is a [[Foundations/Set Theory/Transitive\|Transitive]] set.
### Lemma
Let $N$ be the set theoretic universe.
If $M$ is transitive in $N$ then $(M,\in)\models$ [[Foundations/Set Theory/Axiom of Extensionality]] + [[Foundations/Set Theory/Axiom of Foundation]]
#### Proof
##### Extensionality
$$
\forall x\,\forall y\,(\forall w\,(w\in x \iff w\in y)\implies x=y)
$$
Let $x,y\in M$ such that $x\neq y$
By [[Foundations/Set Theory/Axiom of Extensionality]] (in $N$) there is (WLOG) some $z\in x\setminus y$ 
Now by [[Foundations/Set Theory/Transitive\|Transitivity]] of $M$ we know $z\in x$ and $x\in M$ so $z\in M$
Thus
$$
\begin{gather}
M\models z\in x \land z\not\in y \\
M\models \neg(\forall w)(w\in x \iff w\in y)
\end{gather}
$$
##### Foundation
$$
\forall x\,(x\neq \varnothing \implies \exists m\,(m\in x\land \forall w\,(\neg(w\in m\land w\in x))))
$$
Suppose $x\in M$.
Find using [[Foundations/Set Theory/Axiom of Foundation]] an $\in$-minimal $m\in x$ (in $N$)
By [[Foundations/Set Theory/Transitive\|Transitivity]] we get $m\in M$
We can check that $m$ is still $\in$-minimal in $M$.
