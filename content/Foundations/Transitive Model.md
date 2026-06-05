---
{"publish":true,"aliases":"Transitive","created":"2025-12-24T04:28:25.870+00:00","modified":"2025-12-24T04:28:25.870+00:00","cssclasses":""}
---

Suppose $(M,E)$ and $(N,E)$ are $\mathcal{L}$-[[Foundations/First Order Logic/Structure\|Structure]]s,
where $\mathcal{L}$ is the [[Foundations/First Order Logic/Language]] of set theory i.e. $\mathcal{L}=\{ \in \}$
and $M\subseteq N$ (i.e. $M$ is a [[Foundations/Substructure]] of $N$)
We say that $M$ is a transitive substructure of $N$ if 
for any $x,y\in N$:
$$
y\in M\land xEy \implies x\in M
$$

We will often say $M$ is a transitive model of $T\subseteq ZFC$.
This means that $M$ is a transitive substructure of $V$ such that 
$$
M\models T
$$
where $V$ is the set theoretic universe.
### Special case
$M$ is a transitive substructure of $V$
if and only if
$M$ is [[Foundations/Set Theory/Transitive\|Transitive]].
### Lemma
If $M$ is a transitive model, then $(M,\in)\models$ [[Foundations/Set Theory/Axiom of Extensionality]] + [[Foundations/Set Theory/Axiom of Foundation]]
#### Proof
##### Extensionality
[[Foundations/Set Theory/Axiom of Extensionality]]
$$
\forall x\,\forall y\,(\forall w\,(w\in x \iff w\in y)\implies x=y)
$$
Let $x,y\in M$ such that $x\neq y$
By [[Foundations/Set Theory/Axiom of Extensionality]] there is (WLOG) some $z\in x\setminus y$ 
Now by [[Foundations/Set Theory/Transitive\|Transitivity]] of $M$ we know $z\in x$ and $x\in M$ so $z\in M$
Thus
$$
\begin{gather}
M\models z\in x \land z\not\in y \\
M\models \neg(\forall w)(w\in x \iff w\in y)
\end{gather}
$$
##### Foundation
[[Foundations/Set Theory/Axiom of Foundation]]
$$
\Big(\forall x\Big)\,\Big(x\neq \varnothing \implies \big(\exists m\big)\,\big(m\in x\land (\forall w)\,w\not\in m\lor w\not\in x\big)\Big)
$$
Suppose $x\in M$.
Find using [[Foundations/Set Theory/Axiom of Foundation]] an $\in$-minimal $m\in x$ (in $N$)
By [[Foundations/Set Theory/Transitive\|Transitivity]] we get $m\in M$
We can check that $m$ is still $\in$-minimal in $M$.
