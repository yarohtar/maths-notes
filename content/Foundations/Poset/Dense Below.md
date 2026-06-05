---
{"publish":true,"aliases":"Dense","created":"2025-12-24T04:28:25.864+00:00","modified":"2026-05-31T16:57:12.147+01:00","cssclasses":""}
---

Let $P$ be a [[Foundations/Poset/Poset]] and $D\subseteq P$.
We say that $D$ is dense below $p\in P$ if 
$$
(\forall q\leq p)(\exists r\leq q)\ r\in D
$$
i.e. it is [[Topology/Dense]] at $p$.
Then $D$ is [[Topology/Dense]] iff it is dense below any $p\in P$.
### Lemma
If $E\subseteq P$ is dense below $p$ and $q\leq p$, then $E$ is dense below $q$.
### Lemma
If $E\subseteq P$ such that 
$$
\{ r : E \text{ is dense below }r \}
$$
is dense below $p$, then $E$ is dense below $p$.
### Lemma
Let $\mathbb{P}$ be a [[Foundations/Forcing/Forcing Partial Order]].
Let $G$ be a $\mathbb{P}$-[[Foundations/Forcing/Generic Filter]] over a countable [[Foundations/Transitive Model]] $M$.
Let $E\subseteq \mathbb{P}$ and $E\in M$.
Then either $G\cap E\neq \varnothing$ 
or some $q\in G$ is [[Foundations/Poset/Incompatible]] with all elements of $E$.
Furthermore, if $p\in G$ and $E$ is dense below $p$ then 
$$
G\cap E\neq \varnothing
$$
#### Proof
Let 
$$
D=\{ p\in \mathbb{P}: (\exists e\in E)\ p\leq e \} \cup \{ p\in \mathbb{P} : (\forall e\in E)\ p\operatorname{\bot}e \}
$$
Then $D$ is [[Topology/Dense]]: let $p\in \mathbb{P}$ and assume $p\not\in D$ 
so that $p$ is compatible with some $e\in E$. 
Then some $r\in \mathbb{P}$ has $r\leq p,e$ so $r\in D$ and $D$ is dense.
Thus $G$ intersects $D$ and let $q\in G\cap D$. 
If $q\leq e$ for some $e\in E$ then $e\in G\cap E$. 
Otherwise, $q$ is [[Foundations/Poset/Incompatible]] with all elements of $E$ as desired.

To see the last part, note that if $p\in G$ and $E$ is dense below $p$, 
then any $q\in G$ has some $r\in G$ with $r\leq q,p$
and thus there is some $e\in E$ with $e\leq r\leq q$, so $e$ and $q$ are [[Foundations/Poset/Compatible]]. 
By the previous result, we find $G\cap E\neq \varnothing$.
