The [[Category]] of [[Group|groups]] and group homomorphisms $\mathrm{Gp}$

### Lemma

Category $\mathrm{Gp}$ is [[Balanced]].

#### Proof

Similarly as in [[Category of Sets]]:
Injective homomorphisms are [[Monomorphism]]s
and surjective homomorphisms are [[Epimorphism]]s.
To see the other way, let $f:G\to H$ be a [[Monomorphism]].
Suppose $f(a)=f(b)$
Consider $g,h:\mathbb{Z}\to G$ with $g(1)=a$ and $h(1)=b$.
Then $a=b$, as $f$ is [[Monomorphism]].

Now suppose that $f:G\to H$ is an [[Epimorphism]].
Let $X=H /f(G)$, the set of right [[Coset]]s and let $Y=X\cup \{ X \}$
(we just extend $X$ with something that's not contained in $X$)
Let $g:H\to S_{Y}$ be the [[Homomorphism]]
induced by the [[Group Action]] of $H$ on $Y$ which fixes $X$.
Consider a permutation $\sigma$ that exchanges $f(G)$ and $X$
and let $h:H\to S_{Y}$ such that $h(x)=\sigma g(x)\sigma$.

First note that if $x\in f(G)$, then $g(x)$ fixes $f(G)$.
Thus $gf$ commutes with $\sigma$ and $hf=gf$.
We conclude that $h=g$ as $f$ is [[Epimorphism]].

But then $g(x)$ has to fix $f(G)$ for all $x\in H$,
which means that $f(G)=H$ i.e. $f$ is surjective.
