Let $F$ be a [[Algebra/Field]] and $g\in F[X]$. 
Then the splitting field of $g$ is the smallest field extension of $F$
such that $g$ factorizes into linear factors. 
### Method
In general, to find the splitting field we do the following:
Factor $g$ into irreducible factors $g=g_{1},g_{2},\dots,g_{k}$ in $F[X]$.
Choose any nonlinear factor $f$. 
Construct the field extension $F[X] /(f)$.
In this new field, $X$ will be a root of $f$ and hence of $g$
Continue the process until $g$ completely factors. 

We are basically introducing a new root $X$ that satisfies $f(X)=0$ at each step.

### Lemma
Let $p$ be prime and $\mathbb{F}_{p}$ be a [[Algebra/Finite Field]]
Let $g$ be an irreducible polynomial of degree $n$ in $\mathbb{F}_{p}[X]$
The splitting field of $g$ over $\mathbb{F}_{p}$ is $\mathbb{F}_{p^{n}}$ 
(i.e. $\mathbb{F}_{p}[X] /(g)$)
#### Proof (sketch)
Needs [[Algebra/Galois Theory]] but basically, after adding one root to $\mathbb{F}_{p}$
we can check that the resulting field is $\mathbb{F}_{p^{n}}$ and we can also check 
that we have added *every* root.
This is because if $g(\alpha)=0$, then $g(\alpha^{p})=g(\alpha)^{p}=0$ etc.
(due to [[Algebra/Ring Theory/A Freshman's Dream]])
(I THINK AT LEAST)
