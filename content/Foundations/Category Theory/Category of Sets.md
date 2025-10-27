The [[Foundations/Category Theory/Category]] of all sets and functions between them denoted by $\mathrm{Set}$
Formally, [[Foundations/Category Theory/Morphism]]s are pairs $(f,B)$ where $f\subseteq A\times B$ is a [[Foundations/Set Theory/Function]]
(this is because codomain of $f$ is not uniquely defined in set theory)

See also [[Foundations/Category Theory/Category of Relations]] and [[Foundations/Category Theory/Category of Partial Functions]]
and note:
$$
\mathrm{Set} \subseteq \mathrm{Part} \subseteq \mathrm{Rel}
$$
### but what are sets actually?
In [[Foundations/Set Theory/Zermelo-Fraenkel Set Theory]], we take the perspective that there are some sets
and there is a notion of $\in$ between them.
In particular, everything is a set, so nonsensical questions like "is $2\in \log$?"
actually make sense (and the answer depends on the convention we took).
In [[Foundations/Category Theory/Category Theory]], we would much rather look at sets as some objects
and then have functions between them be other "things".
We need to list a slightly different set of axioms, 
but we can still capture the intuitive notion of a set.
The difference now is that there is no notion of $a\in b$ by default.
The elements of a set $a$ are functions $f:1\to a$
(where $1=\{ \varnothing \}$, the set of one element).
This notion is formalized as a [[Foundations/Category Theory/Generalized Element]]
This way, the elements of a set like $\mathbb{R}$ are just some functions $f_{r}:1\to \mathbb{R}$,
while a function $\log$ is $\mathbb{R}\to \mathbb{R}$. 
It no longer makes sense to ask if $f_{2}\in \log$ 
because the functions are no longer sets themselves. 
This better captures the usual mathematical intuition we have about sets.
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
