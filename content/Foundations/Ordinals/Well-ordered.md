---
publish: true
aliases:
  - Well-Order
created: 2026-10-11T21:45:33.300Z
modified: 2026-10-11T21:45:33.300Z
---

A well-ordering of a set $X$ is a [[Linear order]] $<$ on $X$
s.t. every nonempty subset of $X$ has a least element:

$$
(\forall S\subseteq X)(S\neq \emptyset \implies(\exists x\in S)(\forall y\in S)(x\leq y))
$$

This least element is unique by antisymmetry of $\leq$

This property is preserved by [[Order-isomorphic]].

### Lemma

Let $X$, $Y$ be well-ordered sets
Let $I$ be an [[Initial Segment]] of $Y$
Let $f:X\to I$ be an [[Order-isomorphic]].
Then for every $x\in X$, we have

$$
f(x)=\min(Y\setminus \{ f(y):y<x \})
$$

### Corollary

[[Proof by Induction]]

### Proposition

Let $X$, $Y$ be well ordered sets that are [[Order-isomorphic]].
Then there is a unique order-isomorphism $X\to Y$

#### Proof

Assume $f,g:X\to Y$ are order-isomorphisms.
We prove $(\forall x)(f(x)=g(x))$ by [[Proof by Induction]]
Fix $x\in X$.
Assume $(\forall y<x)(f(y)=g(y))$ (induction hypothesis)
By the lemma, $f(x)=\min A$ where $A=Y\setminus\{ f(y):y<x \}$
and $g(x)=\min B$ where $B=Y\setminus \{ g(y):y<x \}$
By induction hypothesis, $A=B$ so $f(x)=g(x)$
By [[Proof by Induction]], $f=g$
