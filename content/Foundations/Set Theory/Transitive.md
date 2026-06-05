A set $x$ is transitive if every member of a member of $x$ is in $x$ i.e.
$$
(\forall y)((\exists z)(z\in x \land y\in z)\implies y\in x)
$$
Equivalently 
$$
\bigcup x\subseteq x
$$

### Lemma
$$
(\forall x)(\exists t)(t\text{ is transitive}\land(x\subseteq t))
$$
#### Proof
We define '$f$ is an attempt' to mean:
'$f$ is a function' and $(dom\ f\in \omega)$ and $(f(0)=x)$ and
$$
(\forall n\in \omega)\left( n^{+}\in dom\ f \implies f(n^{+})=\bigcup f(n) \right)
$$
An easy $\omega$-induction shows that two attempts agree on their common domain
$$
(\forall f)(\forall g)(\forall n)((f \text{ is an attempt}\land g\text{ is an attempt}\land (n\in \operatorname{dom}f)\land(n\in \operatorname{dom}g))\implies f(n)=g(n))
$$
Another $\omega$-induction shows that every $n\in \omega$ is in the domain of same attempt
$$
(\forall n\in \omega)(\exists f)(f\text{ is an attempt}\land(n\in \operatorname{dom}f))
$$

TODO finish proof