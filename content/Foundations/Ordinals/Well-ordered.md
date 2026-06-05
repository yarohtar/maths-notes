---
{"publish":true,"aliases":"Well-Order","created":"2025-12-24T04:28:25.867+00:00","modified":"2025-12-24T04:28:25.867+00:00","cssclasses":""}
---


A well-ordering of a set $X$ is a [[Foundations/Ordinals/Linear order]] $<$ on $X$ 
s.t. every nonempty subset of $X$ has a least element:
$$
(\forall S\subseteq X)(S\neq \emptyset \implies(\exists x\in S)(\forall y\in S)(x\leq y))
$$
This least element is unique by antisymmetry of $\leq$

This property is preserved by [[Foundations/Ordinals/Order-isomorphic]].

### Lemma
Let $X$, $Y$ be well-ordered sets
Let $I$ be an [[Foundations/Ordinals/Initial Segment]] of $Y$ 
Let $f:X\to I$ be an [[Foundations/Ordinals/Order-isomorphic]]. 
Then for every $x\in X$, we have 
$$
f(x)=\min(Y\setminus \{ f(y):y<x \})
$$
### Corollary
[[Foundations/Ordinals/Proof by Induction]]
### Proposition
Let $X$, $Y$ be well ordered sets that are [[Foundations/Ordinals/Order-isomorphic]]. 
Then there is a unique order-isomorphism $X\to Y$
#### Proof
Assume $f,g:X\to Y$ are order-isomorphisms.
We prove $(\forall x)(f(x)=g(x))$ by [[Foundations/Ordinals/Proof by Induction]]
Fix $x\in X$. 
Assume $(\forall y<x)(f(y)=g(y))$ (induction hypothesis)
By the lemma, $f(x)=\min A$ where $A=Y\setminus\{ f(y):y<x \}$
and $g(x)=\min B$ where $B=Y\setminus \{ g(y):y<x \}$
By induction hypothesis, $A=B$ so $f(x)=g(x)$
By [[Foundations/Ordinals/Proof by Induction]], $f=g$
