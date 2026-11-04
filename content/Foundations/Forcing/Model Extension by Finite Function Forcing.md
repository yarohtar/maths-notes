Let $M$ be a [[Transitive Model]] of $ZFC$ and $X,Y\in M$ with $X$ infinite.
Let $(\mathbb{P},\leq,\mathbb{1})$ with $\mathbb{P}=\mathrm{Fn}(X,Y)$ be a [[Finite Function Forcing]].
Suppose $G$ is a $\mathbb{P}$-[[Generic Filter]] over $M$.
Then

$$
f=\bigcup G
$$

is a surjection from $X$ to $Y$ and $f\not\in M$.
Moreover $f\in M[G]$ and:

$$
M[G] \models f:X\twoheadrightarrow Y
$$

where $M[G]$ is the [[Model Extension]] of $M$ by $G$.

### Proof

First note that $(\mathbb{P},\leq,\mathbb{1})\in M$.
As $G$ is a [[Filter]], it follows that $f$ is a function.
Let $\mathcal{D}_{0}$ and $\mathcal{D}_{1}$ be as defined in [[Finite Function Forcing]].
Then $\mathcal{D}_{0}\subseteq M$ and $\mathcal{D}_{1}\subseteq M$,
so $G$ is both a $\mathcal{D}_{0}$-[[Generic Filter]] and a $\mathcal{D}_{1}$-[[Generic Filter]].
We conclude that $\mathrm{dom}(f)=X$ and, as $X$ is infinite, $\mathrm{ran}(f)=Y$.
Thus $f$ is a surjective function $X\to Y$.
Suppose that $f\in M$ and let $N_{f}$ be as in [[Finite Function Forcing]].
Then $N_{f}\in M$ so $G$ is an $\{ N_{f} \}$-[[Generic Filter]].
But then $f=\bigcup G\neq f$ is a contradiction.

We also know that [[Model Extension]]

$$
M[G] \models ZFC
$$

and also $G\in M[G]$.
Thus $f\in M[G]$ by the [[Union axiom]],
and proof of surjectivity can be done in $M[G]$ as in [[Finite Function Forcing]].
