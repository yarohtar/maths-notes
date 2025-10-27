Let $G$ be a [[Algebra/Group Theory/Group]] and $X$ a set.
A group action is a mapping $G\times X\to X$ 
such that for all $x\in X$ we have:
$$
e.x=x
$$
$$
g.(h.x) = (gh).x \text{ for all }g,h\in G
$$
(We use convention that $g.x=y$ means $(g,x)\to y$)

An action $G\times X\to X$ is equivalent to a [[Algebra/Group Theory/Homomorphism]] $\phi:G\to Sym (X)$ 
with $\phi(g)(x)=g.x$
[[Algebra/Group Theory/Orbit]]
[[Algebra/Group Theory/Transitive\|Transitive]]
[[Algebra/Group Theory/Stabilizer]]
[[Algebra/Group Theory/Stabilizer of Group Action]]
[[Algebra/Group Theory/Orbit-Stabilizer Theorem]]
[[Algebra/Group Theory/Conjugacy Class]]
[[Algebra/Group Theory/Centralizer]]
[[Algebra/Group Theory/Center]]
[[Algebra/Group Theory/Normalizer]]
[[Combinatorics/Counting/Burnside's Lemma]]
### Category Theory Definition
If $G$ is a [[Algebra/Group Theory/Group]], a group action is a [[Foundations/Category Theory/Functor]] $F:G\to \mathrm{Set}$ to [[Foundations/Category Theory/Category of Sets]]

It consists of a set $X$ (the singular element of $\operatorname{ob}G$ is mapped to $X$)
and mappings $Fg:X\to X$ where $g\in \operatorname{mor}G$

