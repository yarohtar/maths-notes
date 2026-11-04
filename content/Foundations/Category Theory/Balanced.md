Suppose that in a [[Category]] $\mathcal{C}$ we have:
[[Monomorphism]] $+$ [[Epimorphism]] $\implies$ [[Isomorphism]]
Then we say that $\mathcal{C}$ is balanced.

### Lemma

If $\mathcal{C}$ is balanced, then any [[Separating Family]] is also a [[Detecting Family]].

#### Proof

Let $\mathcal{G}$ be a [[Separating Family]].
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
and as $\mathcal{G}$ is a [[Separating Family]], we conclude

$$
g=h
$$

and thus $f$ is a [[Monomorphism]].

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
so $f$ is an [[Epimorphism]].
As $\mathcal{C}$ is balanced, then $f$ is an [[Isomorphism]]
and so $\mathcal{G}$ is a [[Detecting Family]].
