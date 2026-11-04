NONEXAMINABLE in Part II
For any normed space $X$ there is a completion of $X$
meaning a [[Complete]] [[Normed Space]] in which $X$ is dense

### Proof

Let $(x_{n})\sim(y_{n})$ if $x_{n}-y_{n}\to 0$ as $n\to \infty$
Let $\tilde{X}$ be the set of all [[Cauchy Sequence]]s in $X$
quotiented by the equivalence relation $\sim$
This is naturally a [[Vector Space]]
It is also a [[Normed Space]] with norm

$$
\lVert [(x_{n})] \rVert=\lim_{ n \to \infty }\lVert x_{n} \rVert
$$

Suppose $[(x_{n}^{(m)})]_{m\in \mathbb{N}}$ is some sequence in $\tilde{X}$
This converges to the diagonal $[(x_{n}^{(n)})]$
Thus $\tilde{X}$ is [[Complete]]

Also $X$ is dense in $\tilde{X}$ via $x\to[(x,x \dots)]$
