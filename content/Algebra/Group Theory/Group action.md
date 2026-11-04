Let $G$ be a [[Group]] and $X$ a set.
A group action is a mapping $G\times X\to X$
such that for all $x\in X$ we have:

$$
e.x=x
$$

$$
g.(h.x) = (gh).x \text{ for all }g,h\in G
$$

(We use convention that $g.x=y$ means $(g,x)\to y$)

An action $G\times X\to X$ is equivalent to a [[Homomorphism]] $\phi:G\to Sym (X)$
with $\phi(g)(x)=g.x$
[[Orbit]]
[[Algebra/Group Theory/Transitive|Transitive]]
[[Stabilizer]]
[[Stabilizer of Group Action]]
[[Orbit-Stabilizer Theorem]]
[[Conjugacy Class]]
[[Centralizer]]
[[Center]]
[[Normalizer]]
[[Burnside's Lemma]]

### Category Theory Definition

If $G$ is a [[Group]], a group action is a [[Functor]] $F:G\to \mathrm{Set}$ to [[Category of Sets]]

It consists of a set $X$ (the singular element of $\operatorname{ob}G$ is mapped to $X$)
and mappings $Fg:X\to X$ where $g\in \operatorname{mor}G$
