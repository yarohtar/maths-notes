The axiom of infinity asserts the existence of a [[Foundations/Successor Set]]
$$
(\exists x)(x\text{ is a successor set})
$$
We can then show that there's a smallest successor set, 
i.e. we can prove:
$$
(\exists x)(x\text{ is a successor set}\land(\forall y)(y\text{ is a successor set})\implies x\subseteq y)
$$
To prove it,
In a model, pick a successor set $y$ using (Inf). 
Form the set
$$
z=\{ t\in \mathbb{P}y\mid t \text{ is a successor set} \}
$$
Since $y\in z$ we can form $x=\bigcap z$. 
It's easy to check that $x$ is the smallest successor set, 
which we denote by $\omega$.

Every successor set contained in $\omega$ is $\omega$ i.e.
$$
(\forall x\subseteq \omega)((0\in x\land(\forall y\in x)(y^{+}\in x))\implies x=\omega)
$$
where $(\forall a\subseteq b)p$ is a shorthand for $(\forall a)(a\subseteq b\implies p)$
for any formula $p$ 

So inside $V$ we have true induction! We call this $\omega$-induction
But still, from the outside there may be subsets of $\omega$ that are not sets in $V$ 
