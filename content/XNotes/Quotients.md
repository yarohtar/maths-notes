For $X$ [[XNotes/Normed Space]], $N$ a closed subspace of $X$, have Quotient vector space $X / N$ with projection map $\pi$.
Want to put a norm on $X /N$
### Proposition
$X$ normed, $N$ a closed subspace of $X$. 
Then $\lVert z \rVert=\inf \{ \lVert x \rVert : x \in X, \pi x=z \}$ defines a norm on $X /N$. Moreover, $\pi$ is continuous
$X$ is [[Analysis/Banach Space]] $\implies$ $X /N$ is Banach.

#### Proof
##### $\lVert  \rVert$ a norm:
Need that $\lVert z \rVert=0$ and $z\in X /N \implies z=0$
In other words that for all $x$ in $X$ we have $\lVert \pi(x) \rVert=0\implies x \in N$
Have $x_{1},x_{2},\dots \in X$ with $\pi(x_{n})=\pi(x)$ and $\lim_{ n \to \infty } \lVert x_{n} \rVert=0$
Knowing $x_{n}-x\in N$, we conclude that $x\in\overline N=N$
##### $\pi$ continuous
Have $\lVert \pi(x) \rVert\leq \lVert x \rVert$ for all $x \in X$ (definition of $\lVert  \rVert$)
##### $X$ Banach $\implies$ $X /N$ Banach
For all $z \in X /N$ with $\lVert z \rVert<1$ there is some $x \in X$ with $\lVert x \rVert<1$ and $\pi(x)=2$, so $\pi(B_{X})$ is dense in $B_{X /N}$
Done by [[XNotes/Open Mapping Lemma]]

WARNING If $T:X\to Y$ continuous, then it is not always true that $X /KerT$ isomorphic to the image.
EG identity from $l_{1}$ to $l_{2}$: $X /KerT$ is complete but image isn't.
