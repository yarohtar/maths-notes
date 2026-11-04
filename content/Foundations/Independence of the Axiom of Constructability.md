Let $V=L$ denote the [[Axiom of Constructability]].
We already know that

$$
L\models V=L
$$

and $L$ is the [[Constructible Model of Set Theory]].

Now we prove that there is a [[Model]] of $ZFC$ in which $V\neq L$.

Let $M$ be a [[Transitive Model]] of $ZFC$.
Let $\mathbb{P}=\mathrm{Fn}(\omega,\omega)$ be a [[Finite Function Forcing]].
Let $G$ be a $\mathbb{P}$-[[Generic Filter]] over $M$.
By [[Model Extension by Finite Function Forcing]], we find $f\in M[G]\setminus M$.
Also $M[G]\models ZFC$.
Suppose

$$
M[G] \models V=L
$$

i.e.

$$
M[G] \models (\forall x)\, (\exists \alpha)\, x\in L_{\alpha}
$$

Apply this to $f$ and conclude

$$
M[G] \models (\exists \alpha)\, f\in L_{\alpha}
$$

But the [[Constructible Hierarchy]] $L$ is [[Absolute]], so $L_{\alpha }\in M$.
But $M$ is [[Foundations/Set Theory/Transitive|Transitive]] so $f\in M$ which is a contradiction.
