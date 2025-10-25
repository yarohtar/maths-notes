The [[Foundations/Category Theory/Category]] of all sets and functions between them denoted by $\mathrm{Set}$
Formally, morphisms are pairs $(f,B)$ where $f\subseteq A\times B$ is a [[Foundations/Set Theory/Function]]
(this is because codomain of $f$ is not uniquely defined in set theory)

See also [[Foundations/Category Theory/Category of Relations]] and [[Foundations/Category Theory/Category of Partial Functions]]
and note:
$$
\mathrm{Set} \subseteq \mathrm{Part} \subseteq \mathrm{Rel}
$$

### Lemma
Category $\mathrm{Set}$ is [[Foundations/Category Theory/Balanced]].
#### Proof
Note that all injective functions are left cancellable 
so they are [[Foundations/Category Theory/Monomorphism]]s.
Let $f:B\to C$ be left cancellable:
$$
fg=fh \implies g=h
$$
whenever $g,h:A\to B$.
Pick $A=\{ 0 \}$ and suppose $f(x)=f(y)$
Set $g(0)=x$ and $h(0)=y$.
Then $x=y$
Thus [[Foundations/Category Theory/Monomorphism]]s are exactly the injective functions.

Similarly, all surjective functions are right cancellable, thus [[Foundations/Category Theory/Epimorphism]]s.
Let $f:A\to B$ be an [[Foundations/Category Theory/Epimorphism]]:
$$
gf=hf \implies g=h
$$
for any $g,h:B\to C$.
Let $C=\{ 0,1 \}$, let $g=1_{f(A)}$ and let $h=1_{B}$
Note
$$
fg(x)=fh(x) =1
$$
for any $x\in A$, thus $g=h$.
Then for any $x\in B$ we have $g(x)=h(x)=1$ 
and thus $x\in f(A)$ so $f$ is surjective.

Thus [[Foundations/Category Theory/Monomorphism]] + [[Foundations/Category Theory/Epimorphism]] $\implies$ bijective i.e. [[Foundations/Category Theory/Isomorphism]].
