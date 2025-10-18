Given permutation [[Algebra/Group Theory/Group]] $G$ left [[Algebra/Group Theory/Group Action\|acting]] on a finite set $X$
define $\sim$ on $X$ by $x_{1}\sim x_{2}$ if there is some $g\in G$ 
such that $x_{2}=g(x_{1})$
[[Algebra/Group Theory/Orbit]]
Let
$$
\operatorname{fix}(g) = \{ x\in X : g.x = x \}
$$
Then the number of orbits is:
$$
\frac{1}{\lvert G \rvert } \sum_{g\in G} \lvert \operatorname{fix}(g) \rvert 
$$
### Proof
Count $N=\{ (g,x): g(x)=x \}$ in two ways.
On the one hand:
$$
\lvert N \rvert =\sum_{g\in G} \lvert \operatorname{fix}(g) \rvert 
$$
On the other hand, if $H\leq G$ is the [[Algebra/Group Theory/Stabilizer]] of $x$ 
note for $x'\in Orb(x)$ is a [[Algebra/Group Theory/Coset]] of $H$ so:
$$
\lvert H \rvert=\frac{ \lvert G \rvert }{ \lvert Orb(x) \rvert }
$$
so the contribution to $N$ from $x\in Orb(x)$ is
$$
\frac{\lvert G \rvert }{\lvert Orb(x) \rvert } \lvert Orb(x) \rvert =\lvert G \rvert 
$$

