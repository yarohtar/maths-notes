Suppose that in a [[Foundations/Category Theory/Category]] $\mathcal{C}$ we have:
[[Foundations/Category Theory/Monomorphism]] $+$ [[Foundations/Category Theory/Epimorphism]] $\implies$ [[Foundations/Category Theory/Isomorphism]]
Then we say that $\mathcal{C}$ is balanced.

### Lemma
If $\mathcal{C}$ is balanced, then any [[Foundations/Category Theory/Separating Family]] is also a [[Foundations/Category Theory/Detecting Family]].
#### Proof
Let $\mathcal{G}$ be a [[Foundations/Category Theory/Separating Family]].
Suppose $f:A\to B$ is such that every $h:G\to B$ with $G\in \mathcal{G}$
factorizes uniquely through $f$.
Suppose
$$
fg=fh
$$
for some $g,h$. 
Let $k:G\to \operatorname{dom}g$ with $G\in \mathcal{G}$
Then
$$
fgk=fhk
$$
so
$$
gk=hk
$$
because $fgk$ factorizes uniquely through $f$.
This holds for any $k$ with $\operatorname{dom}k\in \mathcal{G}$
and as $\mathcal{G}$ is a [[Foundations/Category Theory/Separating Family]], we conclude
$$
g=h
$$
and thus $f$ is a [[Foundations/Category Theory/Monomorphism]].

Now suppose 
$$
gf=hf
$$
Any $k:G\to B$ has a unique $s:A\to G$ such that $k=fs$ 
so we can multiply to find
$$
gk=hk
$$
for any $k$ with $\operatorname{dom}k\in \mathcal{G}$ and thus $g=h$
so $f$ is an [[Foundations/Category Theory/Epimorphism]].
As $\mathcal{C}$ is balanced, then $f$ is an [[Foundations/Category Theory/Isomorphism]]
and so $\mathcal{G}$ is a [[Foundations/Category Theory/Detecting Family]].

