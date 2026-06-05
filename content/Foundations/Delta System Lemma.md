Let $\kappa$ be an infinite [[Foundations/Set Theory/Cardinal]] and $\nu>\kappa$ be a [[Foundations/Regular Cardinal]] with
$$
(\forall \alpha<\nu)\, \lvert \alpha^{<\kappa} \rvert <\nu
$$
Let $\mathcal{R}$ be any family of sets of size $<\kappa$ such that 
$$
\lvert \mathcal{R} \rvert  = \nu
$$
Then there is some $\mathcal{D}\subseteq \mathcal{R}$ such that $\lvert \mathcal{D} \rvert=\nu$ 
and $\mathcal{D}$ is a [[Foundations/Delta System]].
### Proof
WLOG assume that there is some $\rho<\kappa$ such that every $A\in \mathcal{R}$ has $\lvert A \rvert=\rho$.
Now we go by induction on $\rho$.
For $\rho=1$, we get that $\mathcal{R}$ is a $\Delta$ System with root $\varnothing$.
Assume the result for $\rho$, we prove it for $\rho +1$. 
If some $a\in \bigcup A$ has $\nu$ many $A\in \mathcal{R}$ with $a\in A$,
then remove it from everywhere and apply induction hypothesis.
So assume that every $a\in \bigcup A$ has $<\nu$ many $A\in \mathcal{R}$ with $a\in A$.
Order $\mathcal{R}=\{ A_{\alpha} : \alpha<\nu \}$.
Then just build a chain of nonintersecting elements and use [[Foundations/Ordinals/Cofinal]]ity.

Now the limit case. 
Assume the result for all $\rho<\lambda$.
idk man does it even matter atp

### Special case
Let $\kappa=\omega$ and $\nu=\omega_{1}$.
Every uncountable family of finite sets contains an uncountable [[Foundations/Delta System]].
