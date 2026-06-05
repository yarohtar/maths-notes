---
{"publish":true,"aliases":"Structure","created":"2025-12-24T04:28:25.851+00:00","modified":"2025-12-24T04:28:25.851+00:00","cssclasses":""}
---

Let $R$ be a [[Algebra/Ring Theory/Ring\|Ring]] containing $\mathbb{Q}$.
Let $\mathcal{B}$ be the [[Foundations/Category Theory/Category]] of finite sets and bijections between them.
Let $\mathcal{B}_{R}$ be the [[Foundations/Category Theory/Category]] whose objects are pairs $(A,w_{A})$
where $A$ is a finite set and $w_{A}$ is a function $w_{A}:A\to R$
and [[Foundations/Category Theory/Morphism]]s in $\mathcal{B}_{R}$ are bijections $b:(A,w_{A})\to(B,w_{B})$
such that $w_{A}=w_{B}\circ b$.

A combinatorial structure is a [[Foundations/Category Theory/Functor]] $F:\mathcal{B}\to \mathcal{B}_{R}$
The map $w_{A}$ is called the weight function.
We may write just $w$ when the context is clear.

Often $w_{A}(a)=1$ for all $a\in A$. 
When weight is not specified, we assume that this is the case.

[[Combinatorics/Counting/Unlabelled Structure]]
[[Algebra/Ordinary Generating Function]]
[[Combinatorics/Counting/Exponential Generating Function]]
[[Combinatorics/Counting/Combinatorial Union]]
[[Combinatorics/Counting/Combinatorial Product]]
[[Combinatorics/Counting/Combinatorial Composition]]
[[Combinatorics/Counting/Unlabelled Composition]]
[[Combinatorics/Counting/Finite Sequence]]
[[Combinatorics/Counting/Set Structure]]
[[Combinatorics/Counting/Combinatorial Derivative]]
[[Combinatorics/Counting/Rooted Structure]]